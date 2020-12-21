export abstract class Constants {
    // API urls 
    static readonly URL_AUTHENTICATE = '/users/authenticate';
    static readonly URL_MENU = '/users/getMenu';
    static readonly URL_REGISTER = '/users/register';
    static readonly URL_USERS = '/users';

    //PAGES 
    static readonly PG_ACCOUNTHOME = '/accounthome';
    static readonly PG_HOME = '/home';
    static readonly PG_LOGIN = '/login';
    static readonly PG_REGISTER = '/register';
    static readonly PG_DASHBOARD = '/dashboard';
    static readonly PG_HOMEACCOUNT = '/myaccount';

    // string
    static readonly CURRENTUSER = 'currentUser';

    // roles
    static readonly USER = '1';
    static readonly ADMIN = '2';
    static readonly SUPER = '3';
}
