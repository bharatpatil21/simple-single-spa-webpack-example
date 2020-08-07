import * as singleSpa from 'single-spa';

singleSpa.registerApplication('home-react', () =>
  import ('../home-react/home-react.app.js'), pathPrefix('/home'));
singleSpa.registerApplication('auth', () =>
  import ('../auth/auth.app.js'), pathPrefix('/auth'));
singleSpa.registerApplication('dashboard', () =>
  import ('../dashboard/dashboard.js'), pathPrefix('/dashboard'));
singleSpa.registerApplication('app-1', () =>
  import ('../app1/app1.js'), pathPrefix('/app1'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    if(location.pathname === "/") {
      singleSpaNavigate('/home')
    } else {
      console.log('location.pathname----',location.pathname)
    return location.pathname.startsWith(`${prefix}`);
    }
  }
}