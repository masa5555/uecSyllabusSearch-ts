import { Subject } from "./subject";

function ahref_str(sub_url: string, name: string): string {
    const mainURL = "http://kyoumu.office.uec.ac.jp/syllabus/2020/";
    return "<a href=" + mainURL + sub_url + ">" + name + "</a>"; 
}

function td_str(element: string): string {
    return " <td>" + element + "</td>\n";
}

function tr__str(s: Subject): string {
    return "<tr>\n" 
        + td_str("★") // favorite
        + td_str(s.id)
        + td_str(s.semester)
        + td_str(s.grade)
        + td_str(s.depertment)
        + td_str(s.time)
        + td_str(s.code)
        + td_str(s.category)
        + (s.url === ""? td_str(s.name) : td_str(ahref_str(s.url, s.name)))
        + td_str(s.teachar)
        + "</tr>\n";
}

export function write_data_to_HTML(subjects: Subject[]): void {
    document.writeln("<table>");
    document.writeln("<thead>");
    const table_label: Subject = {
        id: "No.",
        semester: "学期",
        op: "",
        grade: "学年",
        depertment: "類",
        time: "曜日・時間",
        code: "時間割コード",
        category: "分類",
        url: "",
        name: "科目名",
        teachar: "担当教員",
    };
    document.write(
        tr__str(table_label)
    );
    document.writeln("</thead>");

    for (const s of subjects) {
        document.write(tr__str(s));
    }
}

