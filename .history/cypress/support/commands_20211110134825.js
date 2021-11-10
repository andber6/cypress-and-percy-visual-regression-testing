import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot'

addMatchImageSnapshotPlugin({
    failureTreshold: 0.00,
    failureTresholdType: 'percent',
    customDiffConfig: { treshold: 0.0 },
    capture: 'viewport'
})