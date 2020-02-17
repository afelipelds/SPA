const resolveRoutes = (route) => {
    if(route.length <= 3) { //length of the object, in this case, until 999 <- three digits 
        let validRoute = 
            (route === '/') 
              ? route 
              : '/:id'
        return validRoute
    }
    return `${route}`
}

export default resolveRoutes