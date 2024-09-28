"use strict";

let modalNumber = document.querySelector(".modalNumber");
let team = document.querySelector(".skidki");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                modalNumber.classList.add("show");
            } else {
                modalNumber.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.75,
    }
);

observer.observe(team);