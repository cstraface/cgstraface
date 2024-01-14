"use strict";
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(298);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);




const blogsData = [
    {
        id: 1,
        title: "12 unique examples of portfolio websites",
        date: "April 12, 2023",
        img: "img/news/1.jpg"
    },
    {
        id: 2,
        title: "Dealing with spring allergy symptoms",
        date: "April 01, 2023",
        img: "img/news/2.jpg"
    },
    {
        id: 3,
        title: "Why we should read fewer books",
        date: "March 30, 2023",
        img: "img/news/3.jpg"
    },
    {
        id: 4,
        title: "How to use python for web scraping",
        date: "Feb 20, 2023",
        img: "img/news/4.jpg"
    },
    {
        id: 5,
        title: "Skills and tools for efficient web design",
        date: "March 15, 2023",
        img: "img/news/5.jpg"
    },
    {
        id: 6,
        title: "Best wireframe tools for web designers",
        date: "Feb 11, 2023",
        img: "img/news/6.jpg"
    },
    {
        id: 7,
        title: "Why we’re crazy about animations",
        date: "Jan 31, 2023",
        img: "img/news/7.jpg"
    }
];
const Blogs = ()=>{
    const { modalToggle , setBlogModal , navChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* .context */ .D);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: "blogs",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "elisc_tm_news fn_w_sminiboxes",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tm_content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "wrapper",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "left fn_w_sminibox",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "elisc_tm_sticky_section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "elisc_tm_title",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "- Blog"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "My blog & news"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "elisc_tm_button transition_link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#contact",
                                            onClick: ()=>navChange("contact"),
                                            children: "Get in touch"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "right fn_w_sminibox",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "elisc_tm_sticky_section",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list elisc_blogs_list",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        children: blogsData.map((blog)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                "data-img": blog.img,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "popup_image",
                                                        src: blog.img,
                                                        alt: "Blog Image"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "list_inner",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "meta",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                className: "svg",
                                                                                src: "img/svg/calendar.svg",
                                                                                alt: "image"
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: blog.date
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "title",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "#",
                                                                                onClick: (e)=>{
                                                                                    e.preventDefault();
                                                                                    modalToggle(true);
                                                                                    setBlogModal(blog);
                                                                                },
                                                                                children: blog.title
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "elisc_tm_read_more",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    className: "line_effect",
                                                                    href: "#",
                                                                    onClick: (e)=>{
                                                                        e.preventDefault();
                                                                        modalToggle(true);
                                                                        setBlogModal(blog);
                                                                    },
                                                                    children: [
                                                                        "Learn More",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                className: "svg",
                                                                                src: "img/svg/rightArrow.svg",
                                                                                alt: "image"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, blog.id))
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);


/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__);





const sitekey = "6LeT0k8pAAAAACjBrgWLUZuIq0IGG4XrygNP-c9i";
//console.log(`Site Key: ${sitekey}`);
//{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
const Contact = ()=>{
    const recaptcha = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [mailData, setMailData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        const token = recaptcha.current.getValue();
        recaptcha.current.reset();
        const mailParams = {
            mailData,
            "g-recaptcha-response": token
        };
        console.log(mailParams);
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("service_vpskuf6", "template_b0z3zhu", mailParams, "jZFfRXuqTehgwi-0j" // public api
            ).then((response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    console.log(onSubmit);
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: "contact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "elisc_tm_contact",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tm_content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "wrapper",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "elisc_tm_title",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "- Let's Connect"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Get in touch"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "info",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "tel:+77 022 444 05 05",
                                                        children: "+77 022 444 05 05"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "mailto:support@elisc.com",
                                                        children: "support@elisc.com"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "href_location",
                                                        href: "#",
                                                        children: "Ave Street Avenue, New York"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fields",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        onSubmit: (e)=>onSubmit(e),
                                        className: "contact_form",
                                        id: "contact_form",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "returnmessage",
                                                "data-success": "Your message has been received, We will contact you soon."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: error ? "empty_notice" : "returnmessage",
                                                style: {
                                                    display: error == null ? "none" : "block"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "first",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "name",
                                                                type: "text",
                                                                placeholder: "Enter your name",
                                                                autoComplete: "off",
                                                                name: "name",
                                                                onChange: (e)=>onChange(e),
                                                                value: name
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "email",
                                                                name: "email",
                                                                onChange: (e)=>onChange(e),
                                                                value: email,
                                                                type: "text",
                                                                placeholder: "Your email",
                                                                autoComplete: "off"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "last",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    id: "message",
                                                    name: "message",
                                                    onChange: (e)=>onChange(e),
                                                    value: message,
                                                    placeholder: "Write something..."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                class: "g-recaptcha",
                                                sitekey: sitekey,
                                                ref: recaptcha
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "elisc_tm_button",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "submit",
                                                    value: "Submit now"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "elisc_tm_map",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mapouter",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "gmap_canvas",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                        width: "100%",
                                        height: 375,
                                        id: "gmap_canvas",
                                        src: "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
                                        frameBorder: 0,
                                        scrolling: "no",
                                        marginHeight: 0,
                                        marginWidth: 0
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                                        dangerouslySetInnerHTML: {
                                            __html: ".mapouter{position:relative;text-align:right;height:375px;width:100%;}"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.embedgooglemap.net",
                                        children: "how to add google map"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                                        dangerouslySetInnerHTML: {
                                            __html: ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}"
                                        }
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(298);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);




const homeData = {
    skills: [
        "Guru",
        "Admin",
        "Manager"
    ]
};
const Home = ()=>{
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setText(text < homeData.skills.length - 1 ? text + 1 : 0);
        }, 5000);
        return ()=>clearInterval(interval);
    });
    const { navChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* .context */ .D);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: "home",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "elisc_tm_home",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tm_content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "details",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "title",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            children: [
                                                "Hi, I'm ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "blueColor",
                                                    children: "Chris!"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "cd-headline rotate-1",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "blc",
                                                        children: "Shopify"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "cd-words-wrapper",
                                                        children: homeData.skills.map((skill, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                className: text === i ? "is-visible" : "is-hidden",
                                                                children: skill
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Based in Idaho"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "subtitle",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "I'm an Idaho based product manager with ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "blueColor",
                                                children: "14 years"
                                            }),
                                            " of professional experience, working in D2C and E-Commerce."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "elisc_tm_button transition_link",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#service",
                                                onClick: ()=>navChange("service"),
                                                children: "Shopify Services"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "elisc_tm_button transition_link",
                                            "data-style": "border",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#contact",
                                                onClick: ()=>navChange("contact"),
                                                children: "Get Started"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "tel:+1 208 803 4580",
                                                    children: "Give me a call"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "mailto:cstrafa@gmail.com",
                                                    children: "Shoot me an email"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "href_location",
                                                    href: "#",
                                                    children: "Meridian, Idaho"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "img/about/2.png",
                                alt: "image"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(298);
/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(226);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _sliderProps__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _sliderProps__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Portfolio = ()=>{
    const { setPortfolioModal , modalToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__/* .context */ .D);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SectionContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        name: "portfolio",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "elisc_tm_partners",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "tm_content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "elisc_tm_title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "- Clients"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Customers & clients"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "partners_inner",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/1.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/2.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/3.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/4.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/5.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/6.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/7.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/partners/8.png",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "elisc_tm_full_link",
                                                    href: "#"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "elisc_tm_testimonial_wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tm_content",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "elisc_tm_testimonials",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "elisc_tm_title",
                                "data-position": "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "- Testimonial"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "What client's say?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonials_list",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    ..._sliderProps__WEBPACK_IMPORTED_MODULE_4__/* .sliderProps.testimonial */ .b.testimonial,
                                    className: "owl-carousel owl-theme",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism."
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "short",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "image",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "main",
                                                                "data-img-url": "img/testimonials/1.jpg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "detail",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: "John Doe"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "job",
                                                    children: "User Interface Design at PCL Lab"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Really the Code Quality, Customer Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends."
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "short",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "image",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "main",
                                                                "data-img-url": "img/testimonials/2.jpg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "detail",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: "Keita Smith"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "job",
                                                    children: "Senior Designer at Behance"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully."
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "short",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "image",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "main",
                                                                "data-img-url": "img/testimonials/3.jpg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "detail",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: "Alan Walker"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "job",
                                                    children: "Sales Manager at Vivaco Shop"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "owl-dots"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(298);



const SectionContainer = ({ name , children  })=>{
    const { nav , animation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* .context */ .D);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: name,
        className: `elisc_tm_section ${name == nav ? `animated active ${animation}` : ""}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContainer);


/***/ }),

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(298);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);




const services = [
    {
        id: 1,
        name: "Shopify Store Setup",
        image: "/img/service/1.jpg",
        description: "Get up and running"
    },
    {
        id: 2,
        name: "Shopify Product Catalog Setup",
        image: "/img/service/2.jpg",
        description: "Sell & track your products"
    },
    {
        id: 3,
        name: "Shopify Theme Development",
        image: "/img/service/3.jpg",
        description: "Tailor your shop to your brand"
    },
    {
        id: 4,
        name: "Shopify Store Automations",
        image: "/img/service/4.jpg",
        description: "Eliminate busy work and increase efficiency"
    },
    {
        id: 5,
        name: "Shopify Inventory/Location Setup",
        image: "/img/service/1.jpg",
        description: "Untangle inventory and locations"
    },
    {
        id: 6,
        name: "e-Commerce Administration",
        image: "/img/service/2.jpg",
        description: "Day to day operations"
    }
];
const Service = ()=>{
    const { setServiceModal , modalToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* .context */ .D);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: "service",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "elisc_tm_services",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tm_content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "elisc_tm_service_title",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "elisc_tm_title",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "- Services"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "My Services"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "mailto:cstrafa@gmail.com",
                                children: "cstrafa@gmail.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "service_list",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "popup_image",
                                            src: service.image,
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "list_inner",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "details",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "title",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: service.id
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: service.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: service.description
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, service.id))
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "elisc_tm_video",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "placeholder",
                                src: "img/thumbs/4-2.jpg",
                                alt: "image"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                "data-img-url": "img/service/1.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "overlay"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "play",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "svg",
                                    src: "img/svg/play.svg",
                                    alt: "image"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Intro Video"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "elisc_tm_full_link popup-youtube",
                                href: "https://www.youtube.com/watch?v=7e90gBu4pas"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_AboutMe)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(298);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/SectionContainer.js
var SectionContainer = __webpack_require__(802);
;// CONCATENATED MODULE: ./src/components/about/Experience.js



const experiences = [
    {
        id: 1,
        image: "img/experience/1.jpg",
        date: "2019 - Present",
        company: "Lovevery",
        designation: "Senior Product Manager",
        description: "Responsible for four 0-to-1 consumer launches."
    },
    {
        id: 2,
        image: "img/experience/2.jpg",
        date: "2017 - 2018",
        company: "Zume Inc.",
        designation: "Brand Manager",
        description: "Responsibilities included performance and optimization of ad spend, management of brand messaging through all omnichannel touchpoints, pizza/sides/beverage menu management, eCommerce operations and merchandizing."
    },
    {
        id: 3,
        image: "img/experience/3.jpg",
        date: "2016 - 2017",
        company: "Clorox",
        designation: "Client Insights Consultant",
        description: "Strategic insights consultant providing advanced business analytics and modeling on acquisition targets to Clorox’s New Business Development Unit."
    },
    {
        id: 4,
        image: "img/experience/4.jpg",
        date: "2014 - 2016",
        company: "Kinders BBQ",
        designation: "Brand Manager",
        description: "Responsible for orchestrating Kinder's e-commerce strategy, while overseeing all digital marketing activities, including email and social channels."
    }
];
const Experience = ()=>{
    const { modalToggle , setexperienceModal  } = (0,external_react_.useContext)(context/* context */.D);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "elisc_tm_experience",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tm_content",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "elisc_tm_title",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: "- Experience"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: "My past few years..."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "list",
                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        children: experiences.map((experience)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "popup_image",
                                        src: "img/experience/1.jpg",
                                        alt: "image"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "list_inner",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "short",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "job",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "yellowColor",
                                                                children: experience.date
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                children: experience.designation
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "place",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            children: [
                                                                "-",
                                                                experience.company
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: experience.description
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                className: "elisc_tm_full_link",
                                                href: "#",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    modalToggle(true);
                                                    setexperienceModal(experience);
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }, experience.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const about_Experience = (Experience);

;// CONCATENATED MODULE: ./src/components/about/AboutMe.js





const AboutMe = ()=>{
    const { navChange  } = (0,external_react_.useContext)(context/* context */.D);
    return /*#__PURE__*/ jsx_runtime.jsx(SectionContainer/* default */.Z, {
        name: "about",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "elisc_tm_about",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "tm_content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "elisc_tm_biography",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "left",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mini",
                                                    children: "- Nice to meet you!"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "name",
                                                    children: "Chris Straface"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "job",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "cd-headline letters type",
                                                        children: [
                                                            "",
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "blc",
                                                                children: "Product Manager &"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "cd-words-wrapper",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        className: "is-visible",
                                                                        children: " Dad"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Closet Coder"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "Home Automation Geek"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "elisc_tm_button transition_link",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#portfolio",
                                                onClick: ()=>navChange("portfolio"),
                                                children: "Got a project?"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "Hello there! My name is",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "yellowColor",
                                                            children: "Chris"
                                                        }),
                                                        ". With a decade-long track record steering the helm of e-commerce and direct-to-consumer enterprises, I bring a wealth of expertise as a seasoned product manager."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "My journey has sculpted a unique fusion of marketing finesse and product leadership—an intricate dance between technical proficiency and an acute understanding of customer journeys. Operating with efficiency at the core of my approach, I stand ready to propel your e-commerce venture toward unprecedented growth. Let's collaborate to transform your business aspirations into thriving realities."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "info",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Age"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "36"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Born In"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "href_location",
                                                                    href: "#",
                                                                    children: "California, USA"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Mail"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "mailto:cstrafa@gmail.com",
                                                                    children: "cstrafa@gmail.com"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Phone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "tel:+1 208 803 4580",
                                                                    children: "+1 208 803 4580"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "elisc_tm_counter",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: "14"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Years of Experience"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: "100+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Projects Completed"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "list_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: "30+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Happy Clients"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(about_Experience, {})
            ]
        })
    });
};
/* harmony default export */ const about_AboutMe = (AboutMe);


/***/ }),

/***/ 401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(298);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/ModalContainer.js




const ModalContainer = ({ children , nullValue  })=>{
    const { modalToggle  } = (0,external_react_.useContext)(context/* context */.D);
    let domNode = src_useClickOutside(()=>{
        modalToggle(false);
        nullValue(null);
    });
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "elisc_tm_modalbox opened",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "box_inner",
            ref: domNode,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "close",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#",
                        onClick: ()=>{
                            modalToggle(false);
                            nullValue(null);
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "icon-cancel"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "description_wrap",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ModalContainer = (ModalContainer);

;// CONCATENATED MODULE: ./src/components/popup/BlogPopup.js




const BlogPopup = ()=>{
    const { setBlogModal , blogModal  } = (0,external_react_.useContext)(context/* context */.D);
    console.log(blogModal);
    return /*#__PURE__*/ jsx_runtime.jsx(popup_ModalContainer, {
        nullValue: setBlogModal,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "news_popup_informations",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "image",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "main",
                            "data-img-url": blogModal.img,
                            style: {
                                backgroundImage: `url(${blogModal.img})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "details",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "meta",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "svg",
                                    src: "img/svg/calendar.svg",
                                    alt: "image"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: blogModal.date
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: blogModal.title
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const popup_BlogPopup = (BlogPopup);

;// CONCATENATED MODULE: ./src/components/popup/ExperiencePopup.js




const ExperiencePopup = ()=>{
    const { experienceModal , setexperienceModal  } = (0,external_react_.useContext)(context/* context */.D);
    return /*#__PURE__*/ jsx_runtime.jsx(popup_ModalContainer, {
        nullValue: setexperienceModal,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "descriptions",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "top_image",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "main",
                            "data-img-url": experienceModal.image,
                            style: {
                                backgroundImage: `url(${experienceModal.image})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "infos",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "year",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: experienceModal.date
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "job",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: experienceModal.company
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: experienceModal.designation
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line."
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "That’s why more companies are not only reevaluating their website’s design but also partnering with Elisc, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ExperiencePopup = (ExperiencePopup);

;// CONCATENATED MODULE: ./src/components/popup/PortfolioPopup.js




const PortfolioPopup = ()=>{
    const { setexperienceModal  } = (0,external_react_.useContext)(context/* context */.D);
    return /*#__PURE__*/ jsx_runtime.jsx(popup_ModalContainer, {
        nullValue: setexperienceModal,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "popup_details",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "top_image",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "main",
                            "data-img-url": "img/portfolio/4.jpg",
                            style: {
                                backgroundImage: 'url("img/portfolio/4.jpg")'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "portfolio_main_title",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "category",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#",
                                children: "Modalbox"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "title",
                            children: "Beautiful Boat"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "main_details",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "textbox",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification. Building mockups strikes the ideal balance ease of modification."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "detailbox",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "first",
                                                children: "Client"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Alvaro Morata"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "first",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: "Modalbox"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "first",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "April 10, 2023"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "first",
                                                children: "Share"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "share",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                className: "svg",
                                                                src: "img/svg/social/facebook.svg",
                                                                alt: "image"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                className: "svg",
                                                                src: "img/svg/social/twitter.svg",
                                                                alt: "image"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                className: "svg",
                                                                src: "img/svg/social/instagram.svg",
                                                                alt: "image"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "additional_images",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/portfolio/5.jpg",
                                                style: {
                                                    backgroundImage: 'url("img/portfolio/5.jpg")'
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/portfolio/6.jpg",
                                                style: {
                                                    backgroundImage: 'url("img/portfolio/6.jpg")'
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/portfolio/7.jpg",
                                                style: {
                                                    backgroundImage: 'url("img/portfolio/7.jpg")'
                                                }
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const popup_PortfolioPopup = (PortfolioPopup);

;// CONCATENATED MODULE: ./src/components/popup/ServicePopup.js




const ServicePopup = ()=>{
    const { serviceModal , setServiceModal  } = (0,external_react_.useContext)(context/* context */.D);
    return /*#__PURE__*/ jsx_runtime.jsx(popup_ModalContainer, {
        nullValue: setServiceModal,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "descriptions",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "top_image",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "main",
                            "data-img-url": serviceModal.image,
                            style: {
                                backgroundImage: `url(${serviceModal.image})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "main_title",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: serviceModal.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line."
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "That’s why more companies are not only reevaluating their website’s design but also partnering with Elisc, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ServicePopup = (ServicePopup);

// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js




const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((external_react_player_default()), {
                                        url: videoID,
                                        playing: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,external_react_.useState)(false);
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const popup_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(335);
;// CONCATENATED MODULE: ./src/layout/Sidebar.js




const Sidebar = ()=>{
    const { navChange , nav , menus  } = (0,external_react_.useContext)(context/* context */.D);
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        utilits/* eliscUtilits.smoothScrolling */.$.smoothScrolling();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "elisc_tm_topbar",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "topbar_inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "logo",
                            "data-type": "image",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "image",
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/logo/logo.png",
                                        alt: "image"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "text",
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "C.Straface"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "trigger",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "hamburger-box",
                                    onClick: ()=>setToggle(!toggle),
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `elisc_tm_mobile_menu ${toggle ? "opened" : ""}`,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "inner",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "avatar",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "image",
                                    "data-img-url": "img/about/1.jpg"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "menu_list",
                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    className: "transition_link",
                                    children: menus.map((menu)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: nav === menu.href ? "active" : "",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `#${menu.href}`,
                                                onClick: ()=>navChange(menu.href),
                                                children: menu.name
                                            })
                                        }, menu.id))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "social",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "svg",
                                                    src: "img/svg/social/facebook.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "svg",
                                                    src: "img/svg/social/twitter.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "svg",
                                                    src: "img/svg/social/instagram.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "svg",
                                                    src: "img/svg/social/dribbble.svg",
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    className: "svg",
                                                    src: "img/svg/social/tik-tok.svg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "copyright",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Copyright \xa9 ",
                                        new Date().getFullYear()
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "elisc_tm_sidebar",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "sidebar_inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "author",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "image",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "img/thumbs/1-1.jpg",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "main",
                                            "data-img-url": "img/about/1.jpg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "name",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                "C.Straface",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "back",
                                                    children: "C.Straface"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "menu scrollable",
                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "transition_link",
                                children: menus.map((menu)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: nav === menu.href ? "active" : "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: `#${menu.href}`,
                                            onClick: ()=>navChange(menu.href),
                                            children: menu.name
                                        })
                                    }, menu.id))
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "copyright",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "social",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "icon-facebook-1"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "icon-twitter-1"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "icon-linkedin-1"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            "Copyright \xa9 ",
                                            new Date().getFullYear(),
                                            " Brick Enterprises. All rights reserved."
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/layout/Layout.js










const Layout = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        utilits/* eliscUtilits.dataImage */.$.dataImage();
        utilits/* eliscUtilits.customCursor */.$.customCursor();
        utilits/* eliscUtilits.imgToSVG */.$.imgToSVG();
    }, []);
    const { modal , experienceModal , serviceModal , portfolioModal , blogModal , animation  } = (0,external_react_.useContext)(context/* context */.D);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(popup_VideoPopup, {}),
            modal && experienceModal && /*#__PURE__*/ jsx_runtime.jsx(popup_ExperiencePopup, {}),
            modal && serviceModal && /*#__PURE__*/ jsx_runtime.jsx(popup_ServicePopup, {}),
            modal && serviceModal && /*#__PURE__*/ jsx_runtime.jsx(popup_ServicePopup, {}),
            modal && portfolioModal && /*#__PURE__*/ jsx_runtime.jsx(popup_PortfolioPopup, {}),
            modal && blogModal && /*#__PURE__*/ jsx_runtime.jsx(popup_BlogPopup, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: animation ? "elisc_tm_all_wrap" : "dodo_tm_one_page_wrapper",
                "data-magic-cursor": "show",
                "data-enter": animation,
                "data-exit": true,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(layout_Sidebar, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "elisc_tm_mainpart",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mainpart_inner",
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mouse-cursor cursor-outer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mouse-cursor cursor-inner"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "elisc_fn_moving_box"
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ sliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Virtual
]);
const sliderProps = {
    portfolio: {
        loop: true,
        spaceBetween: 30,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500
        },
        navigation: {
            nextEl: ".next_button",
            prevEl: ".prev_button"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            780: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1120: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    },
    testimonial: {
        loop: true,
        spaceBetween: 30,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500
        },
        pagination: {
            el: ".owl-dots",
            type: "bullets",
            clickable: "true"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;