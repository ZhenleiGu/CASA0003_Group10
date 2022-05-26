var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1Ijoic3dwcmFjdGljZTIyIiwiYSI6ImNsMjRmODJtYzB5YzgzYm1teGJkazI0MnAifQ.Zr3rQpkx7dplU_KDYkBz5A',
    showMarkers: true,
    markerColor: '#CFB53B',
    //projection: 'equirectangular',
    inset: true,
    theme: 'light',
    use3dTerrain: false, 
    
    chapters: [
        {
            
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            location: {
                center: [-2.30685, 54.25695],
                zoom: 1.4,
                pitch: 3,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            location: {
                center: [105.88597, 35.14203],
                zoom: 2.3,
                pitch: 3,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            location: {
                center: [140.32102, 36.20331],
                zoom: 3,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            location: {
                center: [103.85338, 1.33280],
                zoom: 7,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            location: {
                center: [-98.02535, 39.05059],
                zoom: 2.6,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            location: {
                center: [-109.15288, 59.85914],
                zoom: 2.7,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            location: {
                center: [10.65355, 50.96338],
                zoom: 3.35,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            location: {
                center: [5.73171, 52.05367],
                zoom: 4.8,
                pitch: 3,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
        },
        {
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            location: {
                center: [3.95916, 47.20650],
                zoom: 3.35,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            location: {
                center: [-52.54898, -13.01003],
                zoom: 2,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            location: {
                center: [-70.32699, -25.91699],
                zoom: 2.8,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            location: {
                center: [37.99519, 0.06608],
                zoom: 3.2,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twelfth-identifier',
            alignment: 'right',
            hidden: false,
            location: {
                center: [137.33283, -24.80944],
                zoom: 2.1,
                pitch: 45,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1 // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
    
};
