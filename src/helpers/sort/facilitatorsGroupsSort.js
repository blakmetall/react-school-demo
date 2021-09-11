export default function facilitatorsGroupsSort(a, b) {
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

    if (a.facilitatorName && b.facilitatorName) {
        if (a.facilitatorName.toUpperCase() > b.facilitatorName.toUpperCase()) return 1;
        if (b.facilitatorName.toUpperCase() > a.facilitatorName.toUpperCase()) return -1;
    }

    if (a.groupName && b.groupName) {
        if (a.groupName.toUpperCase() > b.groupName.toUpperCase()) return 1;
        if (b.groupName.toUpperCase() > a.groupName.toUpperCase()) return -1;
    }

    if (a.licensesStatus && b.licensesStatus) {
        if (a.licensesStatus.toUpperCase() > b.licensesStatus.toUpperCase()) return 1;
        if (b.licensesStatus.toUpperCase() > a.licensesStatus.toUpperCase()) return -1;
    }

    return 0;
}
