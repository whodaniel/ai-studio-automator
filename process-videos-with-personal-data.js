#!/usr/bin/env node

/**
 * Video Processing with Personal Data Manager
 *
 * Example of how to use PersonalDataManager in processing scripts
 */

const PersonalDataManager = require('./lib/PersonalDataManager');

async function main() {
  try {
    console.log('🎬 Video Processing with Personal Data Manager\n');

    // Initialize personal data manager
    const pdm = new PersonalDataManager(__dirname);

    // Check if configured
    if (!pdm.isConfigured()) {
      console.error('❌ Personal data location not configured!');
      console.log('\nRun setup first:');
      console.log('  node setup-personal-knowledge-base.js\n');
      process.exit(1);
    }

    console.log('✅ Personal data location configured');
    console.log(`   Location: ${pdm.getPersonalDataPath()}\n`);

    // Load configuration
    const config = pdm.loadProcessingConfig();
    console.log('⚙️  Processing Configuration:');
    console.log(`   Model: ${config.model}`);
    console.log(`   Max Concurrent: ${config.maxConcurrent}`);
    console.log(`   Filter Political: ${config.filterPolitical}\n`);

    // Load stats
    const stats = pdm.loadStats();
    console.log('📊 Current Stats:');
    console.log(`   Total Videos: ${stats.totalVideos}`);
    console.log(`   Processed: ${stats.processedVideos}`);
    console.log(`   Unprocessed: ${stats.totalVideos - stats.processedVideos}`);
    console.log(`   Total Cost: $${stats.totalCost.toFixed(2)}\n`);

    // Example: Process videos (placeholder)
    console.log('🚀 Ready to process videos!');
    console.log('   Video Library: ' + pdm.getVideoLibraryPath());
    console.log('   Reports Dir: ' + pdm.getVideoReportsDir());
    console.log('   Knowledge Base: ' + pdm.getKnowledgeBaseDir());
    console.log();

    // Example: Check if specific video is processed
    const exampleVideoId = '4ukqsKajWnk';
    const isProcessed = pdm.isVideoProcessed(exampleVideoId, 575);
    console.log(`   Video ${exampleVideoId} processed: ${isProcessed ? '✅' : '❌'}\n`);

    // Example operations you can do:
    console.log('📋 Available Operations:');
    console.log('   - pdm.getAllReports()          - Get all report paths');
    console.log('   - pdm.isVideoProcessed(id)     - Check if video processed');
    console.log('   - pdm.saveReport(id, content)  - Save new report');
    console.log('   - pdm.generateConsolidatedKB() - Generate consolidated KB');
    console.log('   - pdm.exportForNotebookLM()    - Export for NotebookLM');
    console.log('   - pdm.createBackup()           - Create backup');
    console.log();

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
