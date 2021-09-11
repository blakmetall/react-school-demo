import React from 'react';

export default function getDividerBySize(size) {
    if (size) {
        if (size === 'xxs') {
            return <div className="pt-2" />;
        }

        if (size === 'xs') {
            return <div className="pt-3" />;
        }

        if (size === 'sm') {
            return <div className="pt-4" />;
        }

        if (size === 'md') {
            return <div className="pt-5" />;
        }

        if (size === 'lg') {
            return <div className="pt-5 pb-3" />;
        }

        if (size === 'xl') {
            return <div className="pt-5 pb-4" />;
        }

        if (size === 'xxl') {
            return <div className="pt-5 pb-5" />;
        }
    }

    return <div className="pt-3" />;
}
