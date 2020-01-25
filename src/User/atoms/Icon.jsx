import React, {useContext} from 'react';
import Type from "prop-types";
import {ThemeContext} from "styled-components";

const Icon = ({icon, color, size}) => {
    const theme = useContext(ThemeContext);
    const props = {width: size, height: size, fill: (color ? color : `rgb(${theme.secondary})`)};

    switch (icon) {
        case 'check':
            return <svg viewBox="0 0 46 46" {...props}>
                <path d="M23,6c9.374,0,17,7.627,17,17c0,9.375-7.626,17-17,17S6,32.375,6,23C6,13.627,13.626,6,23,6 M23,0C10.298,0,0,10.298,0,23
			            c0,12.703,10.298,23,23,23s23-10.297,23-23C46,10.298,35.702,0,23,0L23,0z"/>
                <path d="M20.887,32.482c-0.609,0.608-1.437,0.951-2.298,0.951c-0.861,0-1.689-0.343-2.298-0.951l-7.122-7.123
				        c-1.269-1.269-1.269-3.327,0-4.596c1.27-1.27,3.327-1.27,4.597,0l4.243,4.242c0.321,0.32,0.84,0.32,1.161,0l11.489-11.489
				        c1.271-1.27,3.327-1.27,4.597,0c1.27,1.27,1.27,3.327,0,4.597L20.887,32.482z"/>
            </svg>;
        case 'more':
            return <svg viewBox="0 0 8 8" {...props}>
                <circle cx="4" cy="4" r="1"/>
                <circle cx="7" cy="4" r="1"/>
                <circle cx="1" cy="4" r="1"/>
            </svg>;
        case 'user':
            return <svg viewBox="0 0 248.349 248.349" {...props}>
                <path d="M9.954,241.305h228.441c3.051,0,5.896-1.246,7.805-3.416c1.659-1.882,2.393-4.27,2.078-6.723
                            c-5.357-41.734-31.019-76.511-66.15-95.053c-14.849,14.849-35.348,24.046-57.953,24.046s-43.105-9.197-57.953-24.046
                            C31.09,154.65,5.423,189.432,0.071,231.166c-0.315,2.453,0.424,4.846,2.078,6.723C4.058,240.059,6.903,241.305,9.954,241.305z"/>
                <path d="M72.699,127.09c1.333,1.398,2.725,2.73,4.166,4.019c12.586,11.259,29.137,18.166,47.309,18.166
                            s34.723-6.913,47.309-18.166c1.441-1.289,2.834-2.622,4.166-4.019c1.327-1.398,2.622-2.828,3.84-4.329
                            c9.861-12.211,15.8-27.717,15.8-44.6c0-39.216-31.906-71.116-71.116-71.116S53.059,38.95,53.059,78.16
                            c0,16.883,5.939,32.39,15.8,44.6C70.072,124.262,71.366,125.687,72.699,127.09z"/>
            </svg>;
        case 'post':
            return <svg viewBox="0 0 331.331 331.331" {...props}>
                <path d="M30.421,317.462l4.422-17.661l-12.194-4.814l-8.376,13.804c0,0,4.618,12.526-0.511,22.539
                        C13.766,331.331,20.184,320.399,30.421,317.462z M22.229,309.358c1.501-0.615,3.231,0.087,3.851,1.561
                        c0.625,1.474-0.087,3.171-1.588,3.786c-1.501,0.615-3.231-0.087-3.851-1.561C20.01,311.664,20.723,309.967,22.229,309.358z"/>
                <path d="M158.353,112.621c-35.115,28.8-81.086,88.124-120.073,157.423l-0.022-0.027l-6.815,12.026
                        l7.267,2.796l3.84-10.117c20.799-37.491,77.224-135.4,180.397-200.451c0,0,38.411-22.877,76.256-54.516
                        c-9.214,7.702-27.391,17.356-37.247,23.584C236.088,59.683,204.166,75.043,158.353,112.621z"/>
                <path d="M33.2,215.365c-7.985,28.223-7.528,49.718-4.438,55.625h4.83
                        c13.337-27.625,77.572-127.693,117.554-159.016c41.424-32.455,73.378-51.339,100.253-65.111
                        c9.437-4.835,19.118-11.384,27.848-17.949c10.601-8.36,21.348-17.302,30.758-26.053L282.728,20.75L294.89,2.148L271.67,25.759
                        L286.78,0c-35.746,3.225-68.918,21.109-68.918,21.109c-13.271,15.741-23.959,40.782-23.959,40.782
                        c-0.37-12.521,8.11-31.481,8.11-31.481c-6.266,2.861-30.073,16.459-30.073,16.459c-11.645,9.66-15.262,35.06-15.262,35.06
                        c-2.214-10.019,5.526-29.333,5.526-29.333c-33.543,19.32-57.502,52.231-57.502,52.231c-16.584,32.553-2.948,57.953-8.11,51.872
                        c-5.162-6.081-4.052-28.261-4.052-28.261c-35.017,33.63-38.699,49.724-38.699,49.724c-5.896,14.31-11.058,52.59-11.058,52.59
                        c-3.318-3.579,0-23.611,0-23.611c-8.479,17.889-4.422,34.701-4.422,34.701C34.309,240.407,33.2,215.365,33.2,215.365z"/>
                <path d="M310.01,14.191c0,0-13.483,13.065-30.758,26.053c-27.081,21.359-53.156,38.819-53.156,38.819
                        C123.945,139.425,67.025,237.932,48.212,271.708h10.002c3.535-2.834,8.844-4.971,31.014-11.389
                        c28.011-8.11,44.72-25.041,44.72-25.041s-25.553,14.31-37.595,12.88s-28.223,3.1-28.223,3.1s-6.179-2.861,24.291-7.392
                        s80.596-38.634,80.596-38.634s-19.167,7.87-28.011,7.152c-8.844-0.718-30.714,0-30.714,0c14.495-3.34,28.011-1.43,50.126-9.779
                        c22.115-8.349,20.886-7.631,20.886-7.631c25.063-8.349,35.474-34.342,35.474-34.342c-4.335,1.67-37.443,5.722-51.176,1.67
                        c-13.734-4.052-37.132,0-37.132,0c22.115-7.392,27.032-4.052,32.433-4.291c5.406-0.239,22.855,1.191,57.502-10.731
                        s44.475-26.711,44.475-26.711l-23.366,3.122c15.257-2.567,32.455-12.662,32.455-12.662c-10.568,2.861-27.032,4.291-27.032,4.291
                        c19.412-4.291,30.225-10.253,30.225-10.253c18.183-13.832,22.36-34.342,22.36-34.342c-25.803,8.822-46.194,4.77-46.194,4.77
                        c35.387-2.382,45.215-11.449,50.126-13.592c4.917-2.148,6.94-11.03,6.94-11.03c-17.878,6.44-38.15,7.511-38.15,7.511
                        c21.93-3.399,40.722-14.49,40.722-14.49V32.792c-8.479,4.83-23.399,8.588-23.399,8.588l23.219-15.023
                        C316.091,18.841,310.01,14.191,310.01,14.191z"/>
                <polygon points="23.551,290.571 37.361,296.103 39.933,289.989 26.124,284.458 	"/>
                <path d="M177.036,285.458c-45.628,21.936-89.462,36.888-147.758,38.846c-5.439,0.185-5.466,5.624,0,5.439
                        c52.15-1.751,95.543-12.961,137.391-32.575c46.618-21.854,89.435-40.167,147.828-46.39c5.385-0.577,3.095-5.814-2.252-5.243
                        C260.531,251.051,218.514,265.519,177.036,285.458z"/>
            </svg>;
        case 'location':
            return <svg viewBox="0 0 31.603 31.603" {...props}>
                <path d="M7.703,15.973c0,0,5.651-5.625,5.651-10.321C13.354,2.53,10.824,0,7.703,0S2.052,2.53,2.052,5.652
                        C2.052,10.614,7.703,15.973,7.703,15.973z M4.758,5.652c0-1.628,1.319-2.946,2.945-2.946s2.945,1.318,2.945,2.946
                        c0,1.626-1.319,2.944-2.945,2.944S4.758,7.278,4.758,5.652z"/>
                <path d="M28.59,7.643l-0.459,0.146l-2.455,0.219l-0.692,1.106l-0.501-0.16l-1.953-1.76l-0.285-0.915l-0.377-0.977L20.639,4.2
                        l-1.446-0.283L19.159,4.58l1.418,1.384l0.694,0.817l-0.782,0.408l-0.636-0.188l-0.951-0.396l0.033-0.769l-1.25-0.514L17.27,7.126
                        l-1.258,0.286l0.125,1.007l1.638,0.316l0.284-1.609l1.353,0.201l0.629,0.368h1.011l0.69,1.384l1.833,1.859l-0.134,0.723
                        l-1.478-0.189l-2.553,1.289l-1.838,2.205l-0.239,0.976h-0.661l-1.229-0.566l-1.194,0.566l0.297,1.261l0.52-0.602l0.913-0.027
                        l-0.064,1.132l0.757,0.22l0.756,0.85l1.234-0.347l1.41,0.222l1.636,0.441l0.819,0.095l1.384,1.573l2.675,1.574l-1.729,3.306
                        l-1.826,0.849l-0.693,1.889l-2.643,1.765l-0.282,1.019c6.753-1.627,11.779-7.693,11.779-14.95
                        C31.194,13.038,30.234,10.09,28.59,7.643z"/>
                <path d="M17.573,24.253l-1.12-2.078l1.028-2.146l-1.028-0.311l-1.156-1.159l-2.56-0.573l-0.85-1.779v1.057h-0.375l-1.625-2.203
                        c-0.793,0.949-1.395,1.555-1.47,1.629L7.72,17.384l-0.713-0.677c-0.183-0.176-3.458-3.315-5.077-7.13
                        c-0.966,2.009-1.52,4.252-1.52,6.63c0,8.502,6.891,15.396,15.393,15.396c0.654,0,1.296-0.057,1.931-0.135l-0.161-1.864
                        c0,0,0.707-2.77,0.707-2.863C18.28,26.646,17.573,24.253,17.573,24.253z"/>
                <path d="M14.586,3.768l1.133,0.187l2.75-0.258l0.756-0.834l1.068-0.714l1.512,0.228l0.551-0.083
                        c-1.991-0.937-4.207-1.479-6.553-1.479c-1.096,0-2.16,0.128-3.191,0.345c0.801,0.875,1.377,1.958,1.622,3.163L14.586,3.768z
                        M16.453,2.343l1.573-0.865l1.009,0.582l-1.462,1.113l-1.394,0.141L15.55,2.907L16.453,2.343z"/>
            </svg>;
        case 'birthday':
            return <svg viewBox="0 0 512 512" {...props}>
                <path d="M495.304,478.609h-22.261v-116.87c0-27.619-22.468-50.087-50.087-50.087h-16.696v-116.87
                        c0-27.619-22.468-50.087-50.087-50.087h-83.478v-14.207c19.391-6.914,33.391-25.273,33.391-47.01
                        c0-8.761-2.304-17.397-6.674-24.973c0,0-0.011-0.006-0.011-0.011L270.456,8.348C267.478,3.184,261.967,0,256,0
                        c-5.967,0-11.479,3.184-14.456,8.348l-28.957,50.157c-4.37,7.576-6.674,16.213-6.674,24.973c0,21.737,14,40.096,33.391,47.01
                        v14.207h-83.478c-27.619,0-50.087,22.468-50.087,50.087v116.87H89.044c-27.619,0-50.087,22.468-50.087,50.087
                        c0,4.084,0,81.834,0,116.87H16.696C7.479,478.609,0,486.082,0,495.304C0,504.527,7.479,512,16.696,512h478.609
                        c9.217,0,16.696-7.473,16.696-16.696C512,486.082,504.521,478.609,495.304,478.609z M241.51,75.191L256,50.093l14.49,25.098
                        c1.467,2.543,2.206,5.331,2.206,8.288c0,9.206-7.49,16.696-16.696,16.696c-9.206,0-16.696-7.49-16.696-16.696
                        C239.304,80.522,240.055,77.728,241.51,75.191z M139.13,194.783c0-9.206,7.49-16.696,16.696-16.696h200.348
                        c9.206,0,16.696,7.49,16.696,16.696v48.058c-1.582-1.594-3.207-3.28-5.13-5.374c-9.685-10.533-22.945-24.962-45.696-24.962
                        c-22.739,0-35.989,14.424-45.674,24.951c-9.25,10.071-13.751,14.168-21.109,14.168c-7.586,0-12.467-4.875-21.152-14.222
                        c-9.761-10.505-23.119-24.897-45.63-24.897c-22.739,0-35.989,14.424-45.663,24.951c-1.355,1.475-2.493,2.645-3.685,3.892V194.783z
                         M439.652,382.125c-13.433,4.644-22.563,14.512-29.717,22.289c-9.25,10.071-13.751,14.168-21.109,14.168
                        c-7.348,0-11.837-4.098-21.087-14.158c-9.685-10.533-22.945-24.962-45.696-24.962c-22.739,0-35.989,14.424-45.674,24.951
                        c-9.25,10.071-13.751,14.168-21.109,14.168c-7.586,0-12.467-4.875-21.152-14.222c-9.761-10.505-23.119-24.897-45.63-24.897
                        c-22.739,0-35.989,14.424-45.674,24.951c-9.25,10.071-13.75,14.168-21.109,14.168c-7.946,0-14.609-6.685-24.642-17.695
                        c-7.03-7.712-14.771-16.112-24.706-21.68v-17.466c0-9.206,7.49-16.696,16.696-16.696h333.913c9.206,0,16.696,7.49,16.696,16.696
                        V382.125z"/>
            </svg>;
        case 'message':
            return <svg viewBox="0 0 486.736 486.736" {...props}>
                <path d="M481.883,61.238l-474.3,171.4c-8.8,3.2-10.3,15-2.6,20.2l70.9,48.4l321.8-169.7l-272.4,203.4v82.4c0,5.6,6.3,9,11,5.9
		                l60-39.8l59.1,40.3c5.4,3.7,12.8,2.1,16.3-3.5l214.5-353.7C487.983,63.638,485.083,60.038,481.883,61.238z"/>
            </svg>;
        case 'comment':
            return <svg viewBox="0 0 511.626 511.627" {...props}>
                <path d="M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41
                        c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269
                        c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7
                        c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283
                        c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574
                        c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854
                        c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429
                        c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283
                        c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789
                        C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529
                        c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852
                        c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27
                        c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803
                        c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845
                        c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z"/>
            </svg>;
        case 'share':
            return <svg viewBox="0 0 511.626 511.627" {...props}>
                <path d="M506.206,179.012L360.025,32.834c-3.617-3.617-7.898-5.426-12.847-5.426s-9.233,1.809-12.847,5.426
                        c-3.617,3.619-5.428,7.902-5.428,12.85v73.089h-63.953c-135.716,0-218.984,38.354-249.823,115.06C5.042,259.335,0,291.03,0,328.907
                        c0,31.594,12.087,74.514,36.259,128.762c0.57,1.335,1.566,3.614,2.996,6.849c1.429,3.233,2.712,6.088,3.854,8.565
                        c1.146,2.471,2.384,4.565,3.715,6.276c2.282,3.237,4.948,4.859,7.994,4.859c2.855,0,5.092-0.951,6.711-2.854
                        c1.615-1.902,2.424-4.284,2.424-7.132c0-1.718-0.238-4.236-0.715-7.569c-0.476-3.333-0.715-5.564-0.715-6.708
                        c-0.953-12.938-1.429-24.653-1.429-35.114c0-19.223,1.668-36.449,4.996-51.675c3.333-15.229,7.948-28.407,13.85-39.543
                        c5.901-11.14,13.512-20.745,22.841-28.835c9.325-8.09,19.364-14.702,30.118-19.842c10.756-5.141,23.413-9.186,37.974-12.135
                        c14.56-2.95,29.215-4.997,43.968-6.14s31.455-1.711,50.109-1.711h63.953v73.091c0,4.948,1.807,9.232,5.421,12.847
                        c3.62,3.613,7.901,5.424,12.847,5.424c4.948,0,9.232-1.811,12.854-5.424l146.178-146.183c3.617-3.617,5.424-7.898,5.424-12.847
                        C511.626,186.92,509.82,182.636,506.206,179.012z"/>
            </svg>;
        case 'love':
            return <svg viewBox="0 0 384.538 384.538" {...props}>
                <path d="M127.678,220.215c3.766,0,7.373-2.138,9.069-5.776l25.202-54.045c9.278-19.898,0.639-43.634-19.259-52.912
                        c-9.639-4.495-20.452-4.967-30.445-1.329c-7.119,2.591-13.215,7.046-17.758,12.879c-17.711-3.75-36.36,5.035-44.333,22.13
                        c-9.278,19.898-0.639,43.634,19.259,52.912l54.045,25.202C124.825,219.913,126.262,220.215,127.678,220.215z M77.865,175.948
                        c-9.903-4.618-14.203-16.431-9.585-26.334c3.358-7.202,10.522-11.44,17.99-11.44c2.8,0,5.644,0.596,8.344,1.856
                        c2.403,1.121,5.155,1.241,7.646,0.333c2.492-0.907,4.522-2.767,5.643-5.171c2.237-4.797,6.208-8.436,11.182-10.246
                        c4.975-1.811,10.355-1.575,15.152,0.661c9.903,4.618,14.203,16.431,9.585,26.334l-20.976,44.982L77.865,175.948z"/>
                <path d="M334.383,141.161c-7.972-17.096-26.612-25.883-44.332-22.13c-4.543-5.833-10.64-10.288-17.759-12.88
                        c-9.993-3.637-20.806-3.166-30.445,1.329c-19.897,9.278-28.536,33.015-19.259,52.913l25.202,54.045
                        c1.697,3.638,5.304,5.776,9.07,5.776c1.414,0,2.853-0.302,4.22-0.939l54.045-25.202
                        C335.023,184.795,343.662,161.059,334.383,141.161z M306.672,175.948l-44.981,20.975l-20.976-44.982
                        c-4.618-9.903-0.318-21.716,9.585-26.334c2.664-1.242,5.508-1.867,8.362-1.867c2.285,0,4.578,0.401,6.789,1.206
                        c4.974,1.81,8.945,5.449,11.182,10.246c2.335,5.005,8.284,7.172,13.289,4.837c9.902-4.618,21.717-0.318,26.335,9.584
                        S316.576,171.33,306.672,175.948z"/>
                <path d="M192.269,0C86.252,0,0,86.251,0,192.269c0,106.018,86.251,192.269,192.269,192.269s192.269-86.251,192.269-192.269
                        C384.538,86.251,298.287,0,192.269,0z M192.269,364.538C97.28,364.538,20,287.258,20,192.269C20,97.28,97.28,20,192.269,20
                        s172.269,77.28,172.269,172.269C364.538,287.258,287.258,364.538,192.269,364.538z"/>
                <path d="M276.378,240.66c-2.441-1.895-5.621-2.554-8.612-1.787c-49.391,12.653-101.603,12.653-150.992,0
                        c-2.995-0.768-6.173-0.107-8.613,1.787s-3.869,4.81-3.869,7.9c0,48.511,39.467,87.978,87.978,87.978
                        c48.511,0,87.978-39.467,87.978-87.978C280.247,245.47,278.819,242.554,276.378,240.66z M192.269,316.538
                        c-33.082,0-60.719-23.751-66.754-55.098c43.938,9.229,89.569,9.229,133.508,0C252.988,292.787,225.35,316.538,192.269,316.538z"/>
            </svg>;
        case 'view':
            return <svg viewBox="0 0 512 512" {...props}>
                <path d="m496.4,243.1c-63.9-78.7-149.3-122.1-240.4-122.1-91.1,0-176.5,43.4-240.4,122.1-6.1,7.5-6.1,18.2 0,25.7 63.9,78.8 149.3,122.2 240.4,122.2 91.1,0 176.5-43.4 240.4-122.1 6.1-7.5 6.1-18.3 0-25.8zm-240.4,79.8c-36.9,0-66.9-30-66.9-66.9 0-36.9 30-66.9 66.9-66.9 36.9,0 66.9,30 66.9,66.9 0,36.9-30,66.9-66.9,66.9zm-197.8-66.9c37.8-42.2 82.9-71.1 131.5-84.9-25.2,19.7-41.5,50.4-41.5,84.9 0,34.4 16.2,65.1 41.5,84.9-48.6-13.8-93.6-42.7-131.5-84.9zm264.1,84.9c25.2-19.7 41.5-50.4 41.5-84.9 0-34.4-16.2-65.1-41.5-84.9 48.6,13.8 93.7,42.7 131.5,84.9-37.9,42.2-82.9,71.1-131.5,84.9z"/>
            </svg>;
        default:
            return <></>;
    }
};

Icon.defaultProps = {
    color: null,
    size: '100%',
};

Icon.propTypes = {
    size: Type.string,
    color: Type.string,
    icon: Type.oneOf([
        'check',
        'message',
        'more',
        'user',
        'post',
        'location',
        'birthday',
        'comment',
        'share',
        'love',
        'view',
    ]).isRequired,
};

export default React.memo(Icon);