function run(){
    // var something  = document.getElementsByClassName("page-header__title")[0];
    // something.innerHTML = "President Fart";

    var all_tags= ["H1", "H2", "P", "LI", "SPAN"];
    for (var i = 0; i<all_tags.length; i++){
        var elements_by_tag = document.getElementsByTagName(all_tags[i]);
        console.log(i);
        for (var j = 0; j < elements_by_tag.length; j++){
            console.log(j)
            
            var the_ele = elements_by_tag[j];
            var the_ele_str = the_ele.innerHTML;
            console.log(the_ele_str);
            the_ele_str = the_ele_str.replace("Donald Trump", "President Farts");
            the_ele_str = the_ele_str.replace("Donald J Trump", "President Farts");
            the_ele_str = the_ele_str.replace("Donald J. Trump", "President Farts");
            console.log(the_ele_str);

            the_ele.innerHTML = the_ele_str;

        }
    }
}



run();