const angle_right = document.querySelectorAll(".angle-right-div")
const angle_left = document.querySelectorAll(".angle-left-div")

const shop_now_divs = Array.from(document.querySelectorAll(".shop-now-div"))

const nav_div_arr = Array.from(document.querySelectorAll(".nav_div"))

nav_div_arr.forEach(element => {
    element.children[0].addEventListener("mouseenter", () => {
        element.children[1].style.display = "grid"
    })

    element.addEventListener("mouseleave", () => {
        element.children[1].style.display = "none"
    })
})

shop_now_divs.forEach(shop_now_div => {
    shop_now_div.children[0].addEventListener("mouseenter", () => {
        shop_now_div.children[0].style.color = "hsl(0, 0%, 63%)"
        shop_now_div.children[1].style.filter = "invert(80%) sepia(0%) saturate(1935%) hue-rotate(209deg) brightness(86%) contrast(67%)"
    })

    shop_now_div.children[1].addEventListener("mouseenter", () => {
        shop_now_div.children[0].style.color = "hsl(0, 0%, 63%)"
        shop_now_div.children[1].style.filter = "invert(80%) sepia(0%) saturate(1935%) hue-rotate(209deg) brightness(86%) contrast(67%)"
    })
})

shop_now_divs.forEach(shop_now_div => {
    shop_now_div.children[0].addEventListener("mouseleave", () => {
        shop_now_div.children[0].style.color = "hsl(0, 0%, 0%)"
        shop_now_div.children[1].style.filter = "none"
    })

    shop_now_div.children[1].addEventListener("mouseleave", () => {
        shop_now_div.children[0].style.color = "hsl(0, 0%, 0%)"
        shop_now_div.children[1].style.filter = "none"
    })
})

let index = 0
let slides_arr = ["slide-one", "slide-two", "slide-three"]

Array.from(angle_right).forEach(right_angle => {
    right_angle.addEventListener("click", () => {
        index = index + 1

        if (index === 3) index = 0

        slides_arr.forEach(slide_class => {
            const slide = document.querySelector(`.${slide_class}`)
            slide.classList.add("display")
        })

        const new_slide = document.querySelector(`.${slides_arr[index]}`)
        new_slide.classList.remove("display")
    })
})

Array.from(angle_left).forEach(left_angle => {
    left_angle.addEventListener("click", () => {
        index = index - 1

        if (index < 0) index = 0

        slides_arr.forEach(slide_class => {
            const slide = document.querySelector(`.${slide_class}`)
            slide.classList.add("display")
        })

        const new_slide = document.querySelector(`.${slides_arr[index]}`)
        new_slide.classList.remove("display")
    })
})




const menu_icons = Array.from(document.querySelectorAll(".menu-icon"))
const close_icons = Array.from(document.querySelectorAll(".close-icon"))
const overlays = Array.from(document.querySelectorAll(".overlay"))
const mobile_navigators = Array.from(document.querySelectorAll(".mobile-navigator-div"))

menu_icons.forEach(menu_icon => {
    menu_icon.addEventListener("click", () => {
        overlays.forEach(overlay => {
            overlay.classList.toggle("display")
        })
        mobile_navigators.forEach(mobile_navigator => {
            mobile_navigator.classList.toggle("display")
        })
    })
})

close_icons.forEach(close_icon => {
    close_icon.addEventListener("click", () => {
        overlays.forEach(overlay => {
            overlay.classList.add("display")
        })
        mobile_navigators.forEach(mobile_navigator => {
            mobile_navigator.classList.add("display")
        })
    })
})

const mobile_angles_left = Array.from(document.querySelectorAll(".mobile-angle-left"))
const mobile_angles_right = Array.from(document.querySelectorAll(".mobile-angle-right"))

let index_mobile = 0
const slides_classes_arr = ["mobile-slide-one", "mobile-slide-two", "mobile-slide-three"]

mobile_angles_right.forEach(mobile_angle_right => {
    mobile_angle_right.addEventListener("click", () => {
        index_mobile = index_mobile + 1

        if (index_mobile === 3) index_mobile = 0

        slides_classes_arr.forEach(slide_class => {
            const slide = document.querySelector(`.${slide_class}`)
            slide.classList.add("display")
        })

        const current_slide = document.querySelector(`.${slides_classes_arr[index_mobile]}`)
        current_slide.classList.remove("display")
    })
})

mobile_angles_left.forEach(mobile_angle_left => {
    mobile_angle_left.addEventListener("click", () => {
        index_mobile = index_mobile - 1

        if (index_mobile <= 0) index_mobile = 0

        slides_classes_arr.forEach(slide_class => {
            const slide = document.querySelector(`.${slide_class}`)
            slide.classList.add("display")
        })

        const current_slide = document.querySelector(`.${slides_classes_arr[index_mobile]}`)
        current_slide.classList.remove("display")
    })
})