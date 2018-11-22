/* JS Responsive Widget Ads Box */

var bacalagi_id = 5;
var bacalagi_now = new Date()
var detik = bacalagi_now.getSeconds()
var bacalagi_place = detik % bacalagi_id;
bacalagi_place += 1;
if (bacalagi_place == 1) {
  url = "#";
  alt = "Deskripsi Iklan";
  title = "Judul Iklan";
  banner = "https://4.bp.blogspot.com/-duqxcfdwonw/UuXm-l01ObI/AAAAAAAAA6U/q3yADd2SXUg/s1600/300x250.gif";
  width = "300";
  height = "250";
}
if (bacalagi_place == 2) {
  url = "#";
  alt = "Deskripsi Iklan";
  title = "Judul Iklan";
  banner = "https://1.bp.blogspot.com/-M1T9_3K2eGQ/UvSTYZADGRI/AAAAAAAABHU/exrqmrKNpWU/s1600/Banner+300+x+250+pixels.gif";
  width = "300";
  height = "250";
}
if (bacalagi_place == 3) {
  url = "#";
  alt = "Deskripsi Iklan";
  title = "Judul Iklan";
  banner = "https://2.bp.blogspot.com/-2PPBDyx9ty8/Vi4Yj8frBdI/AAAAAAAADN0/nbY7MbLz-Bc/s1600/maxcdn-speed-website.gif";
  width = "300";
  height = "250";
}
if (bacalagi_place == 4) {
  url = "#";
  alt = "Deskripsi Iklan";
  title = "Judul Iklan";
  banner = "https://s.adroll.com/a/PAD/HOD/PADHODRN3NAWNAX74T4AHW.gif";
  width = "300";
  height = "250";
}
if (bacalagi_place == 5) {
  url = "#";
  alt = "Deskripsi Iklan";
  title = "Judul Iklan";
  banner = "https://1.bp.blogspot.com/-R2SaiRXUY6E/UuXm9RSfvFI/AAAAAAAAA6M/T8E-aTidXY4/s1600/300x250_biru.gif";
  width = "300";
  height = "250";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
