const icons = [
    'build',
    'car',
    'cloud',
    'fire',
    'genres',
    'glasses',
    'play-control',
    'puzzle',
    'react',
    'ribbon',
    'rocket',
    'screen',
    'smile',
    'tablet',
    'world',
];

export default function getIconSrc(icon) {
    if (icon && icons.find(v => v === icon)) {
        return `/img/icons/general/${icon}.svg`;
    }

    return '';
}
