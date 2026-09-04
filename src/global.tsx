
/** ---------------------- APPLICATION ---------------------- **/

export var GLOBAL_APP_TITLE: string = "Jacob Robert Pratt";
export var GLOBAL_APP_DESCRIPTION: string = "Personal portfolio of projects and work experience.";

export var GLOBAL_APP_COPYWRITE: string = '© 2026 '+GLOBAL_APP_TITLE+' Inc. All rights reserved.';

/** ---------------------- PATH ---------------------- **/

import path from 'path';
export const PATH_ROOT_APP = path.join( process.cwd() , "app" );

/** ---------------------- STYLES ---------------------- **/



export const HeaderTitleStyle = {
    classname: "text-4xl font-bold"
}

// const head_classname: string = "sticky top-0 z-50 w-full bg-green-500";
// const nav_classname: string = "container mx-auto flex items-center justify-center";
// const link_classname: string = "hover:text-blue-500 text-white font-bold text-lg";

// const footer_classname: string = "container mx-auto px-4 flex flex-col md:flex-row justify-between items-center";
// const nav_classname: string = "flex space-x-6 text-sm";
// const link_classname: string = "hover:text-gray-400 p-2";