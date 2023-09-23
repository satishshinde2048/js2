export{index as mat}; 
 function index(){
    console.log('called from indexsecond')
}
export function second(){
    console.log('hello world');
}
export default function show(){
    console.log('nice');
}