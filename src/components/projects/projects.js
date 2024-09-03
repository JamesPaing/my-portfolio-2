import React, { useContext } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { ThemeContext } from '../../contexts/theme-context';
// import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import Link from '../link';
import SingleProject from './project-card/project-card';
import eight from '../../assets/svg/projects/eight.svg';
import five from '../../assets/svg/projects/five.svg';
import four from '../../assets/svg/projects/four.svg';
import one from '../../assets/svg/projects/one.svg';
import seven from '../../assets/svg/projects/seven.svg';
import six from '../../assets/svg/projects/six.svg';
import three from '../../assets/svg/projects/three.svg';
import two from '../../assets/svg/projects/two.svg';

const projectsData = [
    {
        id: 1,
        projectName: 'May : An E-commerce App',
        projectDesc: `May is a versatile E-commerce app with order management, a loyalty system, secure transactions, and an admin web dashboard, streamlining operations and enhancing user experience.`,
        tags: ['React Native', 'Node.js', 'MongoDB'],
        code: '',
        demo: 'https://drive.google.com/drive/folders/1jEZ0hbNXjtOgWnl43ffVdjzfEB1YRpLu',
        image: six,
    },
    {
        id: 2,
        projectName: 'Retail Management System',
        projectDesc:
            'The cloud-based POS system simplifies retail and inventory management with built-in analytics and barcode printing, making it easier for businesses to operate smoothly and make informed decisions.',
        tags: ['React', 'Node', 'MongoDB'],
        code: '',
        demo: 'https://drive.google.com/drive/folders/1mLh208RgP_PNt41jTIGaSkrqZoFzwkzK',
        image: seven,
    },
    {
        id: 3,
        projectName: 'Mangamic : A Comics Website',
        projectDesc:
            'Mangamic is a Manga website offering subscriptions, book uploads, publishing tools, and an admin dashboard for easy management.',
        tags: ['Next.js', 'Node.js', 'Tailwind.css', 'MongoDB'],
        code: '',
        demo: 'https://travel-agency-fc58b.web.app/',
        image: eight,
    },
    {
        id: 4,
        projectName: 'Shwe Wun Yan: A Hotel Website',
        projectDesc:
            'Shwe Wun Yan is a hotel portfolio site with a booking system that manages walk-ins, online reservations, room services, and F&B, all through an easy-to-use dashboard.',
        tags: ['React.js', 'Node.js', 'MongoDB'],
        code: '',
        demo: 'https://drive.google.com/drive/folders/1TniiEqt5sjLyecrErasrujA4xb8nnerK',
        image: one,
    },
    {
        id: 5,
        projectName: 'Royal AMT: A Construction Website',
        projectDesc:
            'Royal AMT is a construction website with a PAE calculator, key pages like About, Services, and Projects, and an admin dashboard for easy content management.',
        tags: ['Next.js', 'Node.js', 'MongoDB'],
        code: '',
        demo: 'https://drive.google.com/drive/folders/1WrbQ9w2g0dAr-hvbPtJ2R7OyQv1Kjuii',
        image: two,
    },
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: four,
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: five,
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc:
    //         'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: three,
    // },
];

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {projectsData.length > 0 && (
                <div
                    className={styles.projects}
                    id="projects"
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div className={styles.projectsHeader}>
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className={styles.projectsBody}>
                        <div className={styles.projectsBodyContainer}>
                            {projectsData.map((project) => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {/* {projectsData.length > 3 && (
                            <div className={styles.projectsViewAll}>
                                <Link href="/projects">
                                    <button className="text-[#15202B] bg-[#8B98A5] hover:bg-[#1D9BF0] transition-colors">
                                        View All
                                        <HiArrowRight className="text-[#8B98A5] bg-[#15202B] w-[40px] h-[40px] p-2 text-base rounded-[50%] cursor-pointer transition-colors" />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                        <div className="mb-8"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
