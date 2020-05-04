function towerOfHanoi(disks, start, mid, end) {
    if(disks <= 1) {
        console.log(`Move disk from ${start} to ${end}`);
        return;
    }

    towerOfHanoi(disks - 1, start, end, mid);
    console.log(`Move disk from ${start} to ${end}`);
    towerOfHanoi(disks - 1, mid, start, end);
}

towerOfHanoi(20, 'A', 'B', 'C');