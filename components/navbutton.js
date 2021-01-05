import utilStyles from "../styles/util.module.css"
export default function Navbutton({fill, handleClick}){
    return(
<svg onClick={handleClick} className={utilStyles.navbar_button} version="1.0" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1280.000000 1186.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g className={utilStyles.navbar_rose} transform="translate(0.000000,1186.000000) scale(0.100000,-0.100000)"
fill={fill} stroke="none">
<path d="M6784 11851 c-67 -11 -137 -75 -277 -251 -78 -99 -119 -141 -174
-179 -32 -22 -67 -29 -351 -72 l-73 -12 -85 -128 c-46 -70 -113 -183 -149
-251 l-64 -124 59 -62 c77 -81 98 -83 247 -21 210 88 397 196 520 302 61 52
122 70 239 69 192 -2 398 -103 668 -328 l119 -99 96 0 c79 -1 106 -5 151 -25
127 -55 252 -158 318 -263 22 -34 98 -181 170 -327 99 -200 149 -289 204 -362
40 -54 76 -98 79 -98 3 0 4 37 1 83 -5 100 12 329 33 452 96 556 378 1070 747
1362 61 48 73 72 56 109 -26 56 -176 134 -330 171 -89 21 -316 24 -398 4 -149
-35 -269 -86 -391 -167 -74 -49 -101 -53 -232 -33 -111 16 -213 44 -457 124
-252 83 -353 110 -455 125 -77 11 -208 11 -271 1z"/>
<path d="M9655 11717 c-74 -25 -102 -46 -156 -114 -29 -37 -137 -153 -239
-258 -102 -104 -206 -215 -231 -245 -73 -87 -145 -204 -219 -355 -159 -327
-220 -572 -206 -830 8 -167 30 -251 103 -406 l45 -96 72 -13 c178 -31 310
-112 491 -300 245 -255 382 -388 438 -425 l58 -39 187 47 c270 67 293 71 442
71 247 1 368 -51 555 -239 90 -90 168 -190 345 -445 259 -373 379 -500 596
-630 78 -47 259 -227 321 -320 97 -145 168 -314 208 -491 23 -102 32 -371 14
-452 -20 -96 -75 -167 -204 -265 -61 -45 -135 -103 -165 -128 -30 -25 -102
-76 -160 -114 -192 -124 -278 -242 -288 -395 -6 -107 1 -115 106 -115 86 0
175 20 271 60 336 141 394 174 502 286 109 114 183 247 230 414 22 77 24 103
23 285 -1 117 -10 298 -23 435 -11 129 -21 292 -21 363 l0 129 -46 106 c-145
332 -383 646 -739 972 -145 134 -171 170 -213 300 -42 129 -52 198 -93 645
-12 130 -40 288 -64 354 -31 88 -148 277 -425 686 -274 405 -389 640 -441 903
-18 90 -20 129 -16 247 3 77 12 168 20 203 7 35 11 65 7 67 -10 6 -183 45
-274 61 -247 45 -728 69 -811 41z"/>
<path d="M3100 11474 c-425 -34 -708 -97 -1017 -226 l-73 -30 0 -81 c0 -45 -3
-132 -7 -193 l-6 -112 69 -15 c78 -18 157 -29 359 -52 283 -32 441 -80 545
-166 21 -17 22 -20 5 -15 -30 7 -221 43 -295 55 -190 31 -241 35 -425 35 -229
0 -343 -17 -410 -61 -106 -69 -155 -124 -155 -174 0 -30 53 -76 152 -132 77
-44 243 -165 236 -172 -2 -2 -41 5 -88 15 -130 27 -267 43 -316 35 -59 -8
-105 -49 -144 -127 -16 -34 -30 -66 -30 -72 0 -6 51 -31 113 -55 247 -97 407
-196 503 -310 l28 -34 -24 5 c-259 60 -273 62 -450 62 -201 1 -271 -13 -416
-85 -79 -38 -82 -42 -95 -86 -10 -37 -10 -63 -1 -128 16 -111 15 -132 -10
-195 -18 -46 -22 -75 -22 -175 0 -138 13 -191 95 -383 105 -244 114 -271 139
-432 33 -209 48 -337 59 -520 39 -623 35 -595 105 -702 182 -280 341 -685 461
-1173 9 -38 24 -83 32 -100 60 -119 196 -316 327 -473 132 -160 506 -363 881
-481 264 -82 536 -138 1000 -207 61 -8 166 -24 235 -34 l125 -19 27 32 c37 42
104 171 129 249 60 189 42 373 -54 548 -22 41 -92 160 -155 265 -222 370 -290
541 -300 744 -7 172 16 258 123 451 215 388 261 764 175 1460 -6 47 -17 141
-25 210 -27 226 -57 356 -121 525 -114 303 -174 525 -174 645 0 46 -3 61 -12
57 -7 -3 -99 -41 -203 -84 -278 -115 -404 -191 -488 -297 -96 -122 -126 -244
-134 -541 -9 -344 26 -552 197 -1180 139 -510 187 -741 197 -945 4 -89 1 -129
-12 -180 -15 -58 -73 -185 -81 -177 -2 1 -10 88 -19 192 -32 397 -104 733
-255 1185 -65 198 -237 648 -270 710 -6 10 -27 115 -47 232 -33 191 -37 232
-37 398 -1 164 2 194 22 263 39 134 90 222 186 319 212 214 476 368 789 458
106 30 109 31 304 28 172 -3 205 -1 251 15 29 11 59 29 66 40 8 12 26 65 41
117 14 52 44 132 65 176 l40 82 72 30 c154 63 283 95 455 113 l122 12 -66 74
c-200 224 -480 398 -978 611 -325 139 -293 130 -540 158 -122 14 -668 27 -775
18z"/>
<path d="M6442 10860 c-206 -116 -304 -159 -552 -238 -495 -159 -607 -197
-718 -242 -108 -43 -134 -59 -213 -126 -49 -42 -89 -81 -89 -86 0 -18 50 -128
109 -236 98 -181 162 -345 149 -382 -1 -5 -46 27 -98 72 -52 44 -112 92 -134
105 -59 38 -143 63 -207 63 -57 0 -57 0 -108 -56 -68 -74 -127 -176 -164 -282
-29 -82 -31 -96 -31 -242 -1 -217 21 -310 179 -750 133 -374 150 -458 160
-790 5 -184 3 -261 -9 -355 -34 -269 -91 -483 -224 -845 -54 -146 -57 -160
-57 -245 0 -153 39 -235 227 -478 172 -222 200 -288 219 -510 17 -213 1 -315
-110 -706 -102 -356 -105 -373 -105 -566 0 -159 2 -175 26 -243 38 -106 83
-175 168 -261 187 -188 307 -273 427 -301 77 -18 243 -16 429 5 84 9 159 15
168 13 26 -5 -96 -82 -199 -127 -50 -21 -144 -58 -210 -81 -245 -85 -236 -81
-223 -97 21 -26 203 -142 269 -172 120 -54 253 -99 459 -155 425 -117 453
-128 904 -369 110 -59 201 -105 203 -104 1 2 -22 151 -52 332 -92 554 -125
842 -125 1101 0 232 -39 385 -162 634 -81 163 -448 715 -521 783 -29 27 -106
82 -171 124 -116 73 -125 77 -320 133 -111 31 -234 65 -273 75 -40 9 -73 21
-73 25 0 17 149 145 231 199 48 31 130 77 182 101 109 51 104 42 109 184 l3
79 -115 39 c-171 58 -430 132 -554 159 l-109 23 44 18 c106 45 292 82 500 98
79 6 173 14 209 18 l65 7 13 50 c33 129 45 234 44 405 0 275 -41 494 -192
1030 -77 273 -67 413 60 835 96 315 100 338 90 445 -38 384 -38 662 -2 800 31
117 59 183 111 262 58 90 86 114 256 227 265 175 484 267 664 277 133 8 220
34 260 79 37 42 39 60 9 76 -13 7 -89 54 -169 105 -208 133 -304 174 -414 174
-45 0 -68 -10 -243 -110z"/>
<path d="M7320 10494 c-30 -7 -86 -21 -125 -32 -43 -13 -116 -22 -190 -26
-184 -8 -316 -52 -470 -156 -92 -62 -215 -177 -294 -275 -130 -160 -142 -189
-162 -380 -11 -99 -9 -137 16 -390 42 -425 30 -570 -65 -755 -56 -110 -64
-142 -63 -265 1 -121 14 -190 73 -400 22 -77 49 -183 60 -235 11 -52 29 -135
40 -185 65 -304 73 -622 30 -1200 -34 -454 -42 -661 -23 -608 2 6 90 141 194
300 295 447 392 616 482 843 83 207 139 497 124 638 -4 31 -13 120 -22 197
-24 231 -14 472 30 703 26 138 5 215 -139 497 -79 155 -88 176 -93 242 -8 96
12 148 82 216 199 197 628 333 936 298 145 -16 405 -82 496 -125 55 -27 97
-57 154 -113 44 -42 79 -72 79 -66 0 6 -9 57 -20 114 -55 278 -190 558 -395
821 -92 117 -275 314 -305 327 -76 33 -314 41 -430 15z"/>
<path d="M8591 9179 c-137 -18 -284 -80 -381 -159 l-35 -29 45 -37 c25 -20
111 -103 191 -183 145 -145 279 -306 416 -497 40 -55 80 -107 90 -117 10 -9
97 -57 192 -107 196 -103 275 -153 334 -214 52 -54 95 -146 103 -221 5 -58 3
-63 -42 -142 -120 -210 -309 -369 -547 -462 -105 -40 -270 -81 -331 -81 -132
0 -553 -215 -831 -426 -95 -71 -167 -134 -130 -112 16 9 246 56 390 79 143 23
619 40 600 22 -12 -12 -145 -58 -430 -148 -193 -61 -218 -72 -310 -132 -247
-162 -461 -341 -581 -485 -119 -141 -154 -186 -154 -192 0 -4 233 110 518 254
284 143 526 260 537 260 12 0 72 11 135 25 643 137 1196 385 1618 725 l99 79
6 58 c9 80 46 221 116 441 96 301 121 408 121 525 0 100 -47 141 -233 204
-146 49 -225 99 -343 217 -71 72 -130 146 -205 255 -204 301 -309 429 -394
483 -144 90 -386 140 -564 117z"/>
<path d="M7670 8979 c-30 -5 -76 -16 -101 -24 l-45 -15 -94 -223 c-108 -258
-159 -404 -197 -566 -24 -105 -27 -137 -29 -331 -1 -118 -6 -248 -11 -287 -5
-40 -6 -73 -2 -73 6 0 147 148 243 255 l27 30 -6 -97 c-11 -167 -65 -387 -134
-543 -12 -26 -21 -51 -21 -56 0 -14 104 -10 184 6 40 8 113 29 162 46 291 99
383 109 556 60 279 -78 584 -66 828 32 151 61 343 208 381 292 29 62 26 215
-5 275 -30 59 -90 104 -175 131 l-70 23 -81 -22 c-45 -12 -157 -49 -249 -81
-228 -80 -326 -104 -437 -105 l-91 -1 -88 83 c-151 144 -257 203 -397 225 -77
11 -83 14 -101 45 -32 54 -37 96 -47 352 -10 264 -5 310 34 335 12 8 54 19 92
24 38 6 95 15 127 20 109 21 172 32 232 42 33 6 61 12 64 14 6 6 -112 58 -205
90 -75 26 -226 56 -269 54 -11 -1 -45 -5 -75 -10z"/>
<path d="M835 8622 c-301 -180 -575 -382 -732 -538 l-91 -91 -7 -67 c-15 -136
8 -228 112 -451 113 -241 105 -199 66 -360 -28 -118 -33 -155 -30 -235 2 -83
6 -102 32 -148 16 -29 44 -67 62 -83 33 -28 37 -29 136 -29 104 1 162 6 347
33 124 18 220 26 220 18 0 -4 -95 -53 -210 -110 -116 -57 -250 -130 -299 -161
-106 -69 -238 -191 -259 -240 -11 -26 -17 -99 -23 -280 -5 -171 -12 -262 -23
-300 -14 -49 -71 -352 -83 -440 -6 -48 51 -144 137 -230 63 -63 268 -236 393
-332 176 -135 386 -196 747 -217 460 -28 595 -47 755 -111 l30 -12 -25 -13
c-37 -19 -184 -68 -365 -121 -88 -25 -164 -50 -168 -54 -5 -4 20 -11 55 -15
69 -7 330 -58 393 -76 l40 -12 -85 -29 c-122 -41 -284 -68 -412 -68 -59 0
-108 -3 -108 -6 0 -19 130 -263 184 -343 177 -267 418 -466 683 -567 58 -23
85 -27 178 -27 158 -1 278 40 364 125 80 78 207 313 351 648 140 326 234 486
368 622 58 59 81 89 71 93 -8 2 -57 18 -109 34 -275 84 -461 180 -1008 521
-382 238 -362 220 -462 425 -64 130 -104 247 -175 510 -56 203 -105 357 -145
455 -22 54 -42 83 -79 116 -133 120 -227 299 -271 514 -25 127 -27 375 -5 525
17 111 14 168 -17 320 -37 185 -131 433 -236 625 -56 102 -153 260 -161 260
-3 0 -65 -35 -136 -78z"/>
<path d="M10320 8565 c-101 -22 -204 -62 -334 -127 -65 -32 -117 -61 -115 -62
2 -2 87 -34 189 -71 211 -77 296 -120 356 -182 80 -82 94 -185 42 -308 -110
-258 -101 -226 -109 -390 -14 -296 -89 -529 -277 -868 l-77 -138 -142 -79
c-206 -116 -264 -137 -446 -160 -352 -45 -597 -111 -862 -232 -60 -27 -127
-57 -147 -66 -21 -10 -38 -19 -38 -22 0 -8 136 -28 283 -42 339 -32 776 61
1162 246 168 81 275 145 417 252 56 42 156 102 237 142 132 66 304 132 345
132 13 0 -9 -30 -75 -101 -272 -295 -370 -449 -419 -662 -53 -232 -127 -393
-228 -499 -85 -90 -142 -121 -302 -169 -169 -51 -414 -73 -650 -58 -176 11
-194 14 -725 145 -241 59 -411 84 -581 84 -209 0 -316 -20 -512 -97 -136 -53
-188 -78 -377 -183 -77 -43 -179 -97 -227 -121 -90 -45 -98 -53 -98 -117 0
-37 15 -70 73 -159 l41 -63 111 0 c107 0 155 5 495 50 132 18 195 21 315 17
185 -6 247 -23 427 -113 282 -141 408 -178 594 -172 112 3 125 5 156 28 239
179 378 212 988 239 l215 10 69 38 c37 21 153 102 256 180 203 152 286 204
395 249 60 24 89 29 210 35 77 4 166 14 197 23 188 51 365 180 571 414 81 91
134 138 257 230 285 213 351 304 385 527 39 257 -13 416 -253 780 -149 227
-155 233 -532 490 -95 66 -178 132 -241 195 -87 86 -102 107 -150 205 -60 124
-193 308 -286 398 -126 123 -203 154 -393 162 -90 3 -143 1 -190 -10z"/>
<path d="M7980 8530 c0 -52 27 -104 79 -155 23 -21 41 -42 41 -46 0 -4 -21
-10 -47 -14 -112 -17 -180 -70 -169 -133 11 -73 87 -133 201 -161 51 -13 336
-18 355 -6 21 13 43 118 37 178 -6 63 -60 188 -94 219 -38 34 -340 158 -385
158 -14 0 -18 -8 -18 -40z"/>
<path d="M7890 7016 c-244 -46 -493 -185 -740 -412 -180 -166 -345 -356 -598
-687 -117 -153 -325 -471 -315 -481 4 -3 52 -6 108 -6 173 0 286 50 497 218
186 149 269 231 523 517 368 414 494 526 797 703 165 96 191 112 186 117 -2 2
-50 13 -107 24 -115 23 -248 26 -351 7z"/>
<path d="M11030 5060 c-109 -13 -236 -48 -305 -84 -79 -41 -150 -113 -277
-281 -113 -149 -157 -191 -240 -230 -62 -29 -167 -34 -222 -11 -120 50 -347
65 -498 32 -86 -19 -185 -54 -256 -91 -79 -41 -76 -33 -41 -126 106 -287 159
-554 159 -803 0 -122 -40 -388 -59 -400 -4 -3 -29 66 -55 152 -118 391 -242
632 -402 781 -89 83 -190 127 -269 118 -25 -2 -49 -7 -52 -11 -3 -3 12 -63 35
-133 79 -247 117 -439 128 -649 6 -129 -5 -276 -28 -359 -11 -40 -11 -39 -39
95 -123 607 -291 932 -609 1178 -175 136 -317 204 -497 238 -135 25 -380 16
-538 -20 -66 -16 -121 -29 -123 -30 -1 -2 24 -46 56 -99 67 -110 114 -223 147
-353 45 -176 50 -231 51 -629 l1 -380 42 -115 c46 -130 76 -262 92 -407 13
-118 13 -488 0 -672 -8 -109 -7 -140 5 -175 35 -97 92 -295 99 -340 l7 -49
-30 34 c-16 19 -124 160 -239 314 -221 295 -350 440 -483 546 -146 116 -219
151 -510 245 -512 166 -695 254 -869 419 -58 55 -110 125 -250 335 -177 266
-277 447 -320 580 -31 96 -51 197 -51 262 0 53 -2 59 -41 96 -58 55 -162 108
-256 132 -81 20 -292 40 -423 40 -98 0 -149 -29 -252 -142 -62 -68 -83 -100
-108 -164 -49 -121 -136 -287 -280 -529 -221 -370 -308 -563 -369 -815 -11
-47 -30 -118 -41 -159 -22 -81 -26 -203 -9 -248 17 -46 60 -84 134 -118 98
-46 149 -91 280 -246 124 -147 188 -203 278 -245 84 -38 149 -40 296 -10 68
14 142 26 165 26 55 0 102 -30 127 -82 47 -96 222 -183 409 -202 30 -4 134
-11 230 -16 266 -15 439 -64 790 -223 527 -239 561 -250 965 -308 767 -109
1188 -229 1560 -443 97 -56 123 -64 365 -112 47 -10 114 -16 151 -15 79 3 222
-26 344 -69 87 -31 364 -94 373 -85 13 13 31 144 32 232 1 288 -91 479 -528
1103 -131 186 -255 400 -233 400 5 0 86 -75 180 -166 238 -231 407 -430 670
-789 72 -99 144 -196 159 -214 l28 -35 42 85 c54 113 134 197 343 364 272 218
307 267 424 600 106 303 186 512 246 646 122 275 264 509 392 645 99 106 175
211 303 417 209 336 292 437 518 627 108 90 183 179 227 268 27 55 34 82 37
149 l4 82 -47 83 c-153 267 -338 430 -580 514 -118 40 -327 60 -465 44z"/>
</g>
</svg>)}