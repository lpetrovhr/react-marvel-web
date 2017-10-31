import 'whatwg-fetch'
import store from 'store'
import { SubmissionError } from 'redux-form'
import Crypto from 'crypto-js'

import errors from 'constants/errors'

const encodeComponent = str =>
  encodeURIComponent(str)
    .replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`)

export const buildQuery = params =>
  Object.keys(params)
    .map(key => `${encodeComponent(key)}=${encodeComponent(params[key])}`)
    .join('&')

const getApiUrl = (path, query) => {
  let queryPrefix = ''
  let queryStr = ''

  if (query) {
    queryStr = buildQuery(query)
  }

  if (queryStr && !/[&?]$/.test(path)) {
    queryPrefix = !/\?/.test(path) ? '?' : '&'
  }

  const fixedPath = (path[0] === '/') ? path.slice(1) : path

  return `${__API_URL__}/${fixedPath}${queryPrefix}${queryStr}`
}

const jsonParser = response =>
  response.json()
    .then(body => ({ response, body }))

const extractError = error => {
  let debugInfo = { _error: errors(error.error) }
  if (error.code === 400) {
    error.errorv.body.forEach(err => {
      debugInfo[err.path] = errors(err.type)
    })
  }

  return debugInfo
}

const handler = ({ response, body = {} }) => {
  if (body.error) {
    const error = new Error(body.error)
    error.code = body.code
    error.debugInfo = extractError(body)
    error.status = body.status || response.status
    throw error
  }

  if (response.status < 200 || response.status >= 300) {
    const error = new Error(response.statusText)
    error.status = response.status
    throw error
  }

  return body.data
}

const errorHandler = (error) => {
  if (error.status === 401) {
    // Router.pushRoute('/login')
  }

  if (error.debugInfo) throw new SubmissionError(error.debugInfo)

  throw error
}

function fetchApi (path, type, options = {}) {
  const { query, ...opts } = options

  if (type === 'marvel')
    path += generateToken()

  return fetch(getApiUrl(path, query))
    .then(jsonParser)
    .then(handler)
    .catch(errorHandler)
}

function generateToken () {
  const ts = new Date().getTime()
  const hash = Crypto.MD5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
  return `?ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
} 

const getApi = (path, type, query) =>
  fetchApi(path, type, { query })

const fetchWithBody = method => (path, body) =>
  fetchApi(path, { method, body })

export default {
  fetch: fetchApi,
  get: getApi,
}
