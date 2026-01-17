interface SectionHeaderProps {
    title: string;
    className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
    return (
        <div
            className={`flex items-center gap-4 mb-8 animate-fade-slide ${className}`}
        >
            <h2 className="text-3xl font-bold text-text">{title}</h2>
            <div className="h-[1px] bg-textLight/30 w-64 md:w-80"></div>
        </div>

    );
};

export default SectionHeader;
