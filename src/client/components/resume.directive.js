(function () {
    angular
        .module('app.components')
        .directive('resume', resume);

    function resume() {
        return {
            restrict: 'E',
            templateUrl: 'src/client/components/resume.html',
            controller: ResumeCtrl,
            controllerAs: 'vm',
            scope: {}
        };
    }

    function ResumeCtrl() {
        var vm = this;

        vm.programmingLangs = [
            {
                name: 'AngularJS',
                logo: 'https://camo.githubusercontent.com/6795c053f2fafee4d1c76f3a181876013827dd5e/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f333437303430322f313230383630372f32376637643134322d323564362d313165332d386330372d6139316532633736396435322e706e67'
            }, {
                name: 'JavaScript',
                logo: 'http://i.stack.imgur.com/Mmww2.png'
            }, {
                name: 'TypeScript',
                logo: 'https://s3.amazonaws.com/ionic-marketplace/typescript-starter/icon.png'
            }, {
                name: 'C#',
                logo: 'https://raw.githubusercontent.com/sschmid/Entitas-CSharp/develop/Readme/Images/csharp.png'
            }];

        vm.webLangs = [
            {
                name: 'AngularJS',
                logo: 'https://camo.githubusercontent.com/6795c053f2fafee4d1c76f3a181876013827dd5e/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f333437303430322f313230383630372f32376637643134322d323564362d313165332d386330372d6139316532633736396435322e706e67'
            },
            {
                name: 'JavaScript',
                logo: 'http://i.stack.imgur.com/Mmww2.png'
            },
            {
                name: 'Node.js',
                logo: 'http://tomnora.com/wp-content/uploads/2016/01/nodejs-logo.png'
            },
            {
                name: 'jQuery',
                logo: 'http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif'
            },
            {
                name: 'jQuery UI',
                logo: 'http://mikederoche.com/images/logos/components/jqueryui.jpg'
            },
            {
                name: 'HTML5',
                logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png'
            },
            {
                name: 'Jade',
                logo: 'https://avatars0.githubusercontent.com/u/9338635?v=3&s=400'
            },
            {
                name: 'CSS3',
                logo: 'http://logonoid.com/images/css3-logo.png'
            },
            {
                name: 'Sass',
                logo: 'http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png'
            },
            {
                name: 'Less',
                logo: 'http://www.pierrevieville.fr/wp-content/uploads/2015/01/LESS_Logo-570x425.png?08d4c1'
            },
            {
                name: 'Bootstrap',
                logo: 'https://www.gaslampmedia.com/media/bootstrap.png'
            },
            {
                name: 'Material Design',
                logo: 'http://materialdesignblog.com/wp-content/uploads/2015/02/logom.png'
            },
            {
                name: 'Facebook API',
                logo: 'http://link.highedweb.org/files/Facebook-logo.png'
            },
            {
                name: 'ASP.NET MVC',
                logo: 'http://www-asp.azureedge.net/v-2016-02-22-001/images/ui/asplogo-square.png'
            },
            {
                name: 'AJAX',
                logo: 'http://almsoftsol.com/wp-content/uploads/2014/10/Navigation.png'
            }];

        vm.dbTools = [
            {
                name: 'MongoDB',
                logo: 'http://iscte.acm.org/wp-content/uploads/2015/02/mongodb-logo1.png'
            }, {
                name: 'MySQL',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1280px-MySQL.svg.png'
            }, {
                name: 'MS SQL Server',
                logo: 'http://www.crn.pl/images/2014/04/28/sqlserverlogo.png/image_preview/sql%20server%20logo.png'
            }];

        vm.applicationServers = ['Express'];
        vm.testing = ['Karma', 'Mocha', 'Chai', 'Jasmine', 'Protractor', 'Gremlins'];

        vm.professionalExp = [
            {
                dates: 'January 2015 - Present',
                company: 'Briebug Software',
                location: 'Lakewood, CO',
                position: 'Software Engineer',
                projects: [
                    {
                        id: 1,
                        name: 'TTACATS/NAW',
                        description: 'Translated a 10+ year old .NET Investment Transfer ' +
                        'Tracking app from asp.net webforms into JavaScript with AngularJS ' +
                        'and Bootstrap. Wrote unit testing for controllers with Karma, to ' +
                        'achieve 100% code coverage.'
                    }, {
                        id: 2,
                        name: 'Fitness Heroes',
                        description: 'Refactored view/controllers into directives with encapsualted ' +
                        'controllers controllers and applied best practices (John Papa). Wrote unit ' +
                        'tests for new directives using Karma, achieving 100% code coverage. Worked ' +
                        'on bug fixes and new features using MongoDB, Express, AngularJS, NodeJS, ' +
                        'JavaScript, and Bootstrap. Wrote and maintained Protractor tests.'
                    }, {
                        id: 3,
                        name: 'RMExch',
                        description: 'Converted offshore AngularJS development from views/controllers ' +
                        'to directives with encapsulated controllers and applying best practices ' +
                        '(John Papa). This travel based application allows users to manage travel ' +
                        'related media (images and video) into playlists and online presentations. ' +
                        'Responsibilities included creating client side directives as well as server ' + 
                        'side node JavaScript for models, services, and routes.'
                    }, {
                        id: 4,
                        name: 'Street Sweep Alert',
                        description: 'Independently developed BrieBug’s Street Sweep Alert app ' +
                        'to compete with the City and County of Denver (pocketgov). This ' +
                        'application is built using AngularJS best practices (John Papa) and ' +
                        'componentized directives. Responsible for taking stories from ' +
                        'Jira and creating the necessary directives to support the functionality ' +
                        'in each story. I was also responsible for creating and maintaining server ' +
                        'side node JavaScript that includes Mongoose models, routes, and services.'
                    }, {
                        id: 5,
                        name: 'Sizet',
                        description: 'Independently developed an admin dashboard app for our clients to ' +
                        'manage data used in the Sizet Mobile app - a reference "bible" for interior ' +
                        'designers, containing most every spec and industry regulation. This app ' +
                        'was built in MEAN Stack, using gulp for automated task management, and less ' +
                        'as the css preprocessor. Met with the client on a weekly basis, to discuss ' +
                        'project status updates and collaborative planning of future sprints.'
                    }, {
                        id: 6,
                        name: 'PDP Global',
                        description: 'Collaborated with a team of ten developers, building an enterprise level ' +
                        'survey and HR tool application. Wrote componentized automated build and testing tasks ' +
                        'using Gulp. Front end development was written in TypeScript with AngularJS, styles were ' +
                        'written in Sass. Primary project contributions centered around the backend, writing Node.js ' +
                        'REST APIs and full CRUD services in TypeScript, as well writing SQL table creation ' +
                        'statements and stored procedures. Provided direct support to the lead developer/architect ' +
                        'writing and maintaining UML design diagrams.'
                    }, {
                        id: 7,
                        name: 'Alfred',
                        description: 'Worked with the Briebug team, writing AngularJS components, ' +
                        'on Alfred - a suite of modules utilized for management of a small to mid-sized company. ' +
                        'This project doubled as a proof of concept for an AngularJS in TypeScript front end, ' +
                        'Go and RethinkDB backend architecture.'
                    }, {
                        id: 8,
                        name: 'Sensei Tutor',
                        description: 'Utilized WebRTC, Socket.io, and HTML5 canvas to build a proof ' +
                        'of concept for Sensei Tutor - video conferencing and whiteboard session app.'
                    }]
            }, {
                dates: 'November 2014 - January 2015',
                company: 'SeedPaths',
                location: 'Denver, CO',
                position: 'Software Engineer',
                projects: [{
                    name: '',
                    description: 'A three-month contract collaborating with SeedPaths’ ' +
                    'senior developer on a new Administration and Student Portal Site ' +
                    'for their software boot camp. Personally built the Application ' +
                    'Assessment on their main site. These were all written in ' +
                    'ASP.NET/MVC 4 using C#, Razor, HTML5, CSS3, Bootstrap, and MSSQL.'
                }]
            }, {
                dates: 'April 2013 - July 2013',
                company: 'Rockit Media - contract',
                location: 'Denver, CO',
                position: 'Business Development & Customer Support',
                projects: [{
                    name: '',
                    description: 'Provided business development and customer support for ' +
                    'a tech startup, which built mobile web applications for companies ' +
                    'to engage event guests. Facilitated sponsorship packages and ' +
                    'educated event guests how to best use the apps.'
                }]
            }, {
                dates: 'February 2009 - March 2013',
                company: 'OnePoint Patient Care',
                location: 'Yukon, OK',
                position: 'Director of Service Delivery',
                projects: [{
                    name: '',
                    description: 'As Director of Service Delivery for the largest hospice pharmacy in Oklahoma, ' +
                    'with annual revenue of over $3.6 million, I was responsible for general business administration, ' +
                    'office management, accounting, new customer acquisition, sales, marketing, ' +
                    'and recruiting. I developed leadership skills through managing a pharmacy ' +
                    'staff of ten and a delivery staff of fifteen. Successfully managed fourteen hospice ' +
                    'accounts with a combined census of over 1,000 patients through effective ' +
                    'communication and training presentations for groups as large as 85.'
                }]
            }];
    }
})();