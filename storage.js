function go_home(){
    window.location.href = "./index.html";
}
function set_key() {
    ls_key = document.getElementById("title").value;
    ls_value = document.getElementById("content").value;
    localStorage.setItem(ls_key, ls_value);
    window.location.href = "./index.html";
}

function clear_all(){
    localStorage.clear();
    window.location.href = "./index.html";
}
function show_key(this_key){
    alert(this_key);
}

function edit_item(key_string){
    this_key = key_string.toString().trim();
    title_text = this_key;
    content_text = localStorage.getItem(this_key).valueOf();
    //alert(content_text);
    sessionStorage.setItem("local_temp", title_text)
    window.location.href = "./edit_item.html";
}

function load_item(){
    var localStoreKey = sessionStorage.getItem("local_temp");
    document.getElementById("title").value = localStoreKey;
    document.getElementById("content").value = localStorage.getItem(localStoreKey);
    sessionStorage.removeItem(localStoreKey);
    sessionStorage.clear();
    set_date();
}

function remove_item(key_string){
    // the key that is sent in through the function has a leading and trailing 'space' with it
    // to account for this the variable is called .toString() and then trim() eliminates white space
    this_key = key_string.toString().trim();
    localStorage.removeItem(this_key);
    window.location.href = "./index.html";
}

function read_keys() {
    // get key names from local storage, determine how many and display to page
    var key_len = localStorage.length;
    // alert(key_len);
    if (key_len != 0) {
        if (key_len == 1){
            var key_len_string = "You have " + key_len + " item saved ";
            document.getElementById("key_length").innerHTML = key_len_string;
        }
        else {
            var key_len_string = "You have " + key_len + " item saved.";
            document.getElementById("key_length").innerHTML = key_len_string;    }
        for ( var i = 0, len = key_len; i < len; ++i ) {
            var k_string = window.localStorage.key(i);
            var v_string = window.localStorage.getItem(k_string);
         
            new_row = document.createElement("tr");

            
            title_column = document.createElement("td");
            column_title_text = document.createTextNode(k_string);
            title_column.appendChild(column_title_text);
            new_row.appendChild(title_column);

            value_column = document.createElement("td");
            column_value_text = document.createTextNode(v_string);
            value_column.appendChild(column_value_text);
            new_row.appendChild(value_column);

     
            edit_column = document.createElement("td");
       
            edit_button = document.createElement("button");
            edit_text = document.createTextNode("View/Edit");
        
            edit_button.className="btn btn-warning";
          
            edit_button.setAttribute('onclick','edit_note( " '+k_string+' " )');
        
            edit_button.appendChild(edit_text);
            edit_column.appendChild(edit_button);
    
            new_row.appendChild(edit_column);

     
            remove_column = document.createElement("td");
       
            remove_button = document.createElement("button");
            remove_text = document.createTextNode("Delete/Remove");
      
            remove_button.className="btn btn-outline-danger";
      
            var remove_string = toString(k_string);
         
            remove_button.setAttribute('onclick','remove_item( " '+k_string+' " )');
       
            remove_button.appendChild(remove_text);
            remove_column.appendChild(remove_button);
      
            new_row.appendChild(remove_column);

            document.querySelector("#saved_items").appendChild(new_row);
         }
    }
    set_date();
}

function set_date(){
    let now = new Date();
    this_year = now.getFullYear();
    footer_text = "This application is free to use by McLeod_2022" + this_year;
    document.getElementById("footer_here").innerHTML = footer_text;
}
