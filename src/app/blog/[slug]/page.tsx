import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, blogPosts } from '../../lib/data';
import BlogArticle from '../../components/BlogArticle';

interface Props {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return { title: 'Post Not Found' };
    return {
        title: post.title,
        description: post.description,
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

    return <BlogArticle post={post} related={related} />;
}
