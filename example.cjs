const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const l = async () => {
    t = []
    await readline.question('please input content:', c => {
        t.append(c)
        readline.close()
    })
    await readline.question('please input pw:', p => {
        t.append(p)
        readline.close()
    })
    console.log(t)
    return t
}
const a = await l()
console.log(a[1]^a[2])