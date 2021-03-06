angular.module('alankehoe.github.io', ['angulartics', 'angulartics.google.analytics'])

    .controller('MainCtrl', ['$scope', function ($scope) {
        var arrayToMatrix = function (list, howMany) {
            var idx = 0;
            var result = [];

            while (idx < list.length) {
                if (idx % howMany === 0) result.push([]);
                result[result.length - 1].push(list[idx++]);
            }

            return result;
        };

        $scope.contacts = [
            {
                href: '',
                text: '438-993-7418',
                icon: 'fa-phone'
            },
            {
                href: 'mailto:karl.roe2@mail.dcu.ie?subject=Found your resume on alankehoe.github.io',
                text: 'karl.roe2@mail.dcu.ie',
                icon: 'fa-pencil'
            },
            {
                href: 'https://www.google.com/maps/place/Montreal/',
                text: 'Montreal, Canada',
                icon: 'fa-map-marker'
            },
            {
                href: 'https://github.com/alankehoe',
                text: 'Alankehoe',
                icon: 'fa-github'
            },
            {
                href: 'https://ie.linkedin.com/in/alankehoe111',
                text: 'Alankehoe111',
                icon: 'fa-linkedin'
            },
            {
                href: 'https://www.facebook.com/kehoea8',
                text: 'Kehoea8',
                icon: 'fa-facebook'
            }
        ];

        $scope.skills = [
            {
                name: 'Java',
                level: '90'
            },
            {
                name: 'Python',
                level: '70'
            },
            {
                name: 'Ruby',
                level: '85'
            },
            {
                name: 'HTML',
                level: '90'
            },
            {
                name: 'CSS',
                level: '60'
            },
            {
                name: 'JavaScript',
                level: '75'
            }
        ];

        $scope.educations = [
            {
                name: 'Dublin City University',
                degree: 'B.Sc. in Computer Applications',
                dates: 'SEP 2010 - 2014',
                blurb: 'Recently graduated with an honours degree'
            },
            {
                name: 'Gorey Community School',
                degree: 'Leaving certificate',
                dates: 'SEP 2003 - JUNE 2009',
                blurb: ''
            }
        ];

        $scope.experiences = [
            {
                name: 'BearingPoint Ireland',
                position: 'Software Developer',
                dates: 'JUL 2014 - PRESENT',
                roles: [
                    'Working on an Agile team.',
                    'Developing a large scale Java Spring web application.',
                    'Build new functionality following user stories.',
                    'Develop a test suite for the application using Junit and EasyMock.',
                    'Assist the team in a migration from svn to git.'
                ]
            },
            {
                name: 'BearingPoint Ireland',
                position: 'Intern Software Developer',
                dates: 'APR 2013 - SEP 2013',
                roles: [
                    'Responsible for migration of system architecture diagrams into iServer.',
                    'Involved in developing release notes tool for subversion.',
                    'Experience in TeamCity continuous integration server.',
                    'Experience in Nunit and Junit testing frameworks.',
                    'Contributed to GWTP dashboard application.',
                    'Experience in web frameworks such as AngularJS',
                    'Experience with Selenium web driver tests.'
                ]
            }
        ];

        $scope.interests = [
            'Web Development', 'Mobile Development', 'Automotive Systems', 'Ruby on Rails',
            'AngularJS', 'Linux Administration', 'Virtualization', 'Networking'
        ];

        $scope.projects = [
            {
                name: 'FleetOnRails',
                url: 'http://blog.fleetonrails.eu',
                thumb: 'assets/img/fleetonrails.png',
                blurb: 'Fleet management software'
            },
            {
                name: 'PiMyRide',
                url: 'http://pimyride.com',
                thumb: 'assets/img/pimyride.png',
                blurb: 'OBD Logging from a Raspberry pi'
            },
            {
                name: 'Ziemniak',
                url: 'https://github.com/alankehoe/ziemniak',
                thumb: 'assets/img/ziemniak.png',
                blurb: 'Open source machine translation comparison tool'
            }
        ];

        $scope.interestMatrix = arrayToMatrix($scope.interests, 3)
    }]);
