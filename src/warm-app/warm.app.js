let todo;

export function bootstrap() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => todo = json)
}

export function mount() {
    return Promise.resolve()
        .then(()=> {
            let el = document.getElementById("cool-app");
            if (!el) {
                el = document.createElement('div');
                el.id = 'app2';
                document.body.appendChild(el);
            }
            el.innerHTML = `
                <div>
                    Warm: ${todo.title}
                </div>
            `;
        });
}

export function unmount() {
    return Promise.resolve()
        .then(()=> {
            document.getElementById("cool-app").innerHTML = ``;
            console.log('uncool')
        });
}
