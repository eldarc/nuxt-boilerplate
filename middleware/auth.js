export default function ({ store, route, redirect }) {
  // uPort login example.
  if(route.name === 'index' && route.hash) {
    const i = route.hash.indexOf('=')
    const accessToken = [route.hash.slice(0, i), route.hash.slice(i + 1)]

    if(accessToken[0] && accessToken[0] === '#access_token' && accessToken[1]) {
      store.dispatch('auth/uPortLogin', accessToken[1].trim()).then(() => {
        redirect('/dashboard')
      })
    }
  } else if (store.state.auth.isAuthenticated && route.name === 'index') {
    redirect('/dashboard')
  } else if (!store.state.auth.isAuthenticated && route.name !== 'index') {
    redirect('/')
  }
}
