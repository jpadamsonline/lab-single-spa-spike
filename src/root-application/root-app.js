let abc = "abc";
export function bootstrap() {
    return Promise.resolve(abc);
}
export function mount() {
    return Promise.resolve('def')
        .then(() => {

                let el = document.createElement('div');
                el.id = 'app2';
                document.body.appendChild(el);
            el.innerHTML = `
                <div>
                 <h1>Home</h1>
                </div>
            `;
        } );
}
export function unmount() {
    return Promise.resolve('ghi');
}
