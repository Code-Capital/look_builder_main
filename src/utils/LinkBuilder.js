export default function LinkBuilder(fabric, item, option) {

    // console.log(option)

    let link;
    if (typeof(option) === "string"){
        link = (`items/${fabric}/${item}/${option}`)
    } else if (option?.hasPreview) {
        link = (`items/${fabric}/${item}/${option.options[option.selectedIndex].variation}`)
    }

    return link;
}
