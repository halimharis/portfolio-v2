export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string; // Opsional
    githubUrl?: string; // Opsional
    }

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Proyek Pertama Saya',
        description: 'Deskripsi singkat proyek pertama. Ini adalah contoh deskripsi yang cukup panjang sehingga kita bisa melihat bagaimana tampilannya jika teksnya panjang.',
        imageUrl: 'https://picsum.photos/200',
        projectUrl: 'https://contoh-proyek-1.com', 
        githubUrl: 'https://github.com/username/contoh-proyek-1', 
    },
    {
        id: 2,
        title: 'Proyek Kedua',
        description: 'Deskripsi proyek kedua. Ini juga contoh deskripsi yang panjang.',
        imageUrl: 'https://picsum.photos/200', 
        projectUrl: 'https://contoh-proyek-2.com',
        githubUrl: 'https://github.com/username/contoh-proyek-2', 
    },
];