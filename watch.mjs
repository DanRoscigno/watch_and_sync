import { watch } from "chokidar"

const sourceEnglish = "./docs/en/"
const destinationEnglish = "./docusaurus/docs/"

const watcher = watch(sourceEnglish, {
    persistent: true,
    usePolling: false,
})

watcher
    .on('add', path => console.log(`File ${path} has been added`))
    .on('change', path => console.log(`File ${path} has been changed`))
    .on('unlink', path => console.log(`File ${path} has been removed`));


