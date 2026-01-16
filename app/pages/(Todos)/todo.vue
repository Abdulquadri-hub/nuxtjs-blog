<script setup>
    const todoName = useState('todoName', () => '')
    const todos  = useState('todos', () => [])

    const addTodo = () => {
        if(!todoName.value.trim()) return

        todos.value.push({
            id: Date.now(),
            name: todoName.value
        })

        todoName.value = ''
    }

    const removeTodo = (todoId) => {
        const index = todos.value.findIndex(todo => todo.id === todoId)

        if(index !== -1) {
            todos.value.splice(index, 1)
        }
    }

</script>

<template>
    <div class="todo-body">
        <div class="todo-input">
            <label for="name">Enter Todo</label><br>
            <input type="text" name="" v-model="todoName" id=""><br>
            <button @click="addTodo()">Add todo</button>
        </div>

        <div v-for="todo in todos" :key="todo.id" class="todo-lists">
            {{ todo.name }}
            <button @click="removeTodo(todo.id)">remove</button>
           
        </div>
    </div>
</template>

<style scoped>

</style>