
/** ---------------------- APPLICATION ---------------------- **/

export var GLOBAL_APP_TITLE: string = "Jacob Robert Pratt";
export var GLOBAL_APP_DESCRIPTION: string = "Personal portfolio of projects and work experience.";

export var GLOBAL_APP_COPYWRITE: string = '© 2026 '+GLOBAL_APP_TITLE+' Inc. All rights reserved.';



/** ---------------------- PATH ---------------------- **/

import path from 'path';
export const PATH_ROOT_APP = path.join( process.cwd() , "app" );


/** ---------------------- GLOBAL CLASS NAMES ---------------------- **/

export const GlobalClassNameDictionary = {
    html: { classname: "h-full w-full" },
    body: { classname: "min-h-full min-w-full"},
    main: { classname: "min-h-screen min-w-full"}
}