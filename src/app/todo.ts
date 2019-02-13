export class Todo {
id: number;
title: string = '';
complete: boolean = false;
// https://www.sitepoint.com/angular-2-tutorial/
constructor(values:Object = {}){
	Object.assign(this,values);
}


}
