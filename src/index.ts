import { Subject } from "./subject";
import data from "../data/subject_data.json"
import { write_data_to_HTML } from "./write_data";

const subjects: Subject[] = data;
write_data_to_HTML(subjects);


// const contentsElem = document.getElementById('contents');
// if(!!contentsElem) {
//     contentsElem.innerText = `${user.familyName} ${user.givenName}`;
// }