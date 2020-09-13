
let tableOpen;
document.write(tableOpen = "<table class='tableClass' id='tableID' style=\"border-collapse: collapse; border-spacing:0px; width: 500px; height: 500px;\">")
let i;
let j;
let k = 1;
for(i=1;i<=10;i++){
    document.write("<tr id='rowID' style=\"border-style: ridge;border-color: darkgrey\">")
        for(j=1;j<=10;j++){
            document.write("<td id='columnID' style=\"border-style:ridge;border-color: darkgrey; font-weight: bold; padding-left: 5px; font-size: 30px\">")
                document.write(k*j)
            document.write("</td>")
        }
    k ++
    document.write("</tr>")

}
document.write(tableOpen += "</table>")



