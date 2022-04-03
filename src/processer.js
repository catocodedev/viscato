const fs = require('fs');
const http = require('https');

exports.run = async function (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) reject(err);
            var html = '';
            // add viscato resources
            // donwload resources
            const filew = fs.createWriteStream("rendered/vis.css");
            const request = http.get("https://raw.githubusercontent.com/catocodedev/viscato/main/resources/vis.css", function (response) {
                response.pipe(filew);
            });
            const filew2 = fs.createWriteStream("rendered/vis.js");
            const request2 = http.get("https://raw.githubusercontent.com/catocodedev/viscato/main/resources/vis.js", function (response) {
                response.pipe(filew2);
            });
            html += '<link rel="stylesheet" href="vis.css">\n<script src="vis.js"></script>\n';
            data.split(';').forEach(line => {
                line = line.trim();
                if (line.startsWith('#')) {
                    //
                }
                else if (line.startsWith('(h1)')) {
                    html = html + `<h1>${line.substring(4)}</h1>`;
                } else if (line.startsWith('(title)')) {
                    html = html + `<title>${line.substring(7)}</title>`;
                } else if (line.startsWith('(p)')) {
                    html = html + `<p>${line.substring(3)}</p>`;
                } else if (line.startsWith('(img)')) {
                    html = html + `<img src="${line.substring(5)}" />`;
                }
                else if (line.startsWith('(head)')) {
                    html = html + `<head>`;
                }
                else if (line.startsWith('(body)')) {
                    html = html + `<body>`;
                }
                else if (line.startsWith('~body')) {
                    html = html + `</body>`;
                }
                else if (line.startsWith('~head')) {
                    html = html + `</head>`;
                }
                else if (line.startsWith('(ul)')) {
                    html = html + `<ul>`;
                }
                else if (line.startsWith('~ul')) {
                    html = html + `</ul>`;
                }
                else if (line.startsWith('(li)')) {
                    html = html + `<li>${line.substring(3)}</li>`;
                }
                else if (line.startsWith('(a)')) {
                    html = html + `<a href="${line.substring(3)}.html">${line.substring(3)}</a>`;
                }
                else if (line.startsWith('(br)')) {
                    html = html + `<br />`;
                }
                else if (line.startsWith('(button)')) {
                    html = html + `<button>${line.substring(8)}</button>`;
                }
                else if (line.startsWith('(input)')) {
                    html = html + `<input type="text" />`;
                }
                else if (line.startsWith('(select)')) {
                    html = html + `<select>`;
                }
                else if (line.startsWith('~select')) {
                    html = html + `</select>`;
                }
                else if (line.startsWith('(option)')) {
                    html = html + `<option>${line.substring(8)}</option>`;
                }
                else if (line.startsWith('(table)')) {
                    html = html + `<table>`;
                }
                else if (line.startsWith('~table')) {
                    html = html + `</table>`;
                }
                else if (line.startsWith('(tr)')) {
                    html = html + `<tr>`;
                }
                else if (line.startsWith('~tr')) {
                    html = html + `</tr>`;
                }
                else if (line.startsWith('(td)')) {
                    html = html + `<td>${line.substring(3)}</td>`;
                }
                else if (line.startsWith('(h2)')) {
                    html = html + `<h2>${line.substring(3)}</h2>`;
                }
                else if (line.startsWith('(h3)')) {
                    html = html + `<h3>${line.substring(3)}</h3>`;
                }
                else if (line.startsWith('(h4)')) {
                    html = html + `<h4>${line.substring(3)}</h4>`;
                }
                else if (line.startsWith('(h5)')) {
                    html = html + `<h5>${line.substring(3)}</h5>`;
                }
                else if (line.startsWith('(h6)')) {
                    html = html + `<h6>${line.substring(3)}</h6>`;
                }
                else if (line.startsWith('(hr)')) {
                    html = html + `<hr />`;
                }
                else if (line.startsWith('(br)')) {
                    html = html + `<br />`;
                }
                else if (line.startsWith('(pre)')) {
                    html = html + `<pre>`;
                }
                else if (line.startsWith('~pre')) {
                    html = html + `</pre>`;
                }

                html = html + "\n";
            });
            resolve(html);
        });
    });
}
