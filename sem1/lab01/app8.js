let name = process.argv[2]

//if(name) <--zapis skrócony tego co poniżej
if(name !== undefined) {
    console.log('Hello ', name);
}   
else {
    console.log('Hello Sir');
} 