export default function learningCommunityGroupsSort(a, b) {
    if (a.corporateEntityName && b.corporateEntityName) {
        if (a.corporateEntityName.toUpperCase() > b.corporateEntityName.toUpperCase()) return 1;
        if (b.corporateEntityName.toUpperCase() > a.corporateEntityName.toUpperCase()) return -1;
    }

    if (a.regionalEntityName && b.regionalEntityName) {
        if (a.regionalEntityName.toUpperCase() > b.regionalEntityName.toUpperCase()) return 1;
        if (b.regionalEntityName.toUpperCase() > a.regionalEntityName.toUpperCase()) return -1;
    }

    if (a.learningCommunityName && b.learningCommunityName) {
        if (a.learningCommunityName.toUpperCase() > b.learningCommunityName.toUpperCase()) return 1;
        if (b.learningCommunityName.toUpperCase() > a.learningCommunityName.toUpperCase()) return -1;
    }

    return 0;
}
