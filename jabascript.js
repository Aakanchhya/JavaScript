class Stack
    {
        constructor(tos,array)
        {
            this.tos = tos;
            this.array = array;
        }
        push(insertItem)
        {
            this.tos++;
            this.array[this.tos] = insertItem;
        }
        pop()
        {
            let item;
            item = this.array[this.tos];
            this.tos--;
            return item;
        }
        displayStack()
        {
            console.log(this.array);
        }
    }

let operations = new Stack(-1,[]);
operations.push(3);
operations.displayStack();
console.log(operations.pop());
operations.displayStack();