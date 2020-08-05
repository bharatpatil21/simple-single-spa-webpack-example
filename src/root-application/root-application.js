import * as singleSpa from 'single-spa';

singleSpa.registerApplication('home-react', () =>
  import ('../home-react/home-react.app.js'), pathPrefix('/home'));
singleSpa.registerApplication('login-react', () =>
  import ('../login-react/login-react.app.js'), pathPrefix('/login'));
singleSpa.registerApplication('app-1', () =>
  import ('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
  import ('../app2/app2.js'), pathPrefix('/app2'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    if(location.pathname === "/") {
      singleSpaNavigate('/home')
    } else {
    return location.pathname.startsWith(`${prefix}`);
    }
  }
}