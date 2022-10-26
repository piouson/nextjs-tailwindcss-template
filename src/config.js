const environment = process.env.APP_ENV

export const isProd = environment === 'production'
export const isDev = environment === 'development'
export const appName = process.env.APP_NAME
