export default defineEventHandler((event) => {
    const users = getRouterParam(event, 'users')

    return users
})