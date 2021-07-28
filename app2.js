const todosApp = function() {
    return {
        todos : [],

        addTodo : function(todo){
            this.todos.push(todo);
        },

        deleteTodo : function(todo){
            this.todos = this.todos.filter(el => el != todo);
            
        },

        todoCount : function(){
            return this.todos.length;
        },

        makeTodosLowerCase : function(){
            this.todos = this.todos.map(el => el.toLowerCase() );
        },

        loMyTodos : function(){
            console.log(this.todos.join(" | "));
        }
    }
};

// const todosApp = {
//     todos : [],

//     addTodo : function(todo){
//         this.todos.push(todo);
//     },

//     deleteTodo : function(todo){
//         this.todos = this.todos.filter(el => el != todo);
        
//     },

//     todoCount : function(){
//         return this.todos.length;
//     },

//     makeTodosLowerCase : function(){
//         this.todos = this.todos.map(el => el.toLowerCase() );
//     },

//     loMyTodos : function(){
//         console.log(this.todos.join(" | "));
//     }
// };

// let todos=[];

// function addTodo(todo){
//     todos.push(todo);
// }

// function deleteTodo(todo){
//     todos = todos.filter(el => el != todo);
    
// }

// function todoCount(){
//     return todos.length;
// }

// function makeTodosLowerCase(){
//     todos = todos.map(el => el.toLowerCase() );
// }

// function loMyTodos(){
//     console.log(todos.join(" | "));
// }