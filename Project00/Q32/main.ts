let current_users : string [] = ["ahmed","waqas","ashraf","mubeen","asghar"];
let new_users : string [] = ["mubeen","waqas","fahad","ali","amir"];
let current_users_lower : string [] =current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
    } else {
        console.log(`yes ${new_user}, is still in available list`)
    }
}