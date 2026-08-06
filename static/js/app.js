// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  th: {
    appTitle:               'CSA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'เข้าสู่ระบบด้วย Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'เลือก BU',
    overallDashboard:       'ภาพรวมทั้งหมด',
    allYears:               'ทุกปี',
    department:             'BU',
    adminTitle:             'ตั้งค่าผู้ดูแลระบบ',
    holidaySection:         'กำหนดวันหยุดพิเศษ',
    addHoliday:             'เพิ่มวันหยุด',
    holidayHint:            'ระบบจะไม่นับวันอาทิตย์และวันหยุดพิเศษในการคำนวณ Remaining Days',
    forceRefreshSection:    'Force Refresh (ใช้กรณีฉุกเฉิน)',
    forceRefreshBtn:        'Force Refresh',
    forceRefreshHint:       'ใช้เมื่อมีการแก้ไขข้อมูลใน Excel โดยตรงและต้องการให้ระบบดึงข้อมูลใหม่ทันที ปกติระบบจะอัปเดตข้อมูลอัตโนมัติภายใน 5 นาทีอยู่แล้ว',
    forceRefreshWaiting:    'รออีก',
    forceRefreshSuccess:    '✓ ดำเนินการ Force Refresh เรียบร้อยแล้ว',
    backHome:               '← กลับหน้าแรก',
    refresh:                'โหลดใหม่',
    total:                  'ทั้งหมด',
    congratulations:        'สำเร็จการฝึก',
    training:               'กำลังฝึก',
    resignation:            'การลาออก',
    transferred:            'การโอนย้าย',
    register:               'ลงทะเบียน',
    newRecord:              'บันทึกข้อมูลใหม่',
    employeeId:             'รหัสพนักงาน',
    employeeName:           'ชื่อพนักงาน',
    empType:                'ประเภท',
    grade:                  'เกรด',
    selectPlaceholder:      '-- เลือก --',
    saveNew:                'บันทึกพนักงานใหม่',
    viewEdit:               'ดูข้อมูล / แก้ไขข้อมูล',
    search:                 'ค้นหา',
    remaining:              'คงเหลือ',
    workingDays:            'วันทำงาน',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'วันลาออก',
    transfersDate:          'วันโอนย้าย',
    graduateEff:            'Graduate Eff',
    comment:                'หมายเหตุ',
    saveUpdate:             'บันทึกการแก้ไข',
    close:                  'ปิด',
    riskList:               'ข้อมูลพนักงาน',
    filterAll:              'ทั้งหมด',
    colEmployeeId:          'รหัสพนักงาน',
    colEmployeeName:        'ชื่อพนักงาน',
    colGrade:               'เกรด',
    colCsaStart:            'วันเริ่มฝึก',
    colDueDate:             'วันครบกำหนด',
    colBasicTraining:       'ฝึกพื้นฐาน',
    colOperation:           'ฝึกปฏิบัติงาน',
    colBasicStart:          'เริ่มฝึกพื้นฐาน',
    colBasicEnd:            'ฝึกพื้นฐานเสร็จ',
    colOpStart:             'เริ่มฝึกขั้นตอนงาน',
    colOpEnd:               'ฝึกขั้นตอนงานเสร็จ',
    colResignDate:          'วันลาออก',
    colTransferDate:        'วันโอนย้าย',
    colGradEff:             'ประสิทธิภาพ',
    colActualStatus:        'สถานะจริง',
    dashboard:              'แดชบอร์ด',
    dueDate:                'Due Date',
    employeeIdPlaceholder:  'รหัสพนักงาน',
    signedIn:               'เข้าสู่ระบบแล้ว',
    logout:                 'ออกจากระบบ',
    loading:                'กำลังโหลด...',
    loadedCount:            'โหลด {n} พนักงาน',
    created:                'สร้างพนักงานใหม่สำเร็จ',
    updated:                'อัปเดตข้อมูลสำเร็จ',
    loaded:                 'โหลดข้อมูลพนักงานสำเร็จ',
    pleaseEnterEmployeeId:  'กรุณากรอกรหัสพนักงาน',
    statusCompleted:        'ฝึกเสร็จ',
    statusCompletedOverdue: 'ฝึกเสร็จ (เกินกำหนด)',
    statusUnderOperation:   'กำลังฝึกขั้นตอนงาน',
    statusUnderBasic:       'กำลังฝึกพื้นฐาน',
    statusResignOperation:  'ลาออกระหว่างฝึกขั้นตอน',
    statusResignBasic:      'ลาออกระหว่างฝึกพื้นฐาน',
    statusTransferOperation:'โอนย้ายระหว่างฝึกขั้นตอน',
    statusTransferBasic:    'โอนย้ายระหว่างฝึกพื้นฐาน',
    statusTransferBeforeBasic: 'โอนย้ายก่อนฝึกพื้นฐาน',
    statusResignBeforeBasic:   'ลาออกก่อนฝึกพื้นฐาน',
    ratio:                  'สัดส่วน',
    analyticsTitle:         'วิเคราะห์ข้อมูล',
    analyticsTotalTraining: 'ระยะเวลาฝึกรวม',
    analyticsBasicTraining: 'ระยะเวลาฝึกพื้นฐาน',
    analyticsOpTraining:    'ระยะเวลาฝึกขั้นตอนงาน',
    analyticsResignDur:     'ระยะเวลาก่อนลาออก',
    analyticsResignRatio:   'สัดส่วนการลาออก',
    analyticsAvg:           'ค่าเฉลี่ย',
    analyticsMin:           'ต่ำสุด',
    analyticsMax:           'สูงสุด',
    analyticsDays:          'วัน',
    analyticsEmployees:     'คน',
    analyticsResignTotal:   'ลาออกทั้งหมด',
    analyticsResignOp:      'ระหว่างฝึกขั้นตอน',
    analyticsResignBasic:   'ระหว่างฝึกพื้นฐาน',
    analyticsResignBeforeBasic: 'ก่อนฝึกพื้นฐาน',
    analyticsNoData:        'ไม่มีข้อมูล',
    analyticsProceedLabel:      '% ผู้ที่ไปต่อ Op Training',
    analyticsProceedHint:       'คน (จากผู้เริ่ม Basic Training)',
    analyticsAllDept:       'ทุกหน่วยงาน',
    dayModeTotal:           'รวมทุกวัน',
    dayMode5d:              'ทำงาน 5 วัน',
    dayMode6d:              'ทำงาน 6 วัน',
    chartsTitle:            'ภาพรวมสถานะ',
    chartOverall:           'สถานะรวม',
    chartGradBreakdown:     'การฝึกเสร็จ',
    chartTrainingBreakdown: 'กำลังฝึก',
    chartResignBreakdown:   'การลาออก',
    statusOnTime:           'ตรงเวลา',
    statusOverdue:          'เกินกำหนด',
    statusTransfer:         'โอนย้าย',
    colEmployeesLeave:      'วันลา',
    workMode5d:             'ทำงาน 5 วัน',
    workMode6d:             'ทำงาน 6 วัน',
    adminBtn:               'Admin',
    tooltipEdit:            'แก้ไข',
    tooltipConfirm:         'ยืนยัน',
    tooltipCancel:          'ยกเลิก',
    themeToggleTitle:       'เปลี่ยนธีม',
    trendTitle:             'แนวโน้มรายเดือน',
    trendJoined:            'พนักงานเข้าใหม่',
    trendCompleted:         'ฝึกสำเร็จ',
    trendResigned:          'ลาออก',
    trendMonth:             'เดือน',
    yearLabel:              'ปี',
    managerLoginBtn:        'เข้าสู่ระบบ',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'ไม่สามารถเข้าสู่ระบบ View Mode ได้',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'อยู่ระหว่างพัฒนา กรุณารอสักครู่...',

    // ── GICA Phase 1a ────────────────────────────────────────────────
    // Sub-tab bar
    gicaSubPerf:            'ภาพรวมประสิทธิภาพ',
    gicaSubSched:           'ตารางการประเมิน',
    gicaSubEmp:             'รายชื่อพนักงาน',
    // KPI row 1
    gicaTotalEmp:           'จำนวนพนักงานทั้งหมด',
    pass:                   'ผ่าน',
    fail:                   'ไม่ผ่าน',
    pending:                'รอประเมิน',
    gicaOverallMeas:        'คะแนนรวม (การวัด)',
    gicaOverallInsp:        'คะแนนรวม (การตรวจ)',
    gicaOverallAvg:         'คะแนนเฉลี่ยรวม',
    gicaFlipCriteria:       '↩ เกณฑ์ให้เกรด',
    gicaFlipBack:           '↩ กลับ',
    gicaCriteria:           'เกณฑ์',
    gicaGradingCriteria:    'เกณฑ์การให้เกรด',
    // BU flip cards row 2
    gicaScoreMeas:          'คะแนน (การวัด)',
    gicaScoreInsp:          'คะแนน (การตรวจ)',
    gicaPeople:             'คน',
    gicaNoData:             '— ไม่มีข้อมูล —',
    gicaNoTrend:            'ไม่มีข้อมูล trend',
    // Employee List toolbar
    gicaEmpListTitle:       'รายชื่อพนักงาน',
    gicaCreateOp:           '+ เพิ่มพนักงานใหม่',
    gicaPrint:              '🖨 พิมพ์',
    gicaAllBu:              'ทุก BU',
    gicaAllGrades:          'ทุกเกรด',
    gicaAllDepts:           'ทุกแผนก',
    gicaAllLevels:          'ทุกระดับ',
    gicaSearchPh:           'ค้นหาด้วยชื่อ / รหัส',
    gicaShowPerPage:        'แสดงต่อหน้า',
    // Table columns
    gicaColBu:              'BU',
    gicaColEmpId:           'รหัสพนักงาน',
    gicaColName:            'ชื่อ',
    gicaColDept:            'แผนก',
    gicaColLevel:           'ระดับ',
    gicaColMeas:            'การวัด',
    gicaColInsp:            'การตรวจ',
    gicaColAttempt:         'ครั้งที่',
    gicaColLastDate:        'วันสอบล่าสุด',
    gicaColHistory:         'ประวัติ',
    gicaColNextDate:        'วันสอบถัดไป',
    gicaColDaysLeft:        'วันคงเหลือ',
    gicaColStatus:          'สถานะ',
    gicaColAction:          'จัดการ',
    gicaTableEmpty:         'ไม่พบข้อมูล',
    gicaEmpNameTip:         'คลิกเพื่อบันทึกผลสอบ',
    gicaDeleteEmpTip:       'ลบพนักงาน',

    // ── GICA Phase 1b: Matrix / Quadrant / Modals ────────────────────
    gicaExpMatrix:          'Expectation Matrix',
    gicaKpiSetup:           'KPI Setup',
    gicaKpiSetupTip:        'กำหนด KPI target สำหรับแต่ละระดับ',
    gicaKpiSummary:         'KPI Summary',
    gicaKpiSummaryTip:      'ดูสรุป KPI Actual ทุก BU และองค์กร',
    gicaKpiSummaryTitle:    'KPI Summary',
    gicaKpiOrgTitle:        'องค์กร (Organization)',
    gicaKpiBuSection:       'Business Units',
    gicaKpiPassRate:        'อัตราการผ่าน',
    gicaKpiPassed:          'ผ่าน',
    gicaKpiFailed:          'ไม่ผ่าน',
    gicaKpiPending:         'ยังไม่ประเมิน',
    gicaKpiTested:          'ประเมินแล้ว',
    gicaKpiNoDataBu:        'ยังไม่มีข้อมูล',
    gicaKpiNoLevelData:     'ยังไม่มีพนักงานในระดับนี้',
    gicaKpiAchieved:        'ผ่าน KPI',
    gicaKpiNotAchieved:     'ไม่ผ่าน KPI',
    gicaKpiBuDetailTip:     'คลิกดูรายละเอียด KPI ต่อระดับใน BU นี้',
    gicaKpiBuDetailTitle:   'รายละเอียด KPI ต่อระดับ',
    gicaKpiBuDetailSubtitle:'สรุปผลการประเมินต่อระดับ',
    gicaKpiPerLevel:        'KPI ต่อระดับ',
    gicaKpiTargetShort:     'เป้าหมาย',
    gicaKpiActualPct:       'ผลจริง',
    gicaKpiCounts:          'ผ่าน / ไม่ผ่าน / รอ / รวม',
    gicaKpiResult:          'สถานะ',
    gicaKpiMet:             'ถึงเป้า',
    gicaKpiMissed:          'ต่ำกว่าเป้า',
    gicaKpiAvgTarget:       'KPI เป้าเฉลี่ย',
    gicaKpiLevelsMeeting:   'ระดับที่ถึงเป้า',
    gicaKpiSavePng:         'บันทึกเป็น PNG',
    gicaKpiPrint:           'พิมพ์',
    gicaKpiModalDesc:       'กำหนด KPI target (%) สำหรับแต่ละระดับ',
    gicaClickToView:        'คลิกดูรายชื่อ',
    gicaClickToViewDept:    'คลิกดูรายชื่อทั้งแผนก',
    gicaExpectedMeas:       'การวัด — เกรดที่คาดหวัง',
    gicaExpectedInsp:       'การตรวจ — เกรดที่คาดหวัง',
    gicaMatrixEmpty:        'ไม่มีข้อมูล',
    gicaFreqInfoTip:        'เกณฑ์ความถี่การประเมิน (Table_freq)',
    gicaFreqModalTitle:     'ความถี่และเกณฑ์การประเมิน',
    gicaFreqDeptLevel:      'แผนก / ระดับ',
    gicaFreqRole:           'หน้าที่',
    gicaFreqFreq:           'ความถี่',
    gicaFreqEveryNMos:      'ทุก {n} เดือน',
    gicaFreqEmpty:          'ไม่มีข้อมูล Table_freq',
    cancel:                 'ยกเลิก',
    confirm:                'ยืนยัน',
    gicaQuadTitle:          'Quadrant Analysis',
    gicaQuadPassBoth:       'ผ่านทั้งคู่',
    gicaQuadMFailIPass:     'การวัด: ไม่ผ่าน / การตรวจ: ผ่าน',
    gicaQuadMPassIFail:     'การวัด: ผ่าน / การตรวจ: ไม่ผ่าน',
    gicaQuadFailBoth:       'ไม่ผ่านทั้งคู่',
    gicaFlipViewTrend:      'ดู Trend',
    gicaFlipViewScore:      'ดู Score',

    // ── GICA Phase 2: Add Result / Create / Delete confirm / Toasts ──
    gicaMeasResultPct:      'ผลการวัด (%)',
    gicaInspResultPct:      'ผลการตรวจ (%)',
    gicaAssessmentDate:     'วันที่ประเมิน',
    gicaSelectDate:         'เลือกวันที่',
    gicaDelete:             'ลบ',
    gicaResultCancelPrompt: 'ยกเลิกการกรอกครั้งนี้?',
    gicaResultSavePrompt:   'บันทึกข้อมูลนี้?',
    gicaFormFillAll:        'กรุณากรอกข้อมูลให้ครบทุกช่อง',
    gicaSaving:             'กำลังบันทึกข้อมูล...',
    gicaSaved:              'บันทึกข้อมูลแล้ว',
    gicaSaveFail:           'บันทึกไม่สำเร็จ',
    gicaNextDateEditTip:    'คลิกเพื่อแก้ไขวันนัดสอบครั้งถัดไป',
    gicaNextDateOverrideTip:'ตั้งค่าเองโดยผู้ใช้ (ไม่ใช่ค่าที่คำนวณอัตโนมัติ)',
    gicaNextDateResetTip:   'รีเซ็ตกลับไปใช้ค่าที่คำนวณอัตโนมัติ',
    gicaDeleteEmpSaved:     'ลบพนักงานแล้ว',
    gicaErrPrefix:          'เกิดข้อผิดพลาด',
    gicaCreateTitle:        'เพิ่มพนักงานใหม่',
    gicaEmpId:              'รหัสพนักงาน',
    gicaEmpName:            'ชื่อพนักงาน',
    gicaPosition:           'ตำแหน่ง',
    gicaStartDate:          'วันที่เริ่มงาน',
    gicaNumericOnly:        'ตัวเลขเท่านั้น',
    gicaDeleteConfirmPrompt:'ลบพนักงาน "{name}" ({empid}) ออกจากระบบ GICA?\nการลบไม่สามารถย้อนกลับได้',
    gicaColResult:          'ผล',
    gicaScoreHistory:       'ประวัติคะแนน',
    gicaDeleteSelected:     'ลบที่เลือก',
    gicaDeleteAllScores:    'ลบทั้งหมด',
    gicaSelectAll:          'เลือกทั้งหมด',
    gicaNoScores:           'ยังไม่มีคะแนน',
    gicaDeletingScore:      'กำลังลบคะแนน…',
    gicaScoreDeleted:       'ลบคะแนนแล้ว',
    gicaSelectScoreFirst:   'เลือกรายการที่จะลบก่อน',
    gicaDeleteScoreConfirm: 'ลบคะแนน {n} รายการที่เลือก?\nการลบไม่สามารถย้อนกลับได้',
    gicaDeleteAllScoresConfirm:'ลบคะแนนทั้งหมดของพนักงานคนนี้?\nพนักงานยังอยู่ในระบบ แต่คะแนนจะถูกล้างทั้งหมด',
    yes:                    'ใช่',
    no:                     'ไม่',
    gicaUnknownErr:         'Unknown error',
    gicaDeletingEmp:        'กำลังลบพนักงาน...',
    gicaDeleteFail:         'ลบไม่สำเร็จ',
    gicaAddResultTitle:     'บันทึกผลประเมิน',

    // ── GICA Phase 3: Assessment History modal ────────────────────────
    gicaAssessmentHistory:  'ประวัติการประเมิน',
    gicaMeasResult:         'ผลการวัด',
    gicaInspResult:         'ผลการตรวจ',
    gicaTotalAvgScore:      'คะแนนเฉลี่ยรวม',
    gicaTotalAssessments:   'จำนวนการประเมินทั้งหมด',
    gicaPassRate:           'อัตราการผ่าน',
    gicaCurrentFailStreak:  'จำนวนครั้งไม่ผ่านติดต่อกัน',
    gicaPrev:               'ก่อนหน้า',
    gicaLast:               'ล่าสุด',
    gicaDiff:               'ต่าง',
    gicaAvg:                'เฉลี่ย',
    gicaAvgMeas:            'ค่าเฉลี่ยการวัด',
    gicaAvgInsp:            'ค่าเฉลี่ยการตรวจ',
    gicaMeasRange:          'ช่วงการวัด',
    gicaInspRange:          'ช่วงการตรวจ',
    gicaFail1:              'ไม่ผ่าน 1 ครั้ง',
    gicaFail2:              'ไม่ผ่าน 2 ครั้ง',
    gicaFail3:              'ไม่ผ่าน 3+ ครั้ง',
    gicaNotTested:          'ยังไม่ได้สอบ',
    gicaPassed:             'สอบผ่าน',

    // ── GICA Phase 4: Assessment Schedule tab ─────────────────────────
    gicaSchedTimeline:      'ตารางเวลาการประเมิน',
    gicaSchedCalendar:      'ตารางการประเมิน (มุมมองปฏิทิน)',
    gicaUpcoming:           'การประเมินที่กำลังจะมาถึง',
    gicaDay:                'วัน',
    gicaAllAttempts:        'ทุกจำนวนครั้ง',
    gicaAllStatus:          'ทุกสถานะ',
    gicaWeek:               'สัปดาห์',
    gicaMonth:              'เดือน',
    gicaAll:                'ทั้งหมด',
    gicaRetest:             'สอบซ้ำ',
    gicaReview:             'ทบทวน',
    gicaLegendTotal:        'รวม',
    gicaLegendOnTimePass:   'ตรงเวลา (ผ่าน)',
    gicaLegendOnTimeFail:   'ตรงเวลา (ไม่ผ่าน)',
    gicaLegendOverdue:      'เกินกำหนด',
    gicaAssessmentRequired: 'ต้องประเมิน',
    gicaFailStatusStreak:   'สถานะการไม่ผ่านต่อเนื่อง',
    gicaDueThisWeek:        'ครบกำหนดสัปดาห์นี้',
    gicaEarlyAssessment:    'ประเมินก่อนกำหนด',
    gicaOverallOnTime:      'อัตราการประเมินตรงเวลา',
    gicaAssessmentStatus:   'สถานะการประเมิน',
    gicaAttended:           'มาสอบ',
    gicaNotYetAttended:     'ยังไม่มาสอบ',
    gicaClickBuCohort:      'คลิกดูรายชื่อ',
    gicaMustAttendWeek:     'ต้องเข้ารับการประเมินสัปดาห์นี้',
    gicaFailCases:          'ไม่ผ่าน',
    gicaNoBuData:           'ไม่มีข้อมูล BU',
    gicaClose:              'ปิด',
    gicaCalToday:           'วันนี้',
    gicaCalFilters:         'ตัวกรอง',
    gicaCalStatus:          'สถานะ',
    gicaCalType:            'ประเภท',
    gicaCalTypeInitial:     'ประเมินครั้งแรก',
    gicaCalTypeRetest:      'ประเมินซ้ำ',
    gicaCalTypeReview:      'ทบทวน',
    gicaCalTypeMissed:      'ขาดสอบ (roll +7 วัน)',
    gicaCalOverdue:         'เกินกำหนด (ยังไม่มาสอบ)',
    gicaCalWeekPrefix:      'สัปดาห์',
    gicaWeekMon:            'จันทร์',
    gicaWeekTue:            'อังคาร',
    gicaWeekWed:            'พุธ',
    gicaWeekThu:            'พฤหัสบดี',
    gicaWeekFri:            'ศุกร์',
    gicaWeekSat:            'เสาร์',
    gicaWeekSun:            'อาทิตย์',
    gicaEmpListForAssessment:         'รายชื่อพนักงานสำหรับการประเมิน GICA',
    gicaEmpListForAssessmentSchedule: 'รายชื่อพนักงานสำหรับตารางการประเมิน GICA',
    gicaAssessmentDateLbl:  'วันที่ประเมิน',
    gicaTotalWord:          'รวม',
    gicaEmpsWord:           'คน',
    gicaReportDate:         'วันที่รายงาน',
    gicaParticipants:       'ผู้เข้าประเมิน',
    gicaPrintPdf:           '🖨 พิมพ์ PDF',
  },
  en: {
    appTitle:               'GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'Sign in with Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'Select BU',
    overallDashboard:       'Overall Dashboard',
    allYears:               'All Years',
    department:             'BU',
    adminTitle:             'Admin Settings',
    holidaySection:         'Configure Special Holidays',
    addHoliday:             'Add Holiday',
    holidayHint:            'Sundays and special holidays are excluded from the Remaining Days calculation.',
    forceRefreshSection:    'Force Refresh (Emergency Use)',
    forceRefreshBtn:        'Force Refresh',
    forceRefreshHint:       'Use this when data was edited directly in Excel and you need it reflected immediately. The system normally refreshes automatically within 5 minutes.',
    forceRefreshWaiting:    'Wait',
    forceRefreshSuccess:    '✓ Force Refresh completed successfully',
    backHome:               '← Back to Home',
    refresh:                'Refresh',
    total:                  'Total',
    congratulations:        'Completed Training',
    training:               'In Training',
    resignation:            'Resignation',
    transferred:            'Transferred',
    register:               'Register',
    newRecord:              'Create New Record',
    employeeId:             'Employee ID',
    employeeName:           'Employee Name',
    empType:                'Type',
    grade:                  'Grade',
    selectPlaceholder:      '-- Select --',
    saveNew:                'Save New Employee',
    viewEdit:               'View / Edit Record',
    search:                 'Search',
    remaining:              'Remaining',
    workingDays:            'working days',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'Resign Date',
    transfersDate:          'Transfers Date',
    graduateEff:            'Graduate Eff',
    comment:                'Comment',
    saveUpdate:             'Save Update',
    close:                  'Close',
    riskList:               'Employee Data',
    filterAll:              'All',
    colEmployeeId:          'Employee ID',
    colEmployeeName:        'Employee Name',
    colGrade:               'Grade',
    colCsaStart:            'CSA Start',
    colDueDate:             'Due Date',
    colBasicTraining:       'Basic Training',
    colOperation:           'Operation',
    colBasicStart:          'Basic Start',
    colBasicEnd:            'Basic End',
    colOpStart:             'Op Start',
    colOpEnd:               'Op End',
    colResignDate:          'Resign Date',
    colTransferDate:        'Transfer Date',
    colGradEff:             'Eff%',
    colActualStatus:        'Actual Status',
    dashboard:              'Dashboard',
    dueDate:                'Due Date',
    employeeIdPlaceholder:  'Employee ID',
    signedIn:               'Signed in',
    logout:                 'Logout',
    loading:                'Loading...',
    loadedCount:            'Loaded {n} employees',
    created:                'Employee created successfully',
    updated:                'Employee updated successfully',
    loaded:                 'Employee data loaded',
    pleaseEnterEmployeeId:  'Please enter Employee ID',
    statusCompleted:        'Completed',
    statusCompletedOverdue: 'Completed (Overdue)',
    statusUnderOperation:   'In Operation Training',
    statusUnderBasic:       'In Basic Training',
    statusResignOperation:  'Resigned (Op Training)',
    statusResignBasic:      'Resigned (Basic Training)',
    statusTransferOperation:'Transferred (Op Training)',
    statusTransferBasic:    'Transferred (Basic Training)',
    statusTransferBeforeBasic: 'Transferred (Before Basic)',
    statusResignBeforeBasic:   'Resigned (Before Basic)',
    ratio:                  'Ratio',
    analyticsTitle:         'Data Analytics',
    analyticsTotalTraining: 'Total Training Duration',
    analyticsBasicTraining: 'Basic Training Duration',
    analyticsOpTraining:    'Operation Training Duration',
    analyticsResignDur:     'Duration Before Resign',
    analyticsResignRatio:   'Resign Breakdown',
    analyticsAvg:           'Average',
    analyticsMin:           'Min',
    analyticsMax:           'Max',
    analyticsDays:          'days',
    analyticsEmployees:     'employees',
    analyticsResignTotal:   'Total Resigned',
    analyticsResignOp:      'During Op Training',
    analyticsResignBasic:   'During Basic Training',
    analyticsResignBeforeBasic: 'Before Basic Training',
    analyticsNoData:        'No data',
    analyticsProceedLabel:      '% Proceed to Op Training',
    analyticsProceedHint:       'people (of Basic Training starters)',
    analyticsAllDept:       'All departments',
    dayModeTotal:           'Total',
    dayMode5d:              '5-day Week',
    dayMode6d:              '6-day Week',
    chartsTitle:            'Status Overview',
    chartOverall:           'Overall',
    chartGradBreakdown:     'Graduation',
    chartTrainingBreakdown: 'In Training',
    chartResignBreakdown:   'Resignation',
    statusOnTime:           'On time',
    statusOverdue:          'Overdue',
    statusTransfer:         'Transfer',
    colEmployeesLeave:      'Leave Days',
    workMode5d:             '5-day Week',
    workMode6d:             '6-day Week',
    adminBtn:               'Admin',
    tooltipEdit:            'Edit',
    tooltipConfirm:         'Confirm',
    tooltipCancel:          'Cancel',
    themeToggleTitle:       'Toggle theme',
    trendTitle:             'Monthly Trend',
    trendJoined:            'New Hires',
    trendCompleted:         'Completed',
    trendResigned:          'Resigned',
    trendMonth:             'Month',
    yearLabel:              'Year',
    managerLoginBtn:        'Sign In',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'Could not sign in as View Mode',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'Under development, please wait...',

    // ── GICA Phase 1a ────────────────────────────────────────────────
    gicaSubPerf:            'Performance',
    gicaSubSched:           'Assessment Schedule',
    gicaSubEmp:             'Employee List',
    gicaTotalEmp:           'Total employees',
    pass:                   'Pass',
    fail:                   'Fail',
    pending:                'Pending',
    gicaOverallMeas:        'Overall Score (Measurement)',
    gicaOverallInsp:        'Overall Score (Inspection)',
    gicaOverallAvg:         'Overall Average Score',
    gicaFlipCriteria:       '↩ Grading criteria',
    gicaFlipBack:           '↩ Back',
    gicaCriteria:           'Criteria',
    gicaGradingCriteria:    'Grading Criteria',
    gicaScoreMeas:          'Score (Measurement)',
    gicaScoreInsp:          'Score (Inspection)',
    gicaPeople:             'People',
    gicaNoData:             '— no data —',
    gicaNoTrend:            'No trend data',
    gicaEmpListTitle:       'Employee List',
    gicaCreateOp:           '+ Create new operator',
    gicaPrint:              '🖨 Print',
    gicaAllBu:              'All BU',
    gicaAllGrades:          'All Grades',
    gicaAllDepts:           'All Departments',
    gicaAllLevels:          'All Levels',
    gicaSearchPh:           'Search by name / ID',
    gicaShowPerPage:        'Show per page',
    gicaColBu:              'BU',
    gicaColEmpId:           'Emp ID',
    gicaColName:            'Name',
    gicaColDept:            'Department',
    gicaColLevel:           'Level',
    gicaColMeas:            'Measurement',
    gicaColInsp:            'Inspection',
    gicaColAttempt:         'Attempt',
    gicaColLastDate:        'Last Date',
    gicaColHistory:         'History',
    gicaColNextDate:        'Next Date',
    gicaColDaysLeft:        'Days Left',
    gicaColStatus:          'Status',
    gicaColAction:          'Action',
    gicaTableEmpty:         'No data found',
    gicaEmpNameTip:         'Click to record assessment result',
    gicaDeleteEmpTip:       'Delete employee',

    // ── GICA Phase 1b: Matrix / Quadrant / Modals ────────────────────
    gicaExpMatrix:          'Expectation Matrix',
    gicaKpiSetup:           'KPI Setup',
    gicaKpiSetupTip:        'Set KPI target for each Level',
    gicaKpiSummary:         'KPI Summary',
    gicaKpiSummaryTip:      'View actual KPI per BU and organization-wide',
    gicaKpiSummaryTitle:    'KPI Summary',
    gicaKpiOrgTitle:        'Organization',
    gicaKpiBuSection:       'Business Units',
    gicaKpiPassRate:        'Pass Rate',
    gicaKpiPassed:          'Passed',
    gicaKpiFailed:          'Failed',
    gicaKpiPending:         'Not Assessed',
    gicaKpiTested:          'Assessed',
    gicaKpiNoDataBu:        'No data',
    gicaKpiNoLevelData:     'No employees at this level',
    gicaKpiAchieved:        'KPI Achieved',
    gicaKpiNotAchieved:     'KPI Not Achieved',
    gicaKpiBuDetailTip:     'Click to view KPI details per level in this BU',
    gicaKpiBuDetailTitle:   'KPI Detail per Level',
    gicaKpiBuDetailSubtitle:'Assessment result summary per level',
    gicaKpiPerLevel:        'KPI per Level',
    gicaKpiTargetShort:     'Target',
    gicaKpiActualPct:       'Actual',
    gicaKpiCounts:          'Pass / Fail / Pending / Total',
    gicaKpiResult:          'Status',
    gicaKpiMet:             'Achieve KPI',
    gicaKpiMissed:          'Below Target',
    gicaKpiAvgTarget:       'Avg Target',
    gicaKpiLevelsMeeting:   'Levels meeting KPI',
    gicaKpiSavePng:         'Save as PNG',
    gicaKpiPrint:           'Print',
    gicaKpiModalDesc:       'Define KPI target (%) for each level',
    gicaClickToView:        'Click to see names',
    gicaClickToViewDept:    'Click to see all names in this department',
    gicaExpectedMeas:       'Measurement — Expected grade',
    gicaExpectedInsp:       'Inspection — Expected grade',
    gicaMatrixEmpty:        'No data',
    gicaFreqInfoTip:        'Assessment frequency criteria (Table_freq)',
    gicaFreqModalTitle:     'Assessment Frequency & Expectation',
    gicaFreqDeptLevel:      'Dept / Level',
    gicaFreqRole:           'Role',
    gicaFreqFreq:           'Frequency',
    gicaFreqEveryNMos:      'Every {n} months',
    gicaFreqEmpty:          'No Table_freq data',
    cancel:                 'Cancel',
    confirm:                'Confirm',
    gicaQuadTitle:          'Quadrant Analysis',
    gicaQuadPassBoth:       'Pass Both',
    gicaQuadMFailIPass:     'Meas. Fail / Insp. Pass',
    gicaQuadMPassIFail:     'Meas. Pass / Insp. Fail',
    gicaQuadFailBoth:       'Fail Both',
    gicaFlipViewTrend:      'View Trend',
    gicaFlipViewScore:      'View Score',

    // ── GICA Phase 2: Add Result / Create / Delete confirm / Toasts ──
    gicaMeasResultPct:      'Measurement Result (%)',
    gicaInspResultPct:      'Inspection Result (%)',
    gicaAssessmentDate:     'Assessment Date',
    gicaSelectDate:         'Select date',
    gicaDelete:             'Delete',
    gicaResultCancelPrompt: 'Cancel this entry?',
    gicaResultSavePrompt:   'Save this record?',
    gicaFormFillAll:        'Please complete all required fields',
    gicaSaving:             'Saving...',
    gicaSaved:              'Saved',
    gicaSaveFail:           'Save failed',
    gicaNextDateEditTip:    'Click to edit next assessment date',
    gicaNextDateOverrideTip:'Manually set (not auto-computed)',
    gicaNextDateResetTip:   'Reset to auto-computed date',
    gicaDeleteEmpSaved:     'Employee deleted',
    gicaErrPrefix:          'Error',
    gicaCreateTitle:        'Create new operator',
    gicaEmpId:              'Employee ID',
    gicaEmpName:            'Employee Name',
    gicaPosition:           'Position',
    gicaStartDate:          'Start Date',
    gicaNumericOnly:        'Numeric characters only',
    gicaDeleteConfirmPrompt:'Delete employee "{name}" ({empid}) from GICA?\nThis action cannot be undone',
    gicaColResult:          'Result',
    gicaScoreHistory:       'Score History',
    gicaDeleteSelected:     'Delete selected',
    gicaDeleteAllScores:    'Delete all',
    gicaSelectAll:          'Select all',
    gicaNoScores:           'No scores yet',
    gicaDeletingScore:      'Deleting score…',
    gicaScoreDeleted:       'Score deleted',
    gicaSelectScoreFirst:   'Select at least one to delete',
    gicaDeleteScoreConfirm: 'Delete {n} selected score(s)?\nThis action cannot be undone',
    gicaDeleteAllScoresConfirm:'Delete ALL scores for this employee?\nThe employee stays in the system, but every score is cleared',
    yes:                    'Yes',
    no:                     'No',
    gicaUnknownErr:         'Unknown error',
    gicaDeletingEmp:        'Deleting employee...',
    gicaDeleteFail:         'Delete failed',
    gicaAddResultTitle:     'Add Assessment Result',

    // ── GICA Phase 3: Assessment History modal ────────────────────────
    gicaAssessmentHistory:  'Assessment History',
    gicaMeasResult:         'Measurement Result',
    gicaInspResult:         'Inspection Result',
    gicaTotalAvgScore:      'Total average score',
    gicaTotalAssessments:   'Total Assessments',
    gicaPassRate:           'Pass Rate',
    gicaCurrentFailStreak:  'Current Fail Streak',
    gicaPrev:               'Prev',
    gicaLast:               'Last',
    gicaDiff:               'Diff',
    gicaAvg:                'Avg',
    gicaAvgMeas:            'Avg Measurement',
    gicaAvgInsp:            'Avg Inspection',
    gicaMeasRange:          'Measurement Range',
    gicaInspRange:          'Inspection Range',
    gicaFail1:              'Fail 1',
    gicaFail2:              'Fail 2',
    gicaFail3:              'Fail 3+',
    gicaNotTested:          'Not tested',
    gicaPassed:             'Passed',

    // ── GICA Phase 4: Assessment Schedule tab ─────────────────────────
    gicaSchedTimeline:      'Assessment Schedule Timeline',
    gicaSchedCalendar:      'Assessment Schedule (Calendar View)',
    gicaUpcoming:           'Upcoming Assessments',
    gicaDay:                'Day',
    gicaAllAttempts:        'All Attempts',
    gicaAllStatus:          'All Status',
    gicaWeek:               'Week',
    gicaMonth:              'Month',
    gicaAll:                'All',
    gicaRetest:             'Retest',
    gicaReview:             'Review',
    gicaLegendTotal:        'Total',
    gicaLegendOnTimePass:   'On-time (Pass)',
    gicaLegendOnTimeFail:   'On-time (Fail)',
    gicaLegendOverdue:      'Overdue',
    gicaAssessmentRequired: 'Assessment Required',
    gicaFailStatusStreak:   'Failure Status by Consecutive Attempts',
    gicaDueThisWeek:        'Due this week',
    gicaEarlyAssessment:    'Early Assessment',
    gicaOverallOnTime:      'Overall On-time Rate',
    gicaAssessmentStatus:   'Assessment Status',
    gicaAttended:           'Attended',
    gicaNotYetAttended:     'Not yet attended',
    gicaClickBuCohort:      'Click to view the name list',
    gicaMustAttendWeek:     'Must attend assessment this week',
    gicaFailCases:          'Fail Cases',
    gicaNoBuData:           'No BU data',
    gicaClose:              'Close',
    gicaCalToday:           'Today',
    gicaCalFilters:         'Filters',
    gicaCalStatus:          'Status',
    gicaCalType:            'Type',
    gicaCalTypeInitial:     'Initial assessment',
    gicaCalTypeRetest:      'Re-assessment',
    gicaCalTypeReview:      'Review assessment',
    gicaCalTypeMissed:      'Missed (rolled +7 days)',
    gicaCalOverdue:         'Overdue (Not yet tested)',
    gicaCalWeekPrefix:      'WEEK',
    gicaWeekMon:            'Monday',
    gicaWeekTue:            'Tuesday',
    gicaWeekWed:            'Wednesday',
    gicaWeekThu:            'Thursday',
    gicaWeekFri:            'Friday',
    gicaWeekSat:            'Saturday',
    gicaWeekSun:            'Sunday',
    gicaEmpListForAssessment:         'Employee List for GICA Assessment',
    gicaEmpListForAssessmentSchedule: 'Employee List for GICA Assessment Schedule',
    gicaAssessmentDateLbl:  'Assessment Date',
    gicaTotalWord:          'Total',
    gicaEmpsWord:           'employees',
    gicaReportDate:         'Report Date',
    gicaParticipants:       'Participants',
    gicaPrintPdf:           '🖨 Print PDF',
  },
  lo: {
    appTitle:               'GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'ເຂົ້າສູ່ລະບົບດ້ວຍ Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'ເລືອກ BU',
    overallDashboard:       'ພາບລວມທັງໝົດ',
    allYears:               'ທຸກປີ',
    department:             'BU',
    adminTitle:             'ຕັ້ງຄ່າຜູ້ດູແລລະບົບ',
    holidaySection:         'ກຳນົດວັນຫຍຸດພິເສດ',
    addHoliday:             'ເພີ່ມວັນຫຍຸດ',
    holidayHint:            'ລະບົບຈະບໍ່ນັບວັນອາທິດ ແລະ ວັນຫຍຸດພິເສດໃນການຄຳນວນ Remaining Days',
    forceRefreshSection:    'ໂຫຼດໃໝ່ແບບບັງຄັບ (ໃຊ້ກໍລະນີສຸກເສີນ)',
    forceRefreshBtn:        'Force Refresh',
    forceRefreshHint:       'ໃຊ້ເມື່ອມີການແກ້ໄຂຂໍ້ມູນໃນ Excel ໂດຍກົງ ແລະ ຕ້ອງການໃຫ້ລະບົບດຶງຂໍ້ມູນໃໝ່ທັນທີ ປົກກະຕິລະບົບຈະອັບເດດອັດຕະໂນມັດພາຍໃນ 5 ນາທີ',
    forceRefreshWaiting:    'ລໍຖ້າ',
    forceRefreshSuccess:    '✓ Force Refresh ສຳເລັດແລ້ວ',
    backHome:               '← ກັບໄປໜ້າຫຼັກ',
    refresh:                'ໂຫຼດໃໝ່',
    total:                  'ທັງໝົດ',
    congratulations:        'ສຳເລັດການຝຶກ',
    training:               'ກຳລັງຝຶກ',
    resignation:            'ການລາອອກ',
    transferred:            'ການໂອນຍ້າຍ',
    register:               'ລົງທະບຽນ',
    newRecord:              'ບັນທຶກຂໍ້ມູນໃໝ່',
    employeeId:             'ລະຫັດພະນັກງານ',
    employeeName:           'ຊື່ພະນັກງານ',
    empType:                'ປະເພດ',
    grade:                  'ເກຣດ',
    selectPlaceholder:      '-- ເລືອກ --',
    saveNew:                'ບັນທຶກພະນັກງານໃໝ່',
    viewEdit:               'ເບິ່ງ / ແກ້ໄຂຂໍ້ມູນ',
    search:                 'ຄົ້ນຫາ',
    remaining:              'ຄົງເຫຼືອ',
    workingDays:            'ວັນເຮັດວຽກ',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'ວັນລາອອກ',
    transfersDate:          'ວັນໂອນຍ້າຍ',
    graduateEff:            'Graduate Eff',
    comment:                'ໝາຍເຫດ',
    saveUpdate:             'ບັນທຶກການແກ້ໄຂ',
    close:                  'ປິດ',
    riskList:               'ຂໍ້ມູນພະນັກງານ',
    filterAll:              'ທັງໝົດ',
    colEmployeeId:          'ລະຫັດພະນັກງານ',
    colEmployeeName:        'ຊື່ພະນັກງານ',
    colGrade:               'ເກຣດ',
    colCsaStart:            'ວັນເລີ່ມຝຶກ',
    colDueDate:             'ວັນຄົບກຳນົດ',
    colBasicTraining:       'ຝຶກພື້ນຖານ',
    colOperation:           'ຝຶກປະຕິບັດງານ',
    colBasicStart:          'ເລີ່ມຝຶກພື້ນຖານ',
    colBasicEnd:            'ຝຶກພື້ນຖານສຳເລັດ',
    colOpStart:             'ເລີ່ມຝຶກຂັ້ນຕອນ',
    colOpEnd:               'ຝຶກຂັ້ນຕອນສຳເລັດ',
    colResignDate:          'ວັນລາອອກ',
    colTransferDate:        'ວັນໂອນຍ້າຍ',
    colGradEff:             'ປະສິດທິພາບ',
    colActualStatus:        'ສະຖານະຈິງ',
    dashboard:              'ແດສບອດ',
    dueDate:                'Due Date',
    employeeIdPlaceholder:  'ລະຫັດພະນັກງານ',
    signedIn:               'ເຂົ້າສູ່ລະບົບແລ້ວ',
    logout:                 'ອອກຈາກລະບົບ',
    loading:                'ກຳລັງໂຫຼດ...',
    loadedCount:            'ໂຫຼດ {n} ພະນັກງານ',
    created:                'ສ້າງພະນັກງານໃໝ່ສຳເລັດ',
    updated:                'ອັບເດດຂໍ້ມູນສຳເລັດ',
    loaded:                 'ໂຫຼດຂໍ້ມູນພະນັກງານສຳເລັດ',
    pleaseEnterEmployeeId:  'ກະລຸນາໃສ່ລະຫັດພະນັກງານ',
    statusCompleted:        'ຝຶກສຳເລັດ',
    statusCompletedOverdue: 'ຝຶກສຳເລັດ (ເກີນກຳນົດ)',
    statusUnderOperation:   'ກຳລັງຝຶກຂັ້ນຕອນ',
    statusUnderBasic:       'ກຳລັງຝຶກພື້ນຖານ',
    statusResignOperation:  'ລາອອກລະຫວ່າງຝຶກຂັ້ນຕອນ',
    statusResignBasic:      'ລາອອກລະຫວ່າງຝຶກພື້ນຖານ',
    statusTransferOperation:'ໂອນຍ້າຍລະຫວ່າງຝຶກຂັ້ນຕອນ',
    statusTransferBasic:    'ໂອນຍ້າຍລະຫວ່າງຝຶກພື້ນຖານ',
    statusTransferBeforeBasic: 'ໂອນຍ້າຍກ່ອນຝຶກພື້ນຖານ',
    statusResignBeforeBasic:   'ລາອອກກ່ອນຝຶກພື້ນຖານ',
    ratio:                  'ອັດຕາສ່ວນ',
    analyticsTitle:         'ວິເຄາະຂໍ້ມູນ',
    analyticsTotalTraining: 'ໄລຍະເວລາຝຶກທັງໝົດ',
    analyticsBasicTraining: 'ໄລຍະເວລາຝຶກພື້ນຖານ',
    analyticsOpTraining:    'ໄລຍະເວລາຝຶກຂັ້ນຕອນ',
    analyticsResignDur:     'ໄລຍະເວລາກ່ອນລາອອກ',
    analyticsResignRatio:   'ອັດຕາການລາອອກ',
    analyticsAvg:           'ຄ່າສະເລ່ຍ',
    analyticsMin:           'ຕ່ຳສຸດ',
    analyticsMax:           'ສູງສຸດ',
    analyticsDays:          'ວັນ',
    analyticsEmployees:     'ຄົນ',
    analyticsResignTotal:   'ລາອອກທັງໝົດ',
    analyticsResignOp:      'ລະຫວ່າງຝຶກຂັ້ນຕອນ',
    analyticsResignBasic:   'ລະຫວ່າງຝຶກພື້ນຖານ',
    analyticsResignBeforeBasic: 'ກ່ອນຝຶກພື້ນຖານ',
    analyticsNoData:        'ບໍ່ມີຂໍ້ມູນ',
    analyticsProceedLabel:      '% ຜູ້ທີ່ໄປຕໍ່ Op Training',
    analyticsProceedHint:       'ຄົນ (ຈາກຜູ້ເລີ່ມ Basic Training)',
    analyticsAllDept:       'ທຸກພະແນກ',
    dayModeTotal:           'ທັງໝົດ',
    dayMode5d:              'ເຮັດວຽກ 5 ວັນ',
    dayMode6d:              'ເຮັດວຽກ 6 ວັນ',
    chartsTitle:            'ພາບລວມສະຖານະ',
    chartOverall:           'ສະຖານະລວມ',
    chartGradBreakdown:     'ສຳເລັດການຝຶກ',
    chartTrainingBreakdown: 'ກຳລັງຝຶກ',
    chartResignBreakdown:   'ການລາອອກ',
    statusOnTime:           'ຕົງເວລາ',
    statusOverdue:          'ເກີນກຳນົດ',
    statusTransfer:         'ໂອນຍ້າຍ',
    colEmployeesLeave:      'ວັນລາ',
    workMode5d:             'ເຮັດວຽກ 5 ວັນ',
    workMode6d:             'ເຮັດວຽກ 6 ວັນ',
    adminBtn:               'Admin',
    tooltipEdit:            'ແກ້ໄຂ',
    tooltipConfirm:         'ຢືນຢັນ',
    tooltipCancel:          'ຍົກເລີກ',
    themeToggleTitle:       'ປ່ຽນຮູບແບບ',
    trendTitle:             'ແນວໂນ້ມລາຍເດືອນ',
    trendJoined:            'ພະນັກງານໃໝ່',
    trendCompleted:         'ຝຶກສຳເລັດ',
    trendResigned:          'ລາອອກ',
    trendMonth:             'ເດືອນ',
    yearLabel:              'ປີ',
    managerLoginBtn:        'ເຂົ້າສູ່ລະບົບ',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ View Mode ໄດ້',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'ກຳລັງພັດທະນາ ກະລຸນາລໍຖ້າ...',

    // ── GICA Phase 1a ────────────────────────────────────────────────
    // Note: Lao translations are best-effort; please review with a Lao speaker.
    gicaSubPerf:            'ປະສິດທິພາບ',
    gicaSubSched:           'ຕາຕະລາງການປະເມີນ',
    gicaSubEmp:             'ລາຍຊື່ພະນັກງານ',
    gicaTotalEmp:           'ພະນັກງານທັງໝົດ',
    pass:                   'ຜ່ານ',
    fail:                   'ບໍ່ຜ່ານ',
    pending:                'ລໍຖ້າປະເມີນ',
    gicaOverallMeas:        'ຄະແນນລວມ (ການວັດແທກ)',
    gicaOverallInsp:        'ຄະແນນລວມ (ການກວດກາ)',
    gicaOverallAvg:         'ຄະແນນສະເລ່ຍລວມ',
    gicaFlipCriteria:       '↩ ເກນການໃຫ້ເກຣດ',
    gicaFlipBack:           '↩ ກັບຄືນ',
    gicaCriteria:           'ເກນ',
    gicaGradingCriteria:    'ເກນການໃຫ້ເກຣດ',
    gicaScoreMeas:          'ຄະແນນ (ການວັດແທກ)',
    gicaScoreInsp:          'ຄະແນນ (ການກວດກາ)',
    gicaPeople:             'ຄົນ',
    gicaNoData:             '— ບໍ່ມີຂໍ້ມູນ —',
    gicaNoTrend:            'ບໍ່ມີຂໍ້ມູນ trend',
    gicaEmpListTitle:       'ລາຍຊື່ພະນັກງານ',
    gicaCreateOp:           '+ ເພີ່ມພະນັກງານໃໝ່',
    gicaPrint:              '🖨 ພິມ',
    gicaAllBu:              'ທຸກ BU',
    gicaAllGrades:          'ທຸກເກຣດ',
    gicaAllDepts:           'ທຸກພະແນກ',
    gicaAllLevels:          'ທຸກລະດັບ',
    gicaSearchPh:           'ຄົ້ນຫາຊື່ / ລະຫັດ',
    gicaShowPerPage:        'ສະແດງຕໍ່ໜ້າ',
    gicaColBu:              'BU',
    gicaColEmpId:           'ລະຫັດພະນັກງານ',
    gicaColName:            'ຊື່',
    gicaColDept:            'ພະແນກ',
    gicaColLevel:           'ລະດັບ',
    gicaColMeas:            'ການວັດແທກ',
    gicaColInsp:            'ການກວດກາ',
    gicaColAttempt:         'ຄັ້ງທີ',
    gicaColLastDate:        'ວັນສອບລ່າສຸດ',
    gicaColHistory:         'ປະຫວັດ',
    gicaColNextDate:        'ວັນສອບຕໍ່ໄປ',
    gicaColDaysLeft:        'ວັນທີ່ເຫຼືອ',
    gicaColStatus:          'ສະຖານະ',
    gicaColAction:          'ຈັດການ',
    gicaTableEmpty:         'ບໍ່ພົບຂໍ້ມູນ',
    gicaEmpNameTip:         'ຄລິກເພື່ອບັນທຶກຜົນສອບ',
    gicaDeleteEmpTip:       'ລຶບພະນັກງານ',

    // ── GICA Phase 1b (best-effort Lao, please review) ────────────────
    gicaExpMatrix:          'ຕາຕະລາງເປົ້າໝາຍ',
    gicaKpiSetup:           'ຕັ້ງຄ່າ KPI',
    gicaKpiSetupTip:        'ຕັ້ງ KPI target ສຳລັບແຕ່ລະລະດັບ',
    gicaKpiAchieved:        'ຜ່ານ KPI',
    gicaKpiNotAchieved:     'ບໍ່ຜ່ານ KPI',
    gicaKpiModalDesc:       'ກຳນົດ KPI target (%) ສຳລັບແຕ່ລະລະດັບ',
    gicaClickToView:        'ຄລິກເບິ່ງລາຍຊື່',
    gicaClickToViewDept:    'ຄລິກເບິ່ງລາຍຊື່ທັງພະແນກ',
    gicaExpectedMeas:       'ການວັດແທກ — ເກຣດທີ່ຄາດຫວັງ',
    gicaExpectedInsp:       'ການກວດກາ — ເກຣດທີ່ຄາດຫວັງ',
    gicaMatrixEmpty:        'ບໍ່ມີຂໍ້ມູນ',
    gicaFreqInfoTip:        'ເກນຄວາມຖີ່ການປະເມີນ (Table_freq)',
    gicaFreqModalTitle:     'ຄວາມຖີ່ ແລະ ເກນການປະເມີນ',
    gicaFreqDeptLevel:      'ພະແນກ / ລະດັບ',
    gicaFreqRole:           'ໜ້າທີ່',
    gicaFreqFreq:           'ຄວາມຖີ່',
    gicaFreqEveryNMos:      'ທຸກ {n} ເດືອນ',
    gicaFreqEmpty:          'ບໍ່ມີຂໍ້ມູນ Table_freq',
    cancel:                 'ຍົກເລີກ',
    confirm:                'ຢືນຢັນ',
    gicaQuadTitle:          'Quadrant Analysis',
    gicaQuadPassBoth:       'ຜ່ານທັງສອງ',
    gicaQuadMFailIPass:     'ການວັດແທກ: ບໍ່ຜ່ານ / ການກວດກາ: ຜ່ານ',
    gicaQuadMPassIFail:     'ການວັດແທກ: ຜ່ານ / ການກວດກາ: ບໍ່ຜ່ານ',
    gicaQuadFailBoth:       'ບໍ່ຜ່ານທັງສອງ',
    gicaFlipViewTrend:      'ເບິ່ງ Trend',
    gicaFlipViewScore:      'ເບິ່ງຄະແນນ',

    // ── GICA Phase 2 (best-effort Lao, please review) ─────────────────
    gicaMeasResultPct:      'ຜົນການວັດແທກ (%)',
    gicaInspResultPct:      'ຜົນການກວດກາ (%)',
    gicaAssessmentDate:     'ວັນທີປະເມີນ',
    gicaSelectDate:         'ເລືອກວັນທີ',
    gicaDelete:             'ລຶບ',
    gicaResultCancelPrompt: 'ຍົກເລີກການປ້ອນຄັ້ງນີ້?',
    gicaResultSavePrompt:   'ບັນທຶກຂໍ້ມູນນີ້?',
    gicaFormFillAll:        'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບທຸກຊ່ອງ',
    gicaSaving:             'ກຳລັງບັນທຶກ...',
    gicaSaved:              'ບັນທຶກແລ້ວ',
    gicaSaveFail:           'ບັນທຶກບໍ່ສຳເລັດ',
    gicaNextDateEditTip:    'ຄລິກເພື່ອແກ້ໄຂວັນນັດສອບຄັ້ງຕໍ່ໄປ',
    gicaNextDateOverrideTip:'ຕັ້ງເອງໂດຍຜູ້ໃຊ້ (ບໍ່ແມ່ນຄ່າຄຳນວນອັດຕະໂນມັດ)',
    gicaNextDateResetTip:   'ຣີເຊັດກັບໄປໃຊ້ຄ່າຄຳນວນອັດຕະໂນມັດ',
    gicaDeleteEmpSaved:     'ລຶບພະນັກງານແລ້ວ',
    gicaErrPrefix:          'ເກີດຂໍ້ຜິດພາດ',
    gicaCreateTitle:        'ເພີ່ມພະນັກງານໃໝ່',
    gicaEmpId:              'ລະຫັດພະນັກງານ',
    gicaEmpName:            'ຊື່ພະນັກງານ',
    gicaPosition:           'ຕຳແໜ່ງ',
    gicaStartDate:          'ວັນເລີ່ມງານ',
    gicaNumericOnly:        'ໃສ່ຕົວເລກເທົ່ານັ້ນ',
    gicaDeleteConfirmPrompt:'ລຶບພະນັກງານ "{name}" ({empid}) ອອກຈາກລະບົບ GICA?\nການລຶບບໍ່ສາມາດຍ້ອນກັບໄດ້',
    gicaColResult:          'ຜົນ',
    gicaScoreHistory:       'ປະຫວັດຄະແນນ',
    gicaDeleteSelected:     'ລຶບທີ່ເລືອກ',
    gicaDeleteAllScores:    'ລຶບທັງໝົດ',
    gicaSelectAll:          'ເລືອກທັງໝົດ',
    gicaNoScores:           'ຍັງບໍ່ມີຄະແນນ',
    gicaDeletingScore:      'ກຳລັງລຶບຄະແນນ…',
    gicaScoreDeleted:       'ລຶບຄະແນນແລ້ວ',
    gicaSelectScoreFirst:   'ເລືອກຢ່າງໜ້ອຍໜຶ່ງລາຍການເພື່ອລຶບ',
    gicaDeleteScoreConfirm: 'ລຶບຄະແນນ {n} ລາຍການທີ່ເລືອກ?\nການລຶບບໍ່ສາມາດຍ້ອນກັບໄດ້',
    gicaDeleteAllScoresConfirm:'ລຶບຄະແນນທັງໝົດຂອງພະນັກງານຄົນນີ້?\nພະນັກງານຍັງຢູ່ໃນລະບົບ ແຕ່ຄະແນນຈະຖືກລຶບທັງໝົດ',
    yes:                    'ແມ່ນ',
    no:                     'ບໍ່',
    gicaUnknownErr:         'Unknown error',
    gicaDeletingEmp:        'ກຳລັງລຶບພະນັກງານ...',
    gicaDeleteFail:         'ລຶບບໍ່ສຳເລັດ',
    gicaAddResultTitle:     'ບັນທຶກຜົນປະເມີນ',

    // ── GICA Phase 3 (best-effort Lao) ────────────────────────────────
    gicaAssessmentHistory:  'ປະຫວັດການປະເມີນ',
    gicaMeasResult:         'ຜົນການວັດແທກ',
    gicaInspResult:         'ຜົນການກວດກາ',
    gicaTotalAvgScore:      'ຄະແນນສະເລ່ຍລວມ',
    gicaTotalAssessments:   'ຈຳນວນການປະເມີນທັງໝົດ',
    gicaPassRate:           'ອັດຕາການຜ່ານ',
    gicaCurrentFailStreak:  'ຈຳນວນຄັ້ງບໍ່ຜ່ານຕິດຕໍ່ກັນ',
    gicaPrev:               'ກ່ອນໜ້າ',
    gicaLast:               'ລ່າສຸດ',
    gicaDiff:               'ຕ່າງ',
    gicaAvg:                'ສະເລ່ຍ',
    gicaAvgMeas:            'ຄ່າສະເລ່ຍການວັດແທກ',
    gicaAvgInsp:            'ຄ່າສະເລ່ຍການກວດກາ',
    gicaMeasRange:          'ຊ່ວງການວັດແທກ',
    gicaInspRange:          'ຊ່ວງການກວດກາ',
    gicaFail1:              'ບໍ່ຜ່ານ 1 ຄັ້ງ',
    gicaFail2:              'ບໍ່ຜ່ານ 2 ຄັ້ງ',
    gicaFail3:              'ບໍ່ຜ່ານ 3+ ຄັ້ງ',
    gicaNotTested:          'ຍັງບໍ່ໄດ້ສອບ',
    gicaPassed:             'ສອບຜ່ານ',

    // ── GICA Phase 4 (best-effort Lao) ────────────────────────────────
    gicaSchedTimeline:      'ຕາຕະລາງເວລາການປະເມີນ',
    gicaSchedCalendar:      'ຕາຕະລາງການປະເມີນ (ມຸມມອງປະຕິທິນ)',
    gicaUpcoming:           'ການປະເມີນທີ່ຈະມາເຖິງ',
    gicaDay:                'ວັນ',
    gicaAllAttempts:        'ທຸກຈຳນວນຄັ້ງ',
    gicaAllStatus:          'ທຸກສະຖານະ',
    gicaWeek:               'ອາທິດ',
    gicaMonth:              'ເດືອນ',
    gicaAll:                'ທັງໝົດ',
    gicaRetest:             'ສອບຄືນ',
    gicaReview:             'ທົບທວນ',
    gicaLegendTotal:        'ລວມ',
    gicaLegendOnTimePass:   'ຕົງເວລາ (ຜ່ານ)',
    gicaLegendOnTimeFail:   'ຕົງເວລາ (ບໍ່ຜ່ານ)',
    gicaLegendOverdue:      'ເກີນກຳນົດ',
    gicaAssessmentRequired: 'ຕ້ອງປະເມີນ',
    gicaFailStatusStreak:   'ສະຖານະການບໍ່ຜ່ານຕໍ່ເນື່ອງ',
    gicaDueThisWeek:        'ຄົບກຳນົດອາທິດນີ້',
    gicaEarlyAssessment:    'ປະເມີນກ່ອນກຳນົດ',
    gicaOverallOnTime:      'ອັດຕາການປະເມີນຕົງເວລາ',
    gicaAssessmentStatus:   'ສະຖານະການປະເມີນ',
    gicaAttended:           'ມາສອບ',
    gicaNotYetAttended:     'ຍັງບໍ່ມາສອບ',
    gicaClickBuCohort:      'ຄລິກເບິ່ງລາຍຊື່',
    gicaMustAttendWeek:     'ຕ້ອງເຂົ້າຮັບການປະເມີນອາທິດນີ້',
    gicaFailCases:          'ບໍ່ຜ່ານ',
    gicaNoBuData:           'ບໍ່ມີຂໍ້ມູນ BU',
    gicaClose:              'ປິດ',
    gicaCalToday:           'ມື້ນີ້',
    gicaCalFilters:         'ຕົວກັ່ນຕອງ',
    gicaCalStatus:          'ສະຖານະ',
    gicaCalType:            'ປະເພດ',
    gicaCalTypeInitial:     'ປະເມີນຄັ້ງທຳອິດ',
    gicaCalTypeRetest:      'ປະເມີນຄືນ',
    gicaCalTypeReview:      'ທົບທວນ',
    gicaCalTypeMissed:      'ຂາດສອບ (roll +7 ວັນ)',
    gicaCalOverdue:         'ເກີນກຳນົດ (ຍັງບໍ່ມາສອບ)',
    gicaCalWeekPrefix:      'ອາທິດ',
    gicaWeekMon:            'ຈັນ',
    gicaWeekTue:            'ອັງຄານ',
    gicaWeekWed:            'ພຸດ',
    gicaWeekThu:            'ພະຫັດ',
    gicaWeekFri:            'ສຸກ',
    gicaWeekSat:            'ເສົາ',
    gicaWeekSun:            'ອາທິດ',
    gicaEmpListForAssessment:         'ລາຍຊື່ພະນັກງານສຳລັບການປະເມີນ GICA',
    gicaEmpListForAssessmentSchedule: 'ລາຍຊື່ພະນັກງານສຳລັບຕາຕະລາງການປະເມີນ GICA',
    gicaAssessmentDateLbl:  'ວັນທີປະເມີນ',
    gicaTotalWord:          'ລວມ',
    gicaEmpsWord:           'ຄົນ',
    gicaReportDate:         'ວັນທີລາຍງານ',
    gicaParticipants:       'ຜູ້ເຂົ້າປະເມີນ',
    gicaPrintPdf:           '🖨 ພິມ PDF',
  },
  vi: {
    appTitle:               'GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'Đăng nhập bằng tài khoản Microsoft',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'Chọn BU',
    overallDashboard:       'Tổng quan',
    allYears:               'Tất cả năm',
    department:             'BU',
    adminTitle:             'Cài đặt Admin',
    holidaySection:         'Cấu hình ngày nghỉ đặc biệt',
    addHoliday:             'Thêm ngày nghỉ',
    holidayHint:            'Hệ thống sẽ không tính Chủ nhật và ngày nghỉ đặc biệt khi tính Remaining Days.',
    forceRefreshSection:    'Force Refresh (Dùng khi khẩn cấp)',
    forceRefreshBtn:        'Force Refresh',
    forceRefreshHint:       'Dùng khi dữ liệu được sửa trực tiếp trong Excel và cần cập nhật ngay. Hệ thống thường tự động làm mới trong vòng 5 phút.',
    forceRefreshWaiting:    'Chờ',
    forceRefreshSuccess:    '✓ Force Refresh đã hoàn tất',
    backHome:               '← Về trang chủ',
    refresh:                'Làm mới',
    total:                  'Tổng',
    congratulations:        'Hoàn thành đào tạo',
    training:               'Đang đào tạo',
    resignation:            'Nghỉ việc',
    transferred:            'Chuyển bộ phận',
    register:               'Đăng ký',
    newRecord:              'Tạo bản ghi mới',
    employeeId:             'Mã nhân viên',
    employeeName:           'Tên nhân viên',
    empType:                'Loại',
    grade:                  'Cấp bậc',
    selectPlaceholder:      '-- Chọn --',
    saveNew:                'Lưu nhân viên mới',
    viewEdit:               'Xem / Chỉnh sửa',
    search:                 'Tìm kiếm',
    remaining:              'Còn lại',
    workingDays:            'ngày làm việc',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'Ngày nghỉ việc',
    transfersDate:          'Ngày chuyển',
    graduateEff:            'Graduate Eff',
    comment:                'Ghi chú',
    saveUpdate:             'Lưu cập nhật',
    close:                  'Đóng',
    riskList:               'Dữ liệu nhân viên',
    filterAll:              'Tất cả',
    colEmployeeId:          'Mã nhân viên',
    colEmployeeName:        'Tên nhân viên',
    colGrade:               'Cấp bậc',
    colCsaStart:            'Ngày bắt đầu',
    colDueDate:             'Ngày hết hạn',
    colBasicTraining:       'Đào tạo cơ bản',
    colOperation:           'Đào tạo vận hành',
    colBasicStart:          'Bắt đầu cơ bản',
    colBasicEnd:            'Kết thúc cơ bản',
    colOpStart:             'Bắt đầu vận hành',
    colOpEnd:               'Kết thúc vận hành',
    colResignDate:          'Ngày nghỉ',
    colTransferDate:        'Ngày chuyển',
    colGradEff:             'Hiệu suất',
    colActualStatus:        'Trạng thái thực',
    dashboard:              'Bảng điều khiển',
    dueDate:                'Ngày hết hạn',
    employeeIdPlaceholder:  'Mã nhân viên',
    signedIn:               'Đã đăng nhập',
    logout:                 'Đăng xuất',
    loading:                'Đang tải...',
    loadedCount:            'Đã tải {n} nhân viên',
    created:                'Tạo nhân viên mới thành công',
    updated:                'Cập nhật thông tin thành công',
    loaded:                 'Đã tải dữ liệu nhân viên',
    pleaseEnterEmployeeId:  'Vui lòng nhập mã nhân viên',
    statusCompleted:        'Hoàn thành',
    statusCompletedOverdue: 'Hoàn thành (Trễ hạn)',
    statusUnderOperation:   'Đang đào tạo vận hành',
    statusUnderBasic:       'Đang đào tạo cơ bản',
    statusResignOperation:  'Nghỉ việc (Đào tạo vận hành)',
    statusResignBasic:      'Nghỉ việc (Đào tạo cơ bản)',
    statusTransferOperation:'Chuyển bộ phận (Vận hành)',
    statusTransferBasic:    'Chuyển bộ phận (Cơ bản)',
    statusTransferBeforeBasic: 'Chuyển bộ phận (Trước cơ bản)',
    statusResignBeforeBasic:   'Nghỉ việc (Trước cơ bản)',
    ratio:                  'Tỷ lệ',
    analyticsTitle:         'Phân tích dữ liệu',
    analyticsTotalTraining: 'Thời gian đào tạo tổng',
    analyticsBasicTraining: 'Thời gian đào tạo cơ bản',
    analyticsOpTraining:    'Thời gian đào tạo vận hành',
    analyticsResignDur:     'Thời gian trước khi nghỉ việc',
    analyticsResignRatio:   'Phân tích nghỉ việc',
    analyticsAvg:           'Trung bình',
    analyticsMin:           'Min',
    analyticsMax:           'Max',
    analyticsDays:          'ngày',
    analyticsEmployees:     'nhân viên',
    analyticsResignTotal:   'Tổng nghỉ việc',
    analyticsResignOp:      'Trong khi đào tạo vận hành',
    analyticsResignBasic:   'Trong khi đào tạo cơ bản',
    analyticsResignBeforeBasic: 'Trước đào tạo cơ bản',
    analyticsNoData:        'Không có dữ liệu',
    analyticsProceedLabel:      '% Tiếp tục Op Training',
    analyticsProceedHint:       'người (trong số bắt đầu Basic)',
    analyticsAllDept:       'Tất cả bộ phận',
    dayModeTotal:           'Tổng',
    dayMode5d:              'Tuần 5 ngày',
    dayMode6d:              'Tuần 6 ngày',
    chartsTitle:            'Tổng quan trạng thái',
    chartOverall:           'Trạng thái tổng',
    chartGradBreakdown:     'Hoàn thành',
    chartTrainingBreakdown: 'Đang đào tạo',
    chartResignBreakdown:   'Nghỉ việc',
    statusOnTime:           'Đúng hạn',
    statusOverdue:          'Trễ hạn',
    statusTransfer:         'Chuyển',
    colEmployeesLeave:      'Ngày nghỉ',
    workMode5d:             'Tuần 5 ngày',
    workMode6d:             'Tuần 6 ngày',
    adminBtn:               'Admin',
    tooltipEdit:            'Chỉnh sửa',
    tooltipConfirm:         'Xác nhận',
    tooltipCancel:          'Hủy',
    themeToggleTitle:       'Đổi giao diện',
    trendTitle:             'Xu hướng theo tháng',
    trendJoined:            'Nhân viên mới',
    trendCompleted:         'Hoàn thành',
    trendResigned:          'Nghỉ việc',
    trendMonth:             'Tháng',
    yearLabel:              'Năm',
    managerLoginBtn:        'Đăng nhập',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'Không thể đăng nhập View Mode',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'Đang phát triển, vui lòng chờ...',

    // ── GICA Phase 1a ────────────────────────────────────────────────
    // Note: Vietnamese translations are best-effort; please review with a Vietnamese speaker.
    gicaSubPerf:            'Hiệu suất',
    gicaSubSched:           'Lịch đánh giá',
    gicaSubEmp:             'Danh sách nhân viên',
    gicaTotalEmp:           'Tổng số nhân viên',
    pass:                   'Đạt',
    fail:                   'Không đạt',
    pending:                'Chờ đánh giá',
    gicaOverallMeas:        'Điểm tổng (Đo lường)',
    gicaOverallInsp:        'Điểm tổng (Kiểm tra)',
    gicaOverallAvg:         'Điểm trung bình tổng',
    gicaFlipCriteria:       '↩ Tiêu chí chấm điểm',
    gicaFlipBack:           '↩ Quay lại',
    gicaCriteria:           'Tiêu chí',
    gicaGradingCriteria:    'Tiêu chí chấm điểm',
    gicaScoreMeas:          'Điểm (Đo lường)',
    gicaScoreInsp:          'Điểm (Kiểm tra)',
    gicaPeople:             'Người',
    gicaNoData:             '— không có dữ liệu —',
    gicaNoTrend:            'Không có dữ liệu trend',
    gicaEmpListTitle:       'Danh sách nhân viên',
    gicaCreateOp:           '+ Thêm nhân viên mới',
    gicaPrint:              '🖨 In',
    gicaAllBu:              'Tất cả BU',
    gicaAllGrades:          'Tất cả cấp bậc',
    gicaAllDepts:           'Tất cả phòng ban',
    gicaAllLevels:          'Tất cả trình độ',
    gicaSearchPh:           'Tìm theo tên / mã',
    gicaShowPerPage:        'Hiển thị mỗi trang',
    gicaColBu:              'BU',
    gicaColEmpId:           'Mã NV',
    gicaColName:            'Tên',
    gicaColDept:            'Phòng ban',
    gicaColLevel:           'Trình độ',
    gicaColMeas:            'Đo lường',
    gicaColInsp:            'Kiểm tra',
    gicaColAttempt:         'Lần',
    gicaColLastDate:        'Ngày sát hạch gần nhất',
    gicaColHistory:         'Lịch sử',
    gicaColNextDate:        'Ngày sát hạch tiếp',
    gicaColDaysLeft:        'Ngày còn lại',
    gicaColStatus:          'Trạng thái',
    gicaColAction:          'Thao tác',
    gicaTableEmpty:         'Không tìm thấy dữ liệu',
    gicaEmpNameTip:         'Nhấp để ghi kết quả đánh giá',
    gicaDeleteEmpTip:       'Xóa nhân viên',

    // ── GICA Phase 1b (best-effort Vietnamese, please review) ─────────
    gicaExpMatrix:          'Ma trận kỳ vọng',
    gicaKpiSetup:           'Thiết lập KPI',
    gicaKpiSetupTip:        'Đặt mục tiêu KPI cho từng cấp',
    gicaKpiAchieved:        'Đạt KPI',
    gicaKpiNotAchieved:     'Không đạt KPI',
    gicaKpiModalDesc:       'Định nghĩa mục tiêu KPI (%) cho từng cấp',
    gicaClickToView:        'Nhấp để xem danh sách',
    gicaClickToViewDept:    'Nhấp để xem danh sách cả phòng ban',
    gicaExpectedMeas:       'Đo lường — Cấp bậc kỳ vọng',
    gicaExpectedInsp:       'Kiểm tra — Cấp bậc kỳ vọng',
    gicaMatrixEmpty:        'Không có dữ liệu',
    gicaFreqInfoTip:        'Tiêu chí tần suất đánh giá (Table_freq)',
    gicaFreqModalTitle:     'Tần suất & Kỳ vọng đánh giá',
    gicaFreqDeptLevel:      'Phòng ban / Cấp',
    gicaFreqRole:           'Vai trò',
    gicaFreqFreq:           'Tần suất',
    gicaFreqEveryNMos:      'Mỗi {n} tháng',
    gicaFreqEmpty:          'Không có dữ liệu Table_freq',
    cancel:                 'Hủy',
    confirm:                'Xác nhận',
    gicaQuadTitle:          'Quadrant Analysis',
    gicaQuadPassBoth:       'Đạt cả hai',
    gicaQuadMFailIPass:     'Đo: Không đạt / Kiểm: Đạt',
    gicaQuadMPassIFail:     'Đo: Đạt / Kiểm: Không đạt',
    gicaQuadFailBoth:       'Không đạt cả hai',
    gicaFlipViewTrend:      'Xem Trend',
    gicaFlipViewScore:      'Xem điểm',

    // ── GICA Phase 2 (best-effort Vietnamese, please review) ──────────
    gicaMeasResultPct:      'Kết quả Đo lường (%)',
    gicaInspResultPct:      'Kết quả Kiểm tra (%)',
    gicaAssessmentDate:     'Ngày đánh giá',
    gicaSelectDate:         'Chọn ngày',
    gicaDelete:             'Xóa',
    gicaResultCancelPrompt: 'Hủy nhập lần này?',
    gicaResultSavePrompt:   'Lưu bản ghi này?',
    gicaFormFillAll:        'Vui lòng điền đầy đủ các trường',
    gicaSaving:             'Đang lưu...',
    gicaSaved:              'Đã lưu',
    gicaSaveFail:           'Lưu thất bại',
    gicaNextDateEditTip:    'Nhấn để chỉnh ngày đánh giá tiếp theo',
    gicaNextDateOverrideTip:'Đặt thủ công (không phải tự tính)',
    gicaNextDateResetTip:   'Đặt lại về ngày tự tính',
    gicaDeleteEmpSaved:     'Đã xóa nhân viên',
    gicaErrPrefix:          'Lỗi',
    gicaCreateTitle:        'Thêm nhân viên mới',
    gicaEmpId:              'Mã nhân viên',
    gicaEmpName:            'Tên nhân viên',
    gicaPosition:           'Vị trí',
    gicaStartDate:          'Ngày bắt đầu',
    gicaNumericOnly:        'Chỉ số',
    gicaDeleteConfirmPrompt:'Xóa nhân viên "{name}" ({empid}) khỏi GICA?\nThao tác này không thể hoàn tác',
    gicaColResult:          'Kết quả',
    gicaScoreHistory:       'Lịch sử điểm',
    gicaDeleteSelected:     'Xóa mục đã chọn',
    gicaDeleteAllScores:    'Xóa tất cả',
    gicaSelectAll:          'Chọn tất cả',
    gicaNoScores:           'Chưa có điểm',
    gicaDeletingScore:      'Đang xóa điểm…',
    gicaScoreDeleted:       'Đã xóa điểm',
    gicaSelectScoreFirst:   'Chọn ít nhất một mục để xóa',
    gicaDeleteScoreConfirm: 'Xóa {n} điểm đã chọn?\nThao tác này không thể hoàn tác',
    gicaDeleteAllScoresConfirm:'Xóa TẤT CẢ điểm của nhân viên này?\nNhân viên vẫn ở trong hệ thống, nhưng mọi điểm sẽ bị xóa',
    yes:                    'Có',
    no:                     'Không',
    gicaUnknownErr:         'Unknown error',
    gicaDeletingEmp:        'Đang xóa nhân viên...',
    gicaDeleteFail:         'Xóa thất bại',
    gicaAddResultTitle:     'Ghi kết quả đánh giá',

    // ── GICA Phase 3 (best-effort Vietnamese) ─────────────────────────
    gicaAssessmentHistory:  'Lịch sử đánh giá',
    gicaMeasResult:         'Kết quả đo lường',
    gicaInspResult:         'Kết quả kiểm tra',
    gicaTotalAvgScore:      'Điểm trung bình tổng',
    gicaTotalAssessments:   'Tổng số lần đánh giá',
    gicaPassRate:           'Tỷ lệ đạt',
    gicaCurrentFailStreak:  'Số lần không đạt liên tiếp',
    gicaPrev:               'Trước',
    gicaLast:               'Gần nhất',
    gicaDiff:               'Chênh',
    gicaAvg:                'TB',
    gicaAvgMeas:            'TB Đo lường',
    gicaAvgInsp:            'TB Kiểm tra',
    gicaMeasRange:          'Khoảng Đo lường',
    gicaInspRange:          'Khoảng Kiểm tra',
    gicaFail1:              'Không đạt 1',
    gicaFail2:              'Không đạt 2',
    gicaFail3:              'Không đạt 3+',
    gicaNotTested:          'Chưa kiểm tra',
    gicaPassed:             'Đạt',

    // ── GICA Phase 4 (best-effort Vietnamese) ─────────────────────────
    gicaSchedTimeline:      'Lịch trình đánh giá',
    gicaSchedCalendar:      'Lịch đánh giá (Dạng lịch)',
    gicaUpcoming:           'Đánh giá sắp tới',
    gicaDay:                'Ngày',
    gicaAllAttempts:        'Tất cả lần thi',
    gicaAllStatus:          'Tất cả trạng thái',
    gicaWeek:               'Tuần',
    gicaMonth:              'Tháng',
    gicaAll:                'Tất cả',
    gicaRetest:             'Đánh giá lại',
    gicaReview:             'Xem xét',
    gicaLegendTotal:        'Tổng',
    gicaLegendOnTimePass:   'Đúng hạn (Đạt)',
    gicaLegendOnTimeFail:   'Đúng hạn (Không đạt)',
    gicaLegendOverdue:      'Quá hạn',
    gicaAssessmentRequired: 'Cần đánh giá',
    gicaFailStatusStreak:   'Trạng thái không đạt liên tiếp',
    gicaDueThisWeek:        'Đến hạn tuần này',
    gicaEarlyAssessment:    'Đánh giá sớm',
    gicaOverallOnTime:      'Tỷ lệ đúng hạn tổng',
    gicaAssessmentStatus:   'Trạng thái đánh giá',
    gicaAttended:           'Đã tham gia',
    gicaNotYetAttended:     'Chưa tham gia',
    gicaClickBuCohort:      'Nhấp để xem danh sách',
    gicaMustAttendWeek:     'Phải tham gia đánh giá tuần này',
    gicaFailCases:          'Không đạt',
    gicaNoBuData:           'Không có dữ liệu BU',
    gicaClose:              'Đóng',
    gicaCalToday:           'Hôm nay',
    gicaCalFilters:         'Bộ lọc',
    gicaCalStatus:          'Trạng thái',
    gicaCalType:            'Loại',
    gicaCalTypeInitial:     'Đánh giá lần đầu',
    gicaCalTypeRetest:      'Đánh giá lại',
    gicaCalTypeReview:      'Xem xét',
    gicaCalTypeMissed:      'Vắng mặt (dời +7 ngày)',
    gicaCalOverdue:         'Quá hạn (Chưa sát hạch)',
    gicaCalWeekPrefix:      'TUẦN',
    gicaWeekMon:            'Thứ Hai',
    gicaWeekTue:            'Thứ Ba',
    gicaWeekWed:            'Thứ Tư',
    gicaWeekThu:            'Thứ Năm',
    gicaWeekFri:            'Thứ Sáu',
    gicaWeekSat:            'Thứ Bảy',
    gicaWeekSun:            'Chủ Nhật',
    gicaEmpListForAssessment:         'Danh sách nhân viên cho đánh giá GICA',
    gicaEmpListForAssessmentSchedule: 'Danh sách nhân viên cho lịch đánh giá GICA',
    gicaAssessmentDateLbl:  'Ngày đánh giá',
    gicaTotalWord:          'Tổng',
    gicaEmpsWord:           'nhân viên',
    gicaReportDate:         'Ngày báo cáo',
    gicaParticipants:       'Người tham gia',
    gicaPrintPdf:           '🖨 In PDF',
  },
};

// ===== STATE =====
let _switchMainTab    = null;   // set by initTabBar — used by selectDepartmentKey to jump to the New Operator tab
let currentDepartment = null;
let currentEmployeeId = null;
let currentFilter     = '';
let currentYearFilter = '';
const _newOpTableState = { page: 1, pageSize: 10 };
const _trendCharts = {}; // Chart.js instances for Monthly Trend cards, keyed by scope ('home', or a dept key)
const _deptAnalyticsState = {}; // per-department analytics state: { [deptKey]: { trendVisibility } }
const DEPT_DAY_MODE = { EA: '5d' }; // EA runs a 5-day work week; every other BU runs 6-day
let departments       = [];
let holidays          = JSON.parse(localStorage.getItem('specialHolidays') || '[]');
let lastEmployees     = [];
let allDeptData       = {};   // home dashboard cache: { deptKey: [employees] }
let currentAnalyticsDept = '';  // '' = all departments
let _homeDashYearDefaulted = false; // ensures "default to latest year" only fires on first load, not on every Refresh
let currentDayMode    = 'total'; // 'total' | '5d' | '6d'  (Data Analytics)
let trendVisibility   = { joined: true, inTraining: true, completed: true, resigned: true };  // toggle state for trend lines

// Month abbreviations per language (used for trend chart x-axis)
const MONTH_ABBR = {
  th: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  lo: ['ມ.ກ.', 'ກ.ພ.', 'ມີ.ນ.', 'ມ.ສ.', 'ພ.ພ.', 'ມິ.ຖ.', 'ກ.ລ.', 'ສ.ຫ.', 'ກ.ຍ.', 'ຕ.ລ.', 'ພ.ຈ.', 'ທ.ວ.'],
  vi: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
};
function monthAbbr(idx) {
  return (MONTH_ABBR[currentLang] || MONTH_ABBR.en)[idx];
}
let currentUser       = null;
let currentRole       = 'user';  // 'user' | 'manager' (view-only)
let _currentUserBu    = null;    // null = no scope (all BUs); 'G1'..'TRM' = BU-scoped user
let lastCalc          = null;
let currentLang       = localStorage.getItem('lang')  || 'th';
let currentTheme      = localStorage.getItem('theme') || 'light';
let currentNewOpType  = null; // null=Overall | 'Sewing' | 'QC/QA' | 'Technic' — active New Operator subtab

const $ = (id) => document.getElementById(id);

// null = Overall (show all types). Blank/missing Type counts as 'Sewing' (legacy rows).
function _matchesNewOpType(emp) {
  if (currentNewOpType === null) return true;
  return ((emp['Type'] || '').trim() || 'Sewing') === currentNewOpType;
}
function _filterByNewOpType(employees) {
  return (employees || []).filter(_matchesNewOpType);
}

// ===== TRANSLATION HELPERS =====
function t(key, vars = {}) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  let val = lang[key] ?? TRANSLATIONS.en[key] ?? key;
  if (typeof val === 'string' && vars) {
    for (const k of Object.keys(vars)) {
      val = val.split(`{${k}}`).join(String(vars[k]));
    }
  }
  return String(val);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.documentElement.lang = currentLang;
}

// ===== STATUS HELPERS =====
const STATUS_KEY_MAP = {
  'completed':              'statusCompleted',
  'completed-overdue':      'statusCompletedOverdue',
  'under-operation':        'statusUnderOperation',
  'under-basic':            'statusUnderBasic',
  'resign-operation':       'statusResignOperation',
  'resign-basic':           'statusResignBasic',
  'resign-before-basic':    'statusResignBeforeBasic',
  'transfer-operation':     'statusTransferOperation',
  'transfer-basic':         'statusTransferBasic',
  'transfer-before-basic':  'statusTransferBeforeBasic',
};

function statusBadgeClass(key) {
  if (key === 'completed')                                   return 'ok';
  if (key === 'completed-overdue')                           return 'warn';
  if (key === 'under-operation' || key === 'under-basic')    return 'warn';
  if (key === 'resign-operation' || key === 'resign-basic'
      || key === 'resign-before-basic')                      return 'danger';
  if (key === 'transfer-operation' || key === 'transfer-basic'
      || key === 'transfer-before-basic')                    return 'muted';
  return 'muted';
}

// ===== THEME =====
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  $('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
  if (typeof Chart !== 'undefined') {
    Chart.defaults.color = theme === 'dark' ? '#94a3b8' : '#6b7280';
    ['gica-scheduleChart', 'gica-scheduleChartRight'].forEach(id => {
      if (_gicaCharts[id]) _gicaCharts[id].update();
    });
    Object.values(_trendCharts).forEach(ch => { try { ch.update(); } catch (_) {} });
  }
}

function initTheme() {
  applyTheme(currentTheme);
  $('themeToggle').onclick = () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ===== LANGUAGE =====
function initLang() {
  const sel = $('langSelect');
  sel.value = currentLang;
  applyTranslations();

  sel.onchange = () => {
    currentLang = sel.value;
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    if (currentDepartment) {
      const dep = departments.find(d => d.key === currentDepartment);
      if (dep) $('dashboardTitle').textContent = `${dep.label} ${t('dashboard')}`;
    }
    if (lastEmployees.length) renderEmployeeTable(lastEmployees);
    if (currentUser) {
      $('authBox').innerHTML = `${t('signedIn')} · <a href="/logout">${t('logout')}</a>`;
    }
    // Role badge text is fixed per door/mode (see _roleBadgeText) — not re-set
    // here since it doesn't change with language. The brand title/subtitle ARE
    // [data-i18n] elements though, so applyTranslations() above just reset them
    // back to the generic dictionary text — re-apply the role-specific override.
    _applyRoleBrandTitle(currentRole);
    if (lastCalc) {
      $('dueDateText').textContent = `${t('dueDate')}: ${lastCalc.due_date || '-'}`;
    }
    renderHomeDashboard($('homeDashYearFilter').value);
    // sync tab button labels to new language
    const tabBar = document.getElementById('mainTabBar');
    if (tabBar) {
      tabBar.querySelectorAll('.tab-btn[data-i18n]').forEach(btn => {
        btn.textContent = t(btn.dataset.i18n);
      });
    }
    // Dynamic GICA content (KPI cards / BU flip / Employee table / Schedule /
    // Calendar) is built by template strings, not [data-i18n] nodes —
    // applyTranslations() can't reach it. Re-render every GICA surface that
    // has already been rendered at least once so the new language shows
    // immediately without needing a refresh or tab switch.
    if (_gicaData && _gicaData.employees) {
      try { renderGicaSummary();  } catch (_) {}
      try { renderGicaTable();    } catch (_) {}
      try { if (typeof _gicaScheduleRendered !== 'undefined' && _gicaScheduleRendered) renderGicaSchedule(); } catch (_) {}
    }
  };
}

// ===== ADMIN FAB / MODAL =====
function initAdmin() {
  $('adminBtn').onclick = () => {
    $('adminModal').classList.remove('hidden');
    if (currentRole === 'admin') _syncForceRefreshStatus();
  };
  $('closeAdminBtn').onclick = closeAdmin;
  $('adminModal').onclick = (e) => { if (e.target === $('adminModal')) closeAdmin(); };
  $('forceRefreshBtn').onclick = _triggerForceRefresh;
}
function closeAdmin() { $('adminModal').classList.add('hidden'); }

// ===== FORCE REFRESH (Admin Sign In only — emergency cache bust for all 4 modules) =====
let _forceRefreshTimer = null;

function _setForceRefreshCountdown(seconds) {
  const btn = $('forceRefreshBtn');
  const label = $('forceRefreshCountdown');
  if (_forceRefreshTimer) { clearInterval(_forceRefreshTimer); _forceRefreshTimer = null; }
  let remaining = Math.max(0, Math.round(seconds));
  const tick = () => {
    if (remaining <= 0) {
      if (_forceRefreshTimer) { clearInterval(_forceRefreshTimer); _forceRefreshTimer = null; }
      btn.disabled = false;
      label.textContent = '';
      return;
    }
    btn.disabled = true;
    const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
    const ss = String(remaining % 60).padStart(2, '0');
    label.textContent = `${t('forceRefreshWaiting')} ${mm}:${ss}`;
    remaining--;
  };
  tick();
  if (remaining > 0) _forceRefreshTimer = setInterval(tick, 1000);
}

let _forceRefreshMsgTimer = null;

// showToast() pops a small fixed-position banner (bottom-center, single
// green style — same as GICA's "saving..." notification) instead of writing
// into a persistent inline box, so it doesn't eat layout space.
function showToast(text) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('toast--show');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('toast--show'), 2500);
}

// Admin Settings keeps its own inline feedback line (rather than the global
// toast) so the result is anchored right next to the button that was clicked.
function _showForceRefreshFeedback(text, isError = false) {
  const el = $('forceRefreshMsg');
  if (_forceRefreshMsgTimer) { clearTimeout(_forceRefreshMsgTimer); _forceRefreshMsgTimer = null; }
  el.textContent = text;
  el.classList.remove('hidden', 'inline-feedback--ok', 'inline-feedback--error');
  el.classList.add(isError ? 'inline-feedback--error' : 'inline-feedback--ok');
  _forceRefreshMsgTimer = setTimeout(() => el.classList.add('hidden'), 5000);
}

async function _syncForceRefreshStatus() {
  try {
    const data = await api('/api/admin/force-refresh-status');
    _setForceRefreshCountdown(data.remainingSeconds || 0);
  } catch (err) { /* non-critical — leave button as-is on failure */ }
}

async function _triggerForceRefresh() {
  try {
    const data = await api('/api/admin/force-refresh', { method: 'POST' });
    _setForceRefreshCountdown(data.remainingSeconds || 0);
    _showForceRefreshFeedback(t('forceRefreshSuccess'));
  } catch (err) {
    if (err.data && err.data.remainingSeconds != null) {
      _setForceRefreshCountdown(err.data.remainingSeconds);
    }
    _showForceRefreshFeedback(err.message || 'Force Refresh failed', true);
  }
}

// ===== REGISTER MODAL =====
function initRegisterModal() {
  $('registerBtn').onclick    = () => $('registerModal').classList.remove('hidden');
  $('closeRegisterBtn').onclick = closeRegisterModal;
  $('registerModal').onclick  = (e) => { if (e.target === $('registerModal')) closeRegisterModal(); };
  $('createBtn').onclick      = createNewEmployee;
}
function closeRegisterModal() { $('registerModal').classList.add('hidden'); }

// ===== EDIT MODAL (used for search results) =====
function initEditModal() {
  $('closeEditModalBtn').onclick = closeEditModal;
  $('closeEditBtn').onclick      = closeEditModal;
  $('editModal').onclick = (e) => { if (e.target === $('editModal')) closeEditModal(); };
  $('editForm').onsubmit = saveEditForm;
}
function closeEditModal() { $('editModal').classList.add('hidden'); }

// ===== UTILITY =====
function show(el) { el.classList.remove('hidden'); }
function hide(el) { el.classList.add('hidden'); }

function showMessage(text) {
  showToast(text);
}

function getHolidayQuery() {
  return holidays.map(h => `holiday=${encodeURIComponent(h)}`).join('&');
}

// Supabase JWT — stored in localStorage, injected into every write request.
// Read requests work without it (anonymous read is permitted by the backend).
let _sbJwt = localStorage.getItem('sb_jwt') || '';

function _saveJwt(token) {
  _sbJwt = token || '';
  if (_sbJwt) localStorage.setItem('sb_jwt', _sbJwt);
  else localStorage.removeItem('sb_jwt');
}

async function api(path, options = {}) {
  const authHeader = _sbJwt ? { 'Authorization': `Bearer ${_sbJwt}` } : {};
  const res = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...authHeader, ...(options.headers || {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Request failed: ${res.status}`);
    err.status = res.status;
    err.loginRequired = !!data.login_required || res.status === 401;
    err.data = data;
    throw err;
  }
  return data;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeDateForInput(value) {
  if (value === null || value === undefined || value === '' || value === 0) return '';
  if (typeof value === 'number') {
    if (value <= 0) return '';
    const d = new Date(Date.UTC(1899, 11, 30) + Math.round(value) * 86400000);
    return isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
  }
  const str = String(value).trim();
  if (!str) return '';
  const d = new Date(str);
  if (isNaN(d.getTime())) return str.slice(0, 10);
  return d.toISOString().slice(0, 10);
}

// ===== HOLIDAYS =====
function renderHolidays() {
  const list = $('holidayList');
  list.innerHTML = '';
  holidays.forEach(date => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${escapeHtml(date)} <button type="button">×</button>`;
    chip.querySelector('button').onclick = () => {
      holidays = holidays.filter(h => h !== date);
      localStorage.setItem('specialHolidays', JSON.stringify(holidays));
      renderHolidays();
      if (currentDepartment) loadDashboard();
    };
    list.appendChild(chip);
  });
}

// ===== PAGES =====
function setPage(page) {
  hide($('homePage'));
  hide($('dashboardPage'));
  if (page === 'home')      show($('homePage'));
  if (page === 'dashboard') show($('dashboardPage'));
}

// ===== DEPARTMENT GRID =====
function selectDepartmentKey(key, label) {
  currentDepartment = key;
  currentFilter     = '';
  currentYearFilter = '';
  if ($('statusFilter'))  $('statusFilter').value  = '';
  if ($('empYearFilter')) $('empYearFilter').value = '';
  $('dashboardTitle').textContent = `${label} ${t('dashboard')}`;
  if (activeMainTab !== 'newOperator' && _switchMainTab) _switchMainTab('newOperator');
  setPage('dashboard');
  loadDashboard(true);
}

function renderDepartmentButtons() {
  const grid = $('departmentGrid');
  grid.innerHTML = '';
  departments.forEach(dep => {
    const btn = document.createElement('button');
    btn.className = 'department-btn';
    btn.textContent = dep.label;
    btn.onclick = () => selectDepartmentKey(dep.key, dep.label);
    grid.appendChild(btn);
  });
}

// ===== COMPUTE ACTUAL STATUS =====
// Rule priority (earliest match wins):
//   1) Resign Date present  → resigned (by furthest phase reached)
//   2) Transfers Date present → transferred (by furthest phase reached)
//   3) Operation End present → completed (on-time vs overdue by Excel Due date)
//   4) Active training (Op Start → under-operation, Basic Start → under-basic)
//   5) Fallback → under-basic
// Per user spec: Resign and Transfer never appear together on the same record.
function computeActualStatus(emp, calc) {
  function hasData(v) {
    return v !== null && v !== undefined && v !== '' && v !== 0;
  }
  const csaStart   = emp['CSA Start Date'];
  const basicStart = emp['Basic Start'];
  const opStart    = emp['Operation Start'];
  const opEnd      = emp['Operation End'];
  const resignDate = emp['Resign Date'];
  const transferDate = emp['Transfers Date'];
  // Use the SAME Due date that the table displays (raw from Excel),
  // normalized to YYYY-MM-DD so string-compare is reliable.
  const dueDate = normalizeDateForInput(emp['Due date']) || '';

  // 1) Resign takes priority over everything else
  if (hasData(resignDate)) {
    if (hasData(opStart))         return 'resign-operation';
    if (hasData(basicStart))      return 'resign-basic';
    if (hasData(csaStart))        return 'resign-before-basic';
    return 'resign-before-basic';
  }

  // 2) Transfer next
  if (hasData(transferDate)) {
    if (hasData(opStart))         return 'transfer-operation';
    if (hasData(basicStart))      return 'transfer-basic';
    if (hasData(csaStart))        return 'transfer-before-basic';
    return 'transfer-before-basic';
  }

  // 3) Operation End → completed (on-time vs overdue)
  if (hasData(opEnd)) {
    const opEndNorm = normalizeDateForInput(opEnd);
    if (dueDate && opEndNorm && opEndNorm > dueDate) return 'completed-overdue';
    return 'completed';
  }

  // 4) Active training
  if (hasData(opStart))    return 'under-operation';
  if (hasData(basicStart)) return 'under-basic';

  // 5) Fallback
  return 'under-basic';
}

// ===== EMPLOYEE TABLE — VIEW ROW =====
function fmtEff(val) {
  if (val === '' || val === null || val === undefined) return '';
  const n = parseFloat(val);
  if (isNaN(n)) return '';
  // stored as decimal ratio (e.g. 1.02 = 102%) — always multiply by 100
  const pct = n * 100;
  return pct % 1 === 0 ? pct + '%' : pct.toFixed(1) + '%';
}

function buildRowHTML(emp, calc, actualKey, rowNum) {
  const esc = escapeHtml;
  const statusLabel = t(STATUS_KEY_MAP[actualKey] || actualKey);
  const empId = esc(String(emp['Employee ID'] || ''));
  const leave = parseInt(emp['Employees Leave'], 10) || 0;

  // Short date formatter — "15 Jan 25"
  const fmtD = (v) => {
    const iso = normalizeDateForInput(v);
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
  };

  // Type pill
  const type = emp['Type'] || '';
  const typeKey = type === 'QC/QA' ? 'qcqa' : (type.toLowerCase() || 'sewing');
  const typeLabel = esc(type || 'Sewing');
  const typePill = `<span class="type-pill type-pill--${typeKey}"><span class="type-pill__dot"></span>${typeLabel}</span>`;

  // Grade chip
  const grade = emp['Grade'] || '';
  const gradeHtml = grade
    ? `<span class="grade-chip grade-chip--${esc(grade.toLowerCase())}">${esc(grade)}</span>`
    : `<span class="emp-date-empty">—</span>`;

  // Dates
  const csaStart = fmtD(emp['CSA Start Date']);
  const dueDate  = fmtD(emp['Due date']);
  const today    = new Date().toISOString().slice(0, 10);
  const dueIso   = normalizeDateForInput(emp['Due date']) || '';
  const isDueOverdue = ['under-basic', 'under-operation'].includes(actualKey) && dueIso && dueIso < today;

  const basicStart = fmtD(emp['Basic Start']);
  const basicEnd   = fmtD(emp['Basic End']);
  const opStart    = fmtD(emp['Operation Start']);
  const opEnd      = fmtD(emp['Operation End']);
  const basicRange = basicStart && basicEnd ? `${basicStart} → ${basicEnd}` : (basicStart || '');
  const opRange    = opStart && opEnd       ? `${opStart} → ${opEnd}`       : (opStart || '');

  // Status pill with dot
  const statusPill = `<span class="status-pill status-pill--${actualKey}"><span class="status-pill__dot"></span>${esc(statusLabel)}</span>`;

  // Eff
  const effStr = fmtEff(emp['Graduate Eff']);
  const effHtml = effStr
    ? `<span class="emp-eff-val">${esc(effStr)}</span>`
    : `<span class="emp-date-empty">—</span>`;

  return `
    <td class="emp-row-num">${rowNum || ''}</td>
    <td><span class="emp-id-cell">${empId}</span></td>
    <td class="td-l"><span class="emp-name-cell">${esc(emp['Employee Name'] || '')}</span></td>
    <td>${typePill}</td>
    <td class="td-c col-group-end">${gradeHtml}</td>
    <td><span class="emp-date-val">${esc(csaStart)}</span></td>
    <td class="col-group-end"><span class="emp-date-val${isDueOverdue ? ' emp-date-val--danger' : ''}">${esc(dueDate)}</span></td>
    <td>${basicRange ? `<span class="emp-date-range">${esc(basicRange)}</span>` : `<span class="emp-date-empty">—</span>`}</td>
    <td class="col-group-end">${opRange ? `<span class="emp-date-range">${esc(opRange)}</span>` : `<span class="emp-date-empty">—</span>`}</td>
    <td>${effHtml}</td>
    <td class="td-l">${statusPill}</td>
    <td class="td-c"><span class="emp-leave-val">${leave}</span></td>
    <td class="td-c"><button class="emp-act-btn btn-row-edit" data-id="${empId}" title="${t('tooltipEdit')}"><i class="ti ti-edit" aria-hidden="true"></i></button></td>
  `;
}

// ===== INLINE EDIT — ENTER EDIT MODE =====
function startInlineEdit(tr, emp, calc, actualKey) {
  tr.classList.add('editing');
  const nd    = (v) => normalizeDateForInput(v) || '';
  const esc   = escapeHtml;
  const grade = emp['Grade'] || '';

  const leave = parseInt(emp['Employees Leave'], 10) || 0;

  const type = emp['Type'] || 'Sewing';
  tr.innerHTML = `
    <td></td>
    <td><span class="emp-id-cell">${esc(emp['Employee ID'] || '')}</span></td>
    <td><input class="inline-edit" name="Employee Name" value="${esc(emp['Employee Name'] || '')}"></td>
    <td>
      <select class="inline-edit" name="Type">
        <option value="Sewing"${type === 'Sewing' ? ' selected' : ''}>Sewing</option>
        <option value="QC/QA"${type === 'QC/QA'   ? ' selected' : ''}>QC/QA</option>
        <option value="Technic"${type === 'Technic' ? ' selected' : ''}>Technic</option>
      </select>
    </td>
    <td class="td-c col-group-end">
      <select class="inline-edit" name="Grade">
        <option value="">--</option>
        <option value="B"${grade === 'B' ? ' selected' : ''}>B</option>
        <option value="C"${grade === 'C' ? ' selected' : ''}>C</option>
        <option value="D"${grade === 'D' ? ' selected' : ''}>D</option>
        <option value="E"${grade === 'E' ? ' selected' : ''}>E</option>
      </select>
    </td>
    <td><input class="inline-edit" type="date" name="CSA Start Date" value="${nd(emp['CSA Start Date'])}"></td>
    <td class="col-group-end"><span class="emp-date-val">${nd(emp['Due date'])}</span></td>
    <td>
      <div class="ie-date-pair">
        <label class="ie-date-label">Start<input class="inline-edit" type="date" name="Basic Start" value="${nd(emp['Basic Start'])}"></label>
        <label class="ie-date-label">End<input class="inline-edit" type="date" name="Basic End"   value="${nd(emp['Basic End'])}"></label>
      </div>
    </td>
    <td class="col-group-end">
      <div class="ie-date-pair">
        <label class="ie-date-label">Start<input class="inline-edit" type="date" name="Operation Start" value="${nd(emp['Operation Start'])}"></label>
        <label class="ie-date-label">End<input class="inline-edit" type="date" name="Operation End"   value="${nd(emp['Operation End'])}"></label>
      </div>
    </td>
    <td class="td-r"><input class="inline-edit" type="number" name="Graduate Eff" value="${esc(String(emp['Graduate Eff'] ?? ''))}" min="0" max="100" step="0.01" style="max-width:64px;text-align:right"></td>
    <td><span class="status-pill status-pill--${actualKey}"><span class="status-pill__dot"></span>${esc(t(STATUS_KEY_MAP[actualKey] || actualKey))}</span></td>
    <td class="td-c"><input class="inline-edit" type="number" name="Employees Leave" value="${leave}" min="0" step="1" style="max-width:48px;text-align:center"></td>
    <td class="td-c ie-action-cell">
      <button class="btn-confirm-inline" title="${t('tooltipConfirm')}">✓</button>
      <button class="btn-cancel-inline"  title="${t('tooltipCancel')}">✗</button>
      <input type="hidden" class="inline-edit" name="Resign Date"    value="${nd(emp['Resign Date'])}">
      <input type="hidden" class="inline-edit" name="Transfers Date" value="${nd(emp['Transfers Date'])}">
    </td>
  `;

  // Escape key cancels edit
  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', onKeyDown);
      const emp2 = lastEmployees.find(em => String(em['Employee ID']) === String(tr.dataset.employeeId));
      if (emp2) cancelInlineEdit(tr, emp2, emp2.calculated || {}, computeActualStatus(emp2, emp2.calculated || {}));
    }
  };
  document.addEventListener('keydown', onKeyDown);
  // Remove listener when row is no longer editing (confirm/cancel cleans up via renderEmployeeTable)
  tr._ieEscListener = onKeyDown;
}

// ===== INLINE EDIT — CANCEL =====
function cancelInlineEdit(tr, emp, calc, actualKey) {
  if (tr._ieEscListener) { document.removeEventListener('keydown', tr._ieEscListener); delete tr._ieEscListener; }
  tr.classList.remove('editing');
  renderEmployeeTable(lastEmployees);
}

// ===== INLINE EDIT — CONFIRM & SAVE =====
async function confirmInlineEdit(tr, employeeId) {
  if (tr._ieEscListener) { document.removeEventListener('keydown', tr._ieEscListener); delete tr._ieEscListener; }
  const confirmBtn = tr.querySelector('.btn-confirm-inline');
  if (confirmBtn) confirmBtn.disabled = true;

  const payload = {};
  tr.querySelectorAll('.inline-edit').forEach(input => {
    payload[input.name] = input.value;
  });

  // Preserve Comment from cached data (not shown inline)
  const cachedEmp = lastEmployees.find(e => String(e['Employee ID']) === String(employeeId));
  if (cachedEmp && cachedEmp['Comment'] !== undefined) {
    payload['Comment'] = cachedEmp['Comment'];
  }

  payload._holidays = holidays;

  try {
    const data = await api(
      `/api/${currentDepartment}/employees/${encodeURIComponent(employeeId)}`,
      { method: 'PATCH', body: JSON.stringify(payload) }
    );
    // Update cache
    const idx = lastEmployees.findIndex(e => String(e['Employee ID']) === String(employeeId));
    if (idx >= 0) lastEmployees[idx] = data.employee;
    showMessage(t('updated'));
    renderEmployeeTable(lastEmployees);
  } catch (err) {
    if (confirmBtn) confirmBtn.disabled = false;
    showMessage(err.message, true);
  }
}

// ===== POPULATE EMPLOYEE YEAR FILTER =====
// applyDefault: true on a fresh department entry — defaults the filter to
// the latest year with data (instead of "All Years"). False on a plain
// Refresh, so it doesn't silently override whatever the user already chose.
function populateEmpYearFilter(employees, applyDefault = false) {
  const sel = $('empYearFilter');
  if (!sel) return;
  const prev = sel.value;
  const years = [...new Set(
    employees
      .map(e => normalizeDateForInput(e['CSA Start Date']))
      .filter(Boolean)
      .map(d => d.slice(0, 4))
  )].sort((a, b) => b - a);

  sel.innerHTML = `<option value="" data-i18n="allYears">${t('allYears')}</option>`;
  years.forEach(yr => {
    const opt = document.createElement('option');
    opt.value = yr;
    opt.textContent = yr;
    sel.appendChild(opt);
  });

  if (years.includes(prev)) {
    sel.value = prev;
  } else if (applyDefault && years.length) {
    sel.value = years[0];
    currentYearFilter = years[0];
  }
}

// ===== RENDER EMPLOYEE TABLE =====
function renderEmployeeTable(employees) {
  const body = $('employeeTableBody');
  body.innerHTML = '';

  // scope to the active Sewing/QC-QA subtab before anything else downstream sees it
  employees = _filterByNewOpType(employees);

  // analytics block follows the year filter; table rows additionally follow the status filter
  const yearScoped = currentYearFilter
    ? employees.filter(emp => {
        const d = normalizeDateForInput(emp['CSA Start Date']);
        return d && d.slice(0, 4) === currentYearFilter;
      })
    : employees;

  renderDeptAnalytics(currentDepartment, employees, currentYearFilter);

  const filtered = yearScoped
    .map(emp => {
      const calc = emp.calculated || {};
      return { emp, calc, actualKey: computeActualStatus(emp, calc) };
    })
    .filter(({ actualKey }) => !currentFilter || actualKey === currentFilter)
    .sort((a, b) => {
      const da = a.emp['CSA Start Date'] || '';
      const db = b.emp['CSA Start Date'] || '';
      return db < da ? -1 : db > da ? 1 : 0;
    });

  const st     = _newOpTableState;
  const total  = filtered.length;
  const pages  = Math.max(1, Math.ceil(total / st.pageSize));
  if (st.page > pages) st.page = pages;
  const start    = (st.page - 1) * st.pageSize;
  const pageRows = filtered.slice(start, start + st.pageSize);

  pageRows.forEach(({ emp, calc, actualKey }, idx) => {
    const tr = document.createElement('tr');
    tr.className = `actual-${actualKey}`;
    tr.dataset.employeeId = emp['Employee ID'] || '';
    tr.innerHTML = buildRowHTML(emp, calc, actualKey, start + idx + 1);
    body.appendChild(tr);
  });

  // Range label + count badge
  const rangeEl = $('newop-rangeLabel');
  if (rangeEl) rangeEl.textContent = total ? `show ${start + 1}-${Math.min(start + st.pageSize, total)} from ${total} items` : '0 items';
  const badge = $('emp-count-badge');
  if (badge) badge.textContent = total ? `${total}` : '';

  // Numbered pagination
  _renderNewOpPagination(pages, st.page);
}

function _renderNewOpPagination(pages, current) {
  const pl = $('newop-pageLabel');
  const pp = $('newop-prevPage');
  const np = $('newop-nextPage');
  if (pl) pl.textContent = `Page ${current} of ${pages}`;
  if (pp) pp.disabled = current <= 1;
  if (np) np.disabled = current >= pages;
}

// ===== DASHBOARD PAGE =====
// applyYearDefault: true when entering a department fresh (defaults the year
// filter to the latest year with data); false on a plain Refresh, to leave
// whatever year the user already picked alone.
async function loadDashboard(applyYearDefault = false) {
  if (!currentDepartment) return;
  showMessage(t('loading'));
  try {
    const query = getHolidayQuery();
    const data = await api(`/api/${currentDepartment}/employees${query ? '?' + query : ''}`);
    lastEmployees = data.employees || [];
    populateEmpYearFilter(_filterByNewOpType(lastEmployees), applyYearDefault);
    _newOpTableState.page = 1;
    renderEmployeeTable(lastEmployees);
    showMessage(t('loadedCount', { n: lastEmployees.length }));
  } catch (err) {
    if (err.loginRequired) {
      hide($('mainTabBar'));
      show($('loginPanel'));
      startLoginParticles();
      setPage('home');
    } else {
      showMessage(err.message, true);
    }
  }
}

// Rebuilds #homeDashYearFilter's options from CSA Start Date across all
// departments, scoped to the active Sewing/QC-QA subtab. Preserves the
// current selection if it's still a valid year for that subtab's data
// (otherwise falls back to "All Years"). Returns the sorted year list so
// callers can decide on a default. Shared by loadHomeDashboard (initial
// fetch) and the subtab switch handler (re-derive from already-cached data).
function _rebuildHomeDashYearOptions() {
  const years = new Set();
  Object.values(allDeptData).forEach(emps => {
    _filterByNewOpType(emps).forEach(emp => {
      const d = normalizeDateForInput(emp['CSA Start Date']);
      if (d) years.add(d.slice(0, 4));
    });
  });

  const sel = $('homeDashYearFilter');
  if (!sel) return [];
  const prev = sel.value;
  const sortedYears = [...years].sort().reverse();
  sel.innerHTML = `<option value="" data-i18n="allYears">${t('allYears')}</option>`;
  sortedYears.forEach(yr => {
    const opt = document.createElement('option');
    opt.value = yr;
    opt.textContent = yr;
    if (yr === prev) opt.selected = true;
    sel.appendChild(opt);
  });
  return sortedYears;
}

// ===== HOME DASHBOARD =====
async function loadHomeDashboard() {
  const loadingEl    = $('homeDashLoading');
  const cardEl       = $('homeDashCard');
  const gridEl       = $('homeDashGrid');
  const analyticsEl  = $('homeDashAnalytics');
  show(loadingEl);
  hide(cardEl);
  hide(gridEl);
  hide(analyticsEl);

  try {
    const query = getHolidayQuery();
    const results = await Promise.allSettled(
      departments.map(dep =>
        api(`/api/${dep.key}/employees${query ? '?' + query : ''}`)
          .then(data => ({ key: dep.key, employees: data.employees || [] }))
      )
    );

    const allFailedAuth = results.length > 0 &&
      results.every(r => r.status === 'rejected' && r.reason && r.reason.loginRequired);
    if (allFailedAuth) {
      hide(loadingEl);
      hide($('mainTabBar'));
      show($('loginPanel'));
      startLoginParticles();
      setPage('home');
      return;
    }

    results.forEach(r => {
      if (r.status === 'fulfilled') allDeptData[r.value.key] = r.value.employees;
    });

    const sortedYears = _rebuildHomeDashYearOptions();
    const sel = $('homeDashYearFilter');

    // First load only: default to the latest year with data instead of "All
    // Years". Once set, leave later refreshes alone so an explicit "All
    // Years" choice isn't silently overridden.
    if (!_homeDashYearDefaulted) {
      _homeDashYearDefaulted = true;
      if (!sel.value && sortedYears.length) sel.value = sortedYears[0];
    }

    hide(loadingEl);
    show(cardEl);
    show(gridEl);
    renderHomeDashboard(sel.value);
  } catch (err) {
    hide(loadingEl);
    showMessage(err.message, true);
  }
}

// ===== ANALYTICS HELPERS =====
// mode: 'total' = calendar-day diff (b - a)
//       '5d'    = count weekdays (Mon-Fri) in [a..b] inclusive
//       '6d'    = count non-Sundays in [a..b] inclusive
function dateDiffDays(rawA, rawB, mode) {
  const a = normalizeDateForInput(rawA);
  const b = normalizeDateForInput(rawB);
  if (!a || !b) return null;
  const dA = new Date(a);
  const dB = new Date(b);
  if (isNaN(dA) || isNaN(dB) || dB < dA) return null;

  if (!mode || mode === 'total') {
    return Math.round((dB - dA) / 86400000);
  }
  // Inclusive count between dA and dB
  let count = 0;
  const cur = new Date(dA);
  while (cur <= dB) {
    const dow = cur.getDay();  // 0=Sun, 6=Sat
    if (mode === '5d' && dow !== 0 && dow !== 6) count++;
    else if (mode === '6d' && dow !== 0)         count++;
    cur.setDate(cur.getDate() + 1);
  }
  return count;
}

// Truncates `text` to at most `maxChars`, appending an ellipsis — keeps the
// callout label on a single line instead of wrapping past the card edge.
function _truncateLabelText(text, maxChars) {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars - 1).trim() + '…';
}

// SVG donut chart with callout leader lines — same visual language as
// GICA's grade-distribution donuts (label + count + pct labeled outside the
// ring via a bent leader line, instead of a separate legend list).
// segments = [{value, color, label}]. Center keeps the original
// total-count + "employees" caption, unchanged.
function donutSVG(segments) {
  const total = segments.reduce((s, seg) => s + (seg.value || 0), 0);

  if (total === 0) {
    return `<svg viewBox="0 0 255 172" class="donut-svg">
      <circle cx="125" cy="88" r="38" fill="none" stroke="var(--border-light)" stroke-width="18"/>
      <text x="125" y="92" text-anchor="middle" font-size="11" fill="var(--text-muted)">${escapeHtml(t('analyticsNoData'))}</text>
    </svg>`;
  }

  const CX = 125, CY = 88, R = 38, sw = 18;
  const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
  const gap = 1.2;
  const FONT_LABEL = 7, FONT_PCT = 6;
  const MAX_LABEL_CHARS = 10;
  let acc = 0;
  
  const segs = [], lines = [];
  const rightLabels = [], leftLabels = [];

  // ขั้นตอนที่ 1: คำนวณพิกัดดั้งเดิมตามธรรมชาติ และแบ่งฝั่งซ้าย-ขวาให้ชัดเจนตามมุมองศา
  segments.filter(seg => seg.value > 0).forEach(seg => {
    const len  = seg.value / total * CIRC;
    const dash = Math.max(len - gap, 0.5);
    segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${seg.color}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"/>`);

    const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
    const mx = CX + outerR * Math.cos(mid),         my = CY + outerR * Math.sin(mid);
    const ex = CX + (outerR + 12) * Math.cos(mid), ey = CY + (outerR + 12) * Math.sin(mid);
    
    // แบ่งฝั่งจากตำแหน่งมุมจริง: ค่า x ของ ex มากกว่าหรือเท่ากับจุดศูนย์กลางคือฝั่งขวา น้อยกว่าคือฝั่งซ้าย
    const isRight = ex >= CX;
    const pct = Math.round(seg.value / total * 100);
    const labelText = _truncateLabelText(seg.label, MAX_LABEL_CHARS);

    const labelObj = { seg, mx, my, ex, ey, originalEy: ey, labelText, pct, value: seg.value };
    if (isRight) {
      rightLabels.push(labelObj);
    } else {
      leftLabels.push(labelObj);
    }

    acc += len;
  });

  const MIN_Y_GAP = 14; // ระยะห่างขั้นต่ำเพื่อไม่ให้ข้อความทับกัน

  // ขั้นตอนที่ 2: จัดการฝั่งขวา (เรียงจากบนลงล่างตามธรรมชาติของวงกลม)
  // ถ้าตัวถัดไปอยู่ใกล้ตัวก่อนหน้ามากเกินไป ให้ดันตัวถัดไปลงด้านล่าง
  for (let i = 1; i < rightLabels.length; i++) {
    if (rightLabels[i].ey - rightLabels[i-1].ey < MIN_Y_GAP) {
      rightLabels[i].ey = rightLabels[i-1].ey + MIN_Y_GAP;
    }
  }

  // ขั้นตอนที่ 3: จัดการฝั่งซ้าย (สำคัญมาก! กลุ่มที่ทับกันในรูปของคุณอยู่ฝั่งนี้)
  // เนื่องจากเรียงมุมตามเข็มนาฬิกา ฝั่งซ้ายจะวิ่งจาก "ล่างขึ้นบน" 
  // หากตัวถัดมาชิดตัวก่อนหน้า ให้ดันตัวถัดไปหลบ "ขึ้นด้านบน" หรือจัดระเบียบไม่ให้สวนทางกัน
  for (let i = 1; i < leftLabels.length; i++) {
    // ตรวจสอบว่าพิกัด Y ชิดกันเกินไปหรือไม่ (คิดแบบสัมบูรณ์เพื่อความแม่นยำ)
    if (Math.abs(leftLabels[i].ey - leftLabels[i-1].ey) < MIN_Y_GAP) {
      // ดันตำแหน่งแกน Y ของตัวที่มีปัญหาหลบออกไปตามทิศทางองศาเพื่อกระจายตัวอักษรเป็นปีกนก
      if (leftLabels[i].originalEy < leftLabels[i-1].originalEy) {
        leftLabels[i].ey = leftLabels[i-1].ey - MIN_Y_GAP;
      } else {
        leftLabels[i].ey = leftLabels[i-1].ey + MIN_Y_GAP;
      }
    }
  }

  // ขั้นตอนที่ 4: รวมร่างวาดเส้น Leader Line แบบกางออกข้างนอก (หันหัวไปคนละข้างอย่างแท้จริง)
  const allLabels = [...rightLabels, ...leftLabels];
  allLabels.forEach(d => {
    const isRight = d.ex >= CX;
    const hy = d.ey; // ใช้ค่า ey ที่ถูกจัดระเบียบกระจายตัวแล้ว
    
    // กำหนด hx ให้หันไปคนละข้างเด็ดขาด: ฝั่งขวากางออกไปขวา (+18) ฝั่งซ้ายกางออกไปซ้าย (-18)
    const hx = d.ex + (isRight ? 18 : -18);
    const tx = hx + (isRight ? 2 : -2);
    const anchor = isRight ? 'start' : 'end';

    lines.push(`
      <line x1="${d.mx.toFixed(1)}" y1="${d.my.toFixed(1)}" x2="${d.ex.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${d.seg.color}" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="${d.ex.toFixed(1)}" y1="${hy.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${d.seg.color}" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${d.seg.color}"/>
      <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="${FONT_LABEL}" font-weight="600" fill="var(--text)">${escapeHtml(d.labelText)}</text>
      <text x="${tx.toFixed(1)}" y="${(hy + 10.5).toFixed(1)}" text-anchor="${anchor}" font-size="${FONT_PCT}"><tspan font-weight="700" fill="var(--text)">${d.value}</tspan><tspan fill="var(--text)"> (${d.pct}%)</tspan></text>`);
  });

  return `<svg viewBox="0 0 255 172" class="donut-svg">
    <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"/>
    ${segs.join('')}
    ${lines.join('')}
    <text x="${CX}" y="${CY+3}" text-anchor="middle" font-size="18" font-weight="800" fill="currentColor">${total}</text>
    <text x="${CX}" y="${CY+10}" text-anchor="middle" font-size="6" fill="var(--text-muted)">${escapeHtml(t('analyticsEmployees'))}</text>
  </svg>`;
}

// Trend data: month-by-month counts of (joined / inTraining / completed / resigned).
// yearFilter '' = aggregate across all years per calendar month (Jan = sum of all Januaries).
// Otherwise restrict to that single year.
//
// "inTraining" event date follows user rule: prefer Operation Start if present,
// otherwise fall back to Basic Start. Each employee contributes to at most one month.
function computeTrendData(employees, yearFilter) {
  const joined     = new Array(12).fill(0);
  const inTraining = new Array(12).fill(0);
  const completed  = new Array(12).fill(0);
  const resigned   = new Array(12).fill(0);

  const addToMonth = (rawDate, arr) => {
    const iso = normalizeDateForInput(rawDate);
    if (!iso) return;
    const parts = iso.split('-');
    if (parts.length < 2) return;
    const y = parts[0];
    const m = parseInt(parts[1], 10);
    if (yearFilter && y !== yearFilter) return;
    if (m < 1 || m > 12) return;
    arr[m - 1]++;
  };

  employees.forEach(emp => {
    addToMonth(emp['CSA Start Date'], joined);
    // In Training: prefer Op Start over Basic Start (per user spec)
    const trainingStartDate = normalizeDateForInput(emp['Operation Start'])
                           || normalizeDateForInput(emp['Basic Start']);
    if (trainingStartDate) addToMonth(trainingStartDate, inTraining);
    addToMonth(emp['Operation End'],  completed);
    addToMonth(emp['Resign Date'],    resigned);
  });

  return { joined, inTraining, completed, resigned };
}

// Chart.js line chart with gradient area fill. Series toggled by `visibility`.
// Mounted (not rendered to a string) because Chart.js needs a live <canvas>;
// call this once the card's HTML is already in the DOM. `scope` keys the
// _trendCharts instance store ('home', or a department key) so multiple
// Monthly Trend cards (home dashboard + each department page) can coexist.
function mountTrendChart(scope, canvasId, data, visibility) {
  const canvas = $(canvasId);
  if (!canvas || typeof Chart === 'undefined') return;

  if (_trendCharts[scope]) { try { _trendCharts[scope].destroy(); } catch (_) {} delete _trendCharts[scope]; }

  const series = [
    { key: 'joined',     color: '#f59e0b', label: t('trendJoined'),    values: data.joined     },
    { key: 'inTraining', color: '#3b82f6', label: t('training'),       values: data.inTraining },
    { key: 'completed',  color: '#10b981', label: t('trendCompleted'), values: data.completed  },
    { key: 'resigned',   color: '#ef4444', label: t('trendResigned'),  values: data.resigned   },
  ].filter(s => visibility[s.key]);

  const ctx = canvas.getContext('2d');
  const labels = [...Array(12)].map((_, i) => monthAbbr(i));

  const datasets = series.map(s => ({
    label: s.label,
    data: s.values,
    borderColor: s.color,
    backgroundColor: (chartCtx) => {
      const { chartArea } = chartCtx.chart;
      if (!chartArea) return s.color + '22';
      const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      g.addColorStop(0, s.color + '3d');
      g.addColorStop(1, s.color + '00');
      return g;
    },
    fill: true,
    borderWidth: 2.5,
    tension: 0.38,
    pointRadius: 3,
    pointHoverRadius: 6,
    pointBackgroundColor: s.color,
    pointBorderColor: 'var(--surface2)',
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
  }));

  _trendCharts[scope] = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0, font: { size: 12 } },
          grid: { color: 'rgba(128,128,128,.12)' },
          border: { display: false },
        },
        x: {
          ticks: { font: { size: 13, weight: '600' } },
          grid: { display: false },
          border: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(17,24,39,.92)',
          padding: 10,
          cornerRadius: 8,
          titleFont: { size: 12, weight: '700' },
          bodyFont: { size: 12 },
          boxPadding: 4,
          usePointStyle: true,
        },
      },
    },
  });
}

// Converts a 6-digit hex color to an rgba() string. Used instead of CSS
// color-mix() for the trend-dot glow — html2canvas (Overall Dashboard PNG/PDF
// export) can't parse color-mix() and throws "unsupported color function".
function _hexToRgba(hex, alpha) {
  const n = parseInt(hex.replace('#', ''), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

// Builds the Monthly Trend card markup. `idSuffix` scopes every internal id
// (year/dept selects, toggle group, canvas) so the home-dashboard instance
// and each department-page instance can coexist in the DOM without
// getElementById collisions. Pass deptOptionsHtml = null to omit the dept
// select entirely (department dashboards are already scoped to one BU).
function trendCardHtml({ trendData, trendVisibility, yearOptionsHtml, deptOptionsHtml, idSuffix }) {
  const trendSeries = [
    { key: 'joined',     color: '#f59e0b', label: t('trendJoined')    },
    { key: 'inTraining', color: '#3b82f6', label: t('training')       },
    { key: 'completed',  color: '#10b981', label: t('trendCompleted') },
    { key: 'resigned',   color: '#ef4444', label: t('trendResigned')  },
  ];
  const trendToggles = trendSeries.map(ts => `
    <button type="button"
      class="trend-toggle${trendVisibility[ts.key] ? ' active' : ''}"
      data-series="${ts.key}"
      style="--tt-color:${ts.color}; --tt-shadow:${_hexToRgba(ts.color, 0.18)}">
      <span class="trend-dot" style="background:${ts.color}"></span>
      <span>${escapeHtml(ts.label)}</span>
    </button>`).join('');

  return `
    <div class="trend-chart-card">
      <div class="trend-header">
        <div class="trend-header-left">
          <h4><i class="ti ti-chart-line trend-header-icon" aria-hidden="true"></i>${escapeHtml(t('trendTitle'))}</h4>
          <select id="trendYearFilter-${idSuffix}" class="year-select trend-filter-sel">
            ${yearOptionsHtml}
          </select>
          ${deptOptionsHtml != null ? `
          <select id="trendDeptFilter-${idSuffix}" class="year-select trend-filter-sel">
            ${deptOptionsHtml}
          </select>` : ''}
        </div>
        <div class="trend-toggle-group" id="trendToggleGroup-${idSuffix}">
          ${trendToggles}
        </div>
      </div>
      <div class="trend-chart-canvas-wrap">
        <canvas id="trendMonthlyChart-${idSuffix}"></canvas>
      </div>
    </div>`;
}

// Build a chart card (donut with leader-line callouts — no separate legend,
// the callouts on the ring itself carry label + count + pct)
function chartCard(title, segments) {
  return `
    <div class="chart-card">
      <div class="chart-title">${escapeHtml(title)}</div>
      <div class="chart-svg-wrap">${donutSVG(segments)}</div>
    </div>`;
}

function statSummary(values) {
  if (!values.length) return null;
  const avg = values.reduce((s, v) => s + v, 0) / values.length;
  return {
    avg: Math.round(avg * 10) / 10,
    min: Math.min(...values),
    max: Math.max(...values),
    n:   values.length,
  };
}

function computeAnalytics(employees, yearFilter, dayMode) {
  const filtered = yearFilter
    ? employees.filter(emp => {
        const d = normalizeDateForInput(emp['CSA Start Date']);
        return d && d.slice(0, 4) === yearFilter;
      })
    : employees;

  const totalDays = [], basicDays = [], opDays = [], resignDays = [];
  // Dynamic per-grade collectors — accept whatever grade values the Excel actually contains
  const opDaysByGrade      = {};
  const totalDaysByGrade   = {};
  const resignCountByGrade = {};  // count of resignations per grade
  const resignDaysByGrade  = {};  // resign duration (days) per grade — for avg calc
  const totalCountByGrade  = {};  // total employee count per grade — for resign rate %
  const resignDaysByType = { operation: [], basic: [], beforeBasic: [] };
  // Basic → Op proceed rate
  // Formula: (employees with Operation Start) / (employees with Basic Start) × 100
  // Counts are independent — denominator = anyone who started Basic;
  // numerator = anyone who reached Operation Start (regardless of Basic End).
  let basicStartedCount  = 0;   // denominator: people with Basic Start set
  let opStartedCount     = 0;   // numerator:   people with Operation Start set
  // status counts for chart visualization
  const sc = {
    completed: 0, completedOverdue: 0,
    underOp: 0, underBasic: 0,
    resignOp: 0, resignBasic: 0, resignBeforeBasic: 0,
    transferOp: 0, transferBasic: 0, transferBeforeBasic: 0,
  };

  filtered.forEach(emp => {
    const status = computeActualStatus(emp, emp.calculated || {});

    // Status tallies for charts
    if      (status === 'completed')             sc.completed++;
    else if (status === 'completed-overdue')     sc.completedOverdue++;
    else if (status === 'under-operation')       sc.underOp++;
    else if (status === 'under-basic')           sc.underBasic++;
    else if (status === 'resign-operation')      sc.resignOp++;
    else if (status === 'resign-basic')          sc.resignBasic++;
    else if (status === 'resign-before-basic')   sc.resignBeforeBasic++;
    else if (status === 'transfer-operation')    sc.transferOp++;
    else if (status === 'transfer-basic')        sc.transferBasic++;
    else if (status === 'transfer-before-basic') sc.transferBeforeBasic++;

    const empGrade = String(emp['Grade'] || '').toUpperCase().trim();

    // count total employees per grade (all statuses)
    if (empGrade) totalCountByGrade[empGrade] = (totalCountByGrade[empGrade] || 0) + 1;

    // 1.1 Total training: Operation End - CSA Start Date (all + per-grade)
    // View by Grade counts only graduated employees (completed / completed-overdue)
    const d11 = dateDiffDays(emp['CSA Start Date'], emp['Operation End'], dayMode);
    if (d11 !== null) {
      totalDays.push(d11);
      if (empGrade && (status === 'completed' || status === 'completed-overdue')) {
        if (!totalDaysByGrade[empGrade]) totalDaysByGrade[empGrade] = [];
        totalDaysByGrade[empGrade].push(d11);
      }
    }

    // 1.2 Basic training: Basic End - Basic Start
    const d12 = dateDiffDays(emp['Basic Start'], emp['Basic End'], dayMode);
    if (d12 !== null) basicDays.push(d12);

    // 1.2a Basic → Op proceed rate
    // New formula: independent counts — (Op Start count) / (Basic Start count)
    const hasBasicStart = !!normalizeDateForInput(emp['Basic Start']);
    const hasOpStart    = !!normalizeDateForInput(emp['Operation Start']);
    if (hasBasicStart) basicStartedCount++;
    if (hasOpStart)    opStartedCount++;

    // 1.3 Operation training: Operation End - Operation Start (all + per-grade)
    const d13 = dateDiffDays(emp['Operation Start'], emp['Operation End'], dayMode);
    if (d13 !== null) {
      opDays.push(d13);
      if (empGrade) {
        if (!opDaysByGrade[empGrade]) opDaysByGrade[empGrade] = [];
        opDaysByGrade[empGrade].push(d13);
      }
    }

    // 1.4 Resign duration — overall + broken down by resign type + by grade
    if (status === 'resign-operation' || status === 'resign-basic'
        || status === 'resign-before-basic') {
      const d14 = dateDiffDays(emp['CSA Start Date'], emp['Resign Date'], dayMode);
      if (d14 !== null) {
        resignDays.push(d14);
        if      (status === 'resign-operation')    resignDaysByType.operation.push(d14);
        else if (status === 'resign-basic')        resignDaysByType.basic.push(d14);
        else if (status === 'resign-before-basic') resignDaysByType.beforeBasic.push(d14);
        // avg resign duration per grade
        if (empGrade) {
          if (!resignDaysByGrade[empGrade]) resignDaysByGrade[empGrade] = [];
          resignDaysByGrade[empGrade].push(d14);
        }
      }
      // count resignations per grade (regardless of whether duration is available)
      if (empGrade) {
        resignCountByGrade[empGrade] = (resignCountByGrade[empGrade] || 0) + 1;
      }
    }
  });

  // Summarize per-grade dynamically (accepts whatever grades exist in the data)
  const summarizeByGrade = (dict) => {
    const out = {};
    Object.keys(dict).forEach(g => { out[g] = statSummary(dict[g]); });
    return out;
  };

  const result = {
    total:             statSummary(totalDays),
    basic:             statSummary(basicDays),
    operation:         statSummary(opDays),
    totalByGrade:      summarizeByGrade(totalDaysByGrade),
    opByGrade:         summarizeByGrade(opDaysByGrade),
    basicProceed: {
      finished:  basicStartedCount,   // denominator (Basic Start count)
      proceeded: opStartedCount,      // numerator   (Op Start count)
      pct: basicStartedCount > 0 ? (opStartedCount / basicStartedCount * 100) : null,
    },
    resign:            statSummary(resignDays),
    resignByType: {
      operation:   statSummary(resignDaysByType.operation),
      basic:       statSummary(resignDaysByType.basic),
      beforeBasic: statSummary(resignDaysByType.beforeBasic),
    },
    resignCountByGrade,
    resignAvgByGrade:  summarizeByGrade(resignDaysByGrade),
    totalCountByGrade,
    resignOp:          sc.resignOp,
    resignBasic:       sc.resignBasic,
    resignBeforeBasic: sc.resignBeforeBasic,
    resignTotal:       sc.resignOp + sc.resignBasic + sc.resignBeforeBasic,
    statusCounts:      sc,
  };

  return result;
}

// ===== ANALYTICS CARD BUILDERS (pure — shared by home dashboard + per-department dashboard) =====

const fmtNum = (v) => (v % 1 === 0 ? v : v.toFixed(1));

function fmtStatCard(stat) {
  if (!stat) return `<div class="ac-no-data">${t('analyticsNoData')}</div>`;
  const avgFmt = stat.avg % 1 === 0 ? stat.avg : stat.avg.toFixed(1);
  return `
    <div class="ac-avg-label">${t('analyticsAvg')}</div>
    <div class="ac-avg-value">${avgFmt} <span class="ac-unit">${t('analyticsDays')}</span></div>
    <div class="ac-minmax">
      <div class="ac-minmax-item">
        <span class="ac-minmax-label">${t('analyticsMin')}</span>
        <span class="ac-minmax-value">${stat.min} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
      </div>
      <div class="ac-minmax-item">
        <span class="ac-minmax-label">${t('analyticsMax')}</span>
        <span class="ac-minmax-value">${stat.max} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
      </div>
    </div>`;
}

// Per-grade table rows (used in Total + Op Training expand). Iterates over
// whatever grades the data actually contains (sorted) — no hard-coded grade
// list, so it's resilient to varied Excel input.
function buildGradeTable(byGrade, accent) {
  const grades = Object.keys(byGrade || {}).filter(g => byGrade[g]).sort();
  if (!grades.length) {
    return `<div class="ac-xt-no-data">${t('analyticsNoData')}</div>`;
  }
  const rows = grades.map(g => {
    const stat = byGrade[g];
    return `
      <div class="ac-list-row">
        <div><span class="ac-xt-tag" style="background:${accent}">${escapeHtml(g)}</span></div>
        <div class="ac-xt-avg text-right" style="color:${accent}">
          ${fmtNum(stat.avg)}
        </div>
        <div class="ac-xt-range text-right">${stat.min}–${stat.max}</div>
        <div class="ac-xt-n text-right">${stat.n}</div>
      </div>
    `;
  }).join('');
  return `
    <div class="ac-data-list">
      <div class="ac-list-header">
        <div>${t('grade')}</div>
        <div class="text-right">${t('analyticsAvg')}</div>
        <div class="text-right">${t('analyticsMin')}–${t('analyticsMax')}</div>
        <div class="text-right">n</div>
      </div>
      <div class="ac-list-body">
        ${rows}
      </div>
    </div>
  `;
}

// Basic → Op proceed rate panel (Basic Training card expand)
function buildBasicProceed(bp) {
  if (!bp || bp.pct === null) {
    return `<div class="ac-xt-no-data">${t('analyticsNoData')}</div>`;
  }
  const pct      = fmtNum(bp.pct);
  const barPct   = Math.min(bp.pct, 100); // clamp bar width ≤ 100% (ตัวเลขยังแสดงค่าจริง)
  const barColor = 'rgba(59,130,246,.85)';
  return `<div class="ac-proceed">
    <div class="ac-proceed-label">${t('analyticsProceedLabel')}</div>
    <div class="ac-proceed-value">${pct}<span class="ac-proceed-unit">%</span></div>
    <div class="ac-proceed-bar"><div class="ac-proceed-fill" style="width:${barPct}%;background:${barColor}"></div></div>
    <div class="ac-proceed-hint">${bp.proceeded} / ${bp.finished} ${t('analyticsProceedHint')}</div>
  </div>`;
}

// Resign-duration breakdown by type (Resign Duration card expand)
function buildResignDurTable(s) {
  // 3-step red shades (darkest → lightest): resign-op, resign-basic, resign-before-basic
  const COLOR_OP     = 'rgba(220,38,38,.92)';
  const COLOR_BASIC  = 'rgba(248,113,113,.95)';
  const COLOR_BEFORE = 'rgba(254,202,202,.95)';

  const rows = [
    { color: COLOR_OP,     label: t('analyticsResignOp'),         stat: s.resignByType.operation   },
    { color: COLOR_BASIC,  label: t('analyticsResignBasic'),      stat: s.resignByType.basic       },
    { color: COLOR_BEFORE, label: t('analyticsResignBeforeBasic'),stat: s.resignByType.beforeBasic },
  ].map(r => {
    // กรณีไม่มีข้อมูล (Empty State)
    if (!r.stat) {
      return `
        <div class="ac-list-row ac-list-row-resign ac-xt-empty">
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="ac-xt-dot" style="background:${r.color}"></span>
            <span class="ac-xt-lbl">${escapeHtml(r.label)}</span>
          </div>
          <div class="ac-xt-empty-cell text-right" style="grid-column: span 3;">—</div>
        </div>`;
    }
    // กรณีมีข้อมูลปกติ
    return `
      <div class="ac-list-row ac-list-row-resign">
        <div style="display:flex; align-items:center; gap:6px; min-width: 0;">
          <span class="ac-xt-dot" style="background:${r.color}"></span>
          <span class="ac-xt-lbl">${escapeHtml(r.label)}</span>
        </div>
        <div class="ac-xt-avg text-right" style="color:var(--danger)">
          ${fmtNum(r.stat.avg)}
        </div>
        <div class="ac-xt-range text-right">${r.stat.min}–${r.stat.max}</div>
        <div class="ac-xt-n text-right">${r.stat.n}</div>
      </div>`;
  }).join('');

  return `
    <div class="ac-data-list ac-xt-table-resign">
      <div class="ac-list-header ac-list-row-resign">
        <div></div> <div class="text-right">${t('analyticsAvg')}</div>
        <div class="text-right">${t('analyticsMin')}–${t('analyticsMax')}</div>
        <div class="text-right">N</div>
      </div>
      <div class="ac-list-body">${rows}</div>
    </div>`;
}

// Resign Breakdown card: avg + min/max per grade (mini stat-card per grade)
function buildResignAvgCard(s) {
  const avgByGrade = s.resignAvgByGrade || {};
  const grades = Object.keys(avgByGrade).filter(g => avgByGrade[g]).sort();
  if (!grades.length) return `<div class="ac-no-data">${t('analyticsNoData')}</div>`;
  return `<div class="ac-rga-list">${grades.map(g => {
    const stat   = avgByGrade[g];
    const avgFmt = stat.avg % 1 === 0 ? stat.avg : stat.avg.toFixed(1);
    return `<div class="ac-rga-grade">
      <div class="ac-rga-grade-head">
        <span class="ac-xt-tag" style="background:var(--danger)">${escapeHtml(g)}</span>
        <div class="ac-avg-value ac-rga-avg-value">${avgFmt} <span class="ac-unit">${t('analyticsDays')}</span></div>
      </div>
      <div class="ac-minmax">
        <div class="ac-minmax-item">
          <span class="ac-minmax-label">${t('analyticsMin')}</span>
          <span class="ac-minmax-value">${stat.min} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
        </div>
        <div class="ac-minmax-item">
          <span class="ac-minmax-label">${t('analyticsMax')}</span>
          <span class="ac-minmax-value">${stat.max} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
        </div>
        <div class="ac-minmax-item">
          <span class="ac-minmax-label">N</span>
          <span class="ac-minmax-value">${stat.n}</span>
        </div>
      </div>
    </div>`;
  }).join('')}</div>`;
}

// Fixed (always-visible) detail section within a stat-card — just a divider
// line separating the summary stat from the breakdown below, no click-to-expand.
function fixedSection(content) {
  return `<div class="ac-divider"></div><div class="ac-fixed-content">${content}</div>`;
}

// charts-grid (4 donut cards) + analytics-grid (5 stat cards) — the shared
// body of the Data Analytics block, used by both the home dashboard and each
// department's own dashboard page.
function _analyticsRowsHtml(s) {
  const sc = s.statusCounts;
  const C = {
    grad:        'rgba(34,197,94,.88)',     // green (graduation)
    gradLight:   'rgba(167,243,208,.95)',   // light green (overdue grad)
    train:       'rgba(59,130,246,.88)',    // blue (training)
    trainLight:  'rgba(147,197,253,.95)',   // light blue (basic)
    resign:      'rgba(220,38,38,.92)',     // red (resign-op, darkest)
    resignMed:   'rgba(248,113,113,.95)',   // medium red (resign-basic)
    resignLight: 'rgba(254,202,202,.95)',   // light red (resign-before-basic)
    transfer:    'rgba(168,85,247,.85)',    // purple (transfer)
  };

  const gradTotal     = sc.completed + sc.completedOverdue;
  const trainingTotal = sc.underOp + sc.underBasic;
  const resignTotalC  = sc.resignOp + sc.resignBasic + sc.resignBeforeBasic;
  const transferTotal = sc.transferOp + sc.transferBasic + sc.transferBeforeBasic;

  const chartOverall = chartCard(t('chartOverall'), [
    { value: gradTotal,     color: C.grad,     label: t('congratulations') },
    { value: trainingTotal, color: C.train,    label: t('training') },
    { value: resignTotalC,  color: C.resign,   label: t('resignation') },
    { value: transferTotal, color: C.transfer, label: t('statusTransfer') },
  ]);
  const chartGrad = chartCard(t('chartGradBreakdown'), [
    { value: sc.completed,        color: C.grad,      label: t('statusOnTime') },
    { value: sc.completedOverdue, color: C.gradLight, label: t('statusOverdue') },
  ]);
  const chartTraining = chartCard(t('chartTrainingBreakdown'), [
    { value: sc.underOp,    color: C.train,      label: t('statusUnderOperation') },
    { value: sc.underBasic, color: C.trainLight, label: t('statusUnderBasic') },
  ]);
  const chartResign = chartCard(t('chartResignBreakdown'), [
    { value: sc.resignOp,          color: C.resign,      label: t('statusResignOperation') },
    { value: sc.resignBasic,       color: C.resignMed,   label: t('statusResignBasic') },
    { value: sc.resignBeforeBasic, color: C.resignLight, label: t('statusResignBeforeBasic') },
  ]);

  return `
    <div class="charts-grid">
      ${chartOverall}
      ${chartGrad}
      ${chartTraining}
      ${chartResign}
    </div>

    <div class="analytics-grid">
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsTotalTraining')}</span></div>
        ${fmtStatCard(s.total)}
        ${fixedSection(buildGradeTable(s.totalByGrade, 'rgba(59,130,246,.92)'))}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsBasicTraining')}</span></div>
        ${fmtStatCard(s.basic)}
        ${fixedSection(buildBasicProceed(s.basicProceed))}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsOpTraining')}</span></div>
        ${fmtStatCard(s.operation)}
        ${fixedSection(buildGradeTable(s.opByGrade, 'rgba(59,130,246,.92)'))}
      </div>
      <div class="analytic-card ac-danger">
        <div class="ac-header"><span class="ac-title">${t('analyticsResignDur')}</span></div>
        ${fmtStatCard(s.resign)}
        ${fixedSection(buildResignDurTable(s))}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsResignRatio')}</span></div>
        <div class="ac-avg-label">${t('analyticsAvg')}</div>
        ${buildResignAvgCard(s)}
      </div>
    </div>`;
}

function renderAnalytics(yearFilter) {
  const el = $('homeDashAnalytics');
  if (!el) return;
  if (!Object.keys(allDeptData).length) { hide(el); return; }

  const employees = _filterByNewOpType(currentAnalyticsDept
    ? (allDeptData[currentAnalyticsDept] || [])
    : Object.values(allDeptData).flat());
  const s = computeAnalytics(employees, yearFilter, currentDayMode);
  const trendData = computeTrendData(employees, yearFilter);

  const deptOptions = [`<option value="">${escapeHtml(t('analyticsAllDept'))}</option>`]
    .concat(departments.map(d =>
      `<option value="${escapeHtml(d.key)}"${d.key === currentAnalyticsDept ? ' selected' : ''}>${escapeHtml(d.label)}</option>`
    )).join('');

  const dayBtn = (mode, label) =>
    `<button type="button" class="day-mode-btn${currentDayMode === mode ? ' active' : ''}" data-mode="${mode}">${escapeHtml(label)}</button>`;

  const yearOptions = [...($('homeDashYearFilter').options || [])]
    .map(o => `<option value="${escapeHtml(o.value)}"${o.value === yearFilter ? ' selected' : ''}>${escapeHtml(o.textContent)}</option>`)
    .join('');

  const trendHtml = trendCardHtml({
    trendData, trendVisibility,
    yearOptionsHtml: yearOptions,
    deptOptionsHtml: deptOptions,
    idSuffix: 'home',
  });

  el.innerHTML = `
    <div class="analytics-section-hdr">
      <h3>${t('analyticsTitle')}</h3>
      <div class="day-mode-btn-group" id="dayModeBtnGroup">
        ${dayBtn('total', t('dayModeTotal'))}
        ${dayBtn('5d',    t('dayMode5d'))}
        ${dayBtn('6d',    t('dayMode6d'))}
      </div>
      <select id="analyticsDeptFilter" class="year-select analytics-dept-select">
        ${deptOptions}
      </select>
    </div>

    ${_analyticsRowsHtml(s)}

    <div style="margin-top:24px">${trendHtml}</div>`;

  // wire dept-filter change → re-render analytics (table stays as-is)
  const deptSel = $('analyticsDeptFilter');
  if (deptSel) {
    deptSel.onchange = () => {
      currentAnalyticsDept = deptSel.value;
      const trendDept = $('trendDeptFilter-home');
      if (trendDept) trendDept.value = currentAnalyticsDept;
      renderAnalytics(yearFilter);
    };
  }

  // wire trend card year/dept filters — sync back to top-level controls
  const trendYearSel = $('trendYearFilter-home');
  if (trendYearSel) {
    trendYearSel.onchange = () => {
      const yr = trendYearSel.value;
      const topYear = $('homeDashYearFilter');
      if (topYear) topYear.value = yr;
      renderHomeDashboard(yr);
    };
  }
  const trendDeptSel = $('trendDeptFilter-home');
  if (trendDeptSel) {
    trendDeptSel.onchange = () => {
      currentAnalyticsDept = trendDeptSel.value;
      const topDept = $('analyticsDeptFilter');
      if (topDept) topDept.value = currentAnalyticsDept;
      renderAnalytics(yearFilter);
    };
  }

  // wire day-mode buttons
  const btnGroup = $('dayModeBtnGroup');
  if (btnGroup) {
    btnGroup.querySelectorAll('.day-mode-btn').forEach(btn => {
      btn.onclick = () => {
        currentDayMode = btn.dataset.mode;
        renderAnalytics(yearFilter);
      };
    });
  }

  // wire trend toggle buttons — each toggles its series independently
  const trendGroup = $('trendToggleGroup-home');
  if (trendGroup) {
    trendGroup.querySelectorAll('.trend-toggle').forEach(btn => {
      btn.onclick = () => {
        const key = btn.dataset.series;
        trendVisibility[key] = !trendVisibility[key];
        renderAnalytics(yearFilter);
      };
    });
  }

  mountTrendChart('home', 'trendMonthlyChart-home', trendData, trendVisibility);

  show(el);
}

// ===== PER-DEPARTMENT DATA ANALYTICS (BU dashboard page, #newop-stats) =====
// Same charts-grid + analytics-grid + Monthly Trend structure as the home
// dashboard's Data Analytics block, scoped to a single department's
// employees. No day-mode toggle or dept filter — both are implicit (each BU
// has a fixed work-week length, and the page is already scoped to one BU).
function _getDeptAnalyticsState(deptKey) {
  if (!_deptAnalyticsState[deptKey]) {
    _deptAnalyticsState[deptKey] = {
      trendVisibility: { joined: true, inTraining: true, completed: true, resigned: true },
    };
  }
  return _deptAnalyticsState[deptKey];
}

function renderDeptAnalytics(deptKey, employees, yearFilter) {
  const el = $('newop-stats');
  if (!el || !deptKey) return;

  const state   = _getDeptAnalyticsState(deptKey);
  const dayMode = DEPT_DAY_MODE[deptKey] || '6d';
  const s         = computeAnalytics(employees, yearFilter, dayMode);
  const trendData = computeTrendData(employees, yearFilter);

  const years = new Set();
  employees.forEach(emp => {
    const d = normalizeDateForInput(emp['CSA Start Date']);
    if (d) years.add(d.slice(0, 4));
  });
  const yearOptions = `<option value="">${escapeHtml(t('allYears'))}</option>` +
    [...years].sort().reverse().map(yr =>
      `<option value="${escapeHtml(yr)}"${yr === yearFilter ? ' selected' : ''}>${escapeHtml(yr)}</option>`
    ).join('');

  const trendHtml = trendCardHtml({
    trendData, trendVisibility: state.trendVisibility,
    yearOptionsHtml: yearOptions,
    deptOptionsHtml: null, // already scoped to one BU — no dept switcher here
    idSuffix: deptKey,
  });

  el.innerHTML = `
    <div class="analytics-section-hdr">
      <h3>${t('analyticsTitle')}</h3>
      <div class="analytics-export-controls">
        <button type="button" id="newopExportPngBtn" class="small export-btn" title="Export PNG">PNG</button>
        <button type="button" id="newopExportPdfBtn" class="small export-btn" title="Export PDF">PDF</button>
      </div>
    </div>

    ${_analyticsRowsHtml(s)}

    <div style="margin-top:24px">${trendHtml}</div>`;

  // wire PNG/PDF export buttons — capture just this department's analytics block
  const exportPngBtn = $('newopExportPngBtn');
  if (exportPngBtn) exportPngBtn.onclick = () => exportNewOpAnalyticsPng(deptKey);
  const exportPdfBtn = $('newopExportPdfBtn');
  if (exportPdfBtn) exportPdfBtn.onclick = () => exportNewOpAnalyticsPdf(deptKey);

  // wire trend year filter — sync back to this page's own year filter + table
  const trendYearSel = $(`trendYearFilter-${deptKey}`);
  if (trendYearSel) {
    trendYearSel.onchange = () => {
      currentYearFilter = trendYearSel.value;
      const topYear = $('empYearFilter');
      if (topYear) topYear.value = currentYearFilter;
      _newOpTableState.page = 1;
      renderEmployeeTable(lastEmployees);
    };
  }

  // wire trend toggle buttons — each toggles its series independently
  const trendGroup = $(`trendToggleGroup-${deptKey}`);
  if (trendGroup) {
    trendGroup.querySelectorAll('.trend-toggle').forEach(btn => {
      btn.onclick = () => {
        const key = btn.dataset.series;
        state.trendVisibility[key] = !state.trendVisibility[key];
        renderDeptAnalytics(deptKey, employees, yearFilter);
      };
    });
  }

  mountTrendChart(deptKey, `trendMonthlyChart-${deptKey}`, trendData, state.trendVisibility);
}

function buildDashRow(tr, label, total, completed, training, resign, transfer) {
  const pct = (n) => {
    if (total === 0) return '';
    return `<small class="pct">(${Math.round(n / total * 100)}%)</small>`;
  };

  const cPct  = total > 0 ? (completed / total * 100).toFixed(1) : 0;
  const tPct  = total > 0 ? (training  / total * 100).toFixed(1) : 0;
  const rPct  = total > 0 ? (resign    / total * 100).toFixed(1) : 0;
  const xPct  = total > 0 ? (transfer  / total * 100).toFixed(1) : 0;

  const bar = `<div class="ratio-bar">
    <div class="ratio-seg ratio-completed" style="width:${cPct}%" title="${escapeHtml(t('congratulations'))}: ${cPct}%"></div>
    <div class="ratio-seg ratio-training"  style="width:${tPct}%" title="${escapeHtml(t('training'))}: ${tPct}%"></div>
    <div class="ratio-seg ratio-resign"    style="width:${rPct}%" title="${escapeHtml(t('resignation'))}: ${rPct}%"></div>
    <div class="ratio-seg ratio-transfer"  style="width:${xPct}%" title="${escapeHtml(t('transferred'))}: ${xPct}%"></div>
  </div>`;

  [
    { html: escapeHtml(label),                        cls: 'dept-label' },
    { html: `${total}`,                               cls: 'num-cell' },
    { html: `${completed} ${pct(completed)}`,         cls: 'num-cell ok' },
    { html: `${training} ${pct(training)}`,           cls: 'num-cell blue' },
    { html: `${resign} ${pct(resign)}`,               cls: 'num-cell danger' },
    { html: `${transfer} ${pct(transfer)}`,           cls: 'num-cell transfer' },
    { html: bar,                                      cls: 'bar-cell' },
  ].forEach(({ html, cls }) => {
    const td = tr.insertCell();
    td.innerHTML = html;
    if (cls) td.className = cls;
  });
}

function renderHomeDashboard(yearFilter) {
  const gridEl = $('homeDashGrid');
  if (!gridEl) return;
  gridEl.innerHTML = '';

  if (!Object.keys(allDeptData).length) return;

  let grandTotal = 0, grandCompleted = 0, grandTraining = 0, grandResign = 0, grandTransfer = 0;

  const table = document.createElement('table');
  table.className = 'home-dash-table';

  const thead = table.createTHead();
  const hrow  = thead.insertRow();
  [t('department'), t('total'), t('congratulations'), t('training'), t('resignation'), t('transferred'), t('ratio')]
    .forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      hrow.appendChild(th);
    });

  const tbody = table.createTBody();

  departments.forEach(dep => {
    const employees = _filterByNewOpType(allDeptData[dep.key] || []);
    const filtered  = yearFilter
      ? employees.filter(emp => {
          const d = normalizeDateForInput(emp['CSA Start Date']);
          return d && d.slice(0, 4) === yearFilter;
        })
      : employees;

    let total = filtered.length, completed = 0, training = 0, resign = 0, transfer = 0;

    filtered.forEach(emp => {
      const key = computeActualStatus(emp, emp.calculated || {});
      if (key === 'completed' || key === 'completed-overdue')        completed++;
      else if (key === 'under-operation' || key === 'under-basic')   training++;
      else if (key === 'resign-operation' || key === 'resign-basic'
            || key === 'resign-before-basic')                         resign++;
      else if (key === 'transfer-operation' || key === 'transfer-basic'
            || key === 'transfer-before-basic')                       transfer++;
    });

    grandTotal     += total;
    grandCompleted += completed;
    grandTraining  += training;
    grandResign    += resign;
    grandTransfer  += transfer;

    const tr = tbody.insertRow();
    tr.style.cursor = 'pointer';
    tr.onclick = () => {
      currentDepartment = dep.key;
      currentFilter = '';
      currentYearFilter = '';
      if ($('statusFilter'))  $('statusFilter').value  = '';
      if ($('empYearFilter')) $('empYearFilter').value = '';
      $('dashboardTitle').textContent = `${dep.label} ${t('dashboard')}`;
      setPage('dashboard');
      loadDashboard(true);
    };

    buildDashRow(tr, dep.label, total, completed, training, resign, transfer);
  });

  // Footer totals row
  const tfoot = table.createTFoot();
  const frow  = tfoot.insertRow();
  frow.className = 'dash-total-row';
  buildDashRow(frow, t('total'), grandTotal, grandCompleted, grandTraining, grandResign, grandTransfer);

  // 1.4 wrap in scrollable container so it doesn't overflow on small screens
  const wrap = document.createElement('div');
  wrap.className = 'home-dash-table-wrap';
  wrap.appendChild(table);
  gridEl.appendChild(wrap);
  renderAnalytics(yearFilter);
}

// ===== OVERALL DASHBOARD EXPORT (PNG / PDF) =====
// Captures `.home-dash-card` (table + analytics) at its current state — filters
// applied appear in the export exactly as on screen. Controls (the export bar
// itself) are skipped via html2canvas's ignoreElements option.
function exportTimestamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`;
}

async function captureDashboardCanvas() {
  if (typeof html2canvas !== 'function') {
    throw new Error('html2canvas library not loaded');
  }
  const card = document.querySelector('.home-dash-card');
  if (!card) throw new Error('Dashboard card not found');

  // Use the body's computed background so dark/light theme is honored
  const bg = getComputedStyle(document.body).backgroundColor || '#ffffff';

  // Inject a temporary year badge next to the title so the exported image
  // shows which time period the data covers. Removed in `finally`.
  const titleEl = card.querySelector('.home-dash-header h2');
  const yearVal = ($('homeDashYearFilter') || {}).value || '';
  const yearText = yearVal || t('allYears');
  const yearTag = document.createElement('span');
  yearTag.className = 'export-year-tag';
  yearTag.textContent = `${t('yearLabel')}: ${yearText}`;
  if (titleEl) titleEl.appendChild(yearTag);

  try {
    return await html2canvas(card, {
      backgroundColor: bg,
      scale: 2,                 // 2x for retina-sharp output
      useCORS: true,
      logging: false,
      windowWidth: document.documentElement.scrollWidth,
      // Skip the controls row (PNG/PDF/year/refresh) so the export looks clean
      ignoreElements: (el) =>
        !!(el.classList && el.classList.contains('home-dash-controls')),
    });
  } finally {
    if (yearTag.parentNode) yearTag.remove();
  }
}

async function exportDashboardPng() {
  const btn = $('exportPngBtn');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  try {
    const canvas = await captureDashboardCanvas();
    const link = document.createElement('a');
    link.download = `overall-dashboard_${exportTimestamp()}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('[ExportPNG]', err);
    showMessage(err.message || 'Export PNG failed', true);
  } finally {
    btn.disabled = false;
  }
}

async function exportDashboardPdf() {
  const btn = $('exportPdfBtn');
  if (!btn || btn.disabled) return;
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showMessage('jsPDF library not loaded', true);
    return;
  }
  btn.disabled = true;
  try {
    const canvas = await captureDashboardCanvas();
    const { jsPDF } = window.jspdf;

    // Single page sized to fit the content exactly (px unit, with px_scaling hotfix)
    const w = canvas.width;
    const h = canvas.height;
    const pdf = new jsPDF({
      orientation: w > h ? 'landscape' : 'portrait',
      unit: 'px',
      format: [w, h],
      hotfixes: ['px_scaling'],
      compress: true,
    });
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h);
    pdf.save(`overall-dashboard_${exportTimestamp()}.pdf`);
  } catch (err) {
    console.error('[ExportPDF]', err);
    showMessage(err.message || 'Export PDF failed', true);
  } finally {
    btn.disabled = false;
  }
}

// ===== BU DASHBOARD ANALYTICS EXPORT (PNG / PDF) =====
// Same approach as the Overall Dashboard export above, but scoped to just
// `#newop-stats` so each BU can save its own Data Analytics block — table
// rows below it are not included.
async function captureNewOpAnalyticsCanvas(deptKey) {
  if (typeof html2canvas !== 'function') {
    throw new Error('html2canvas library not loaded');
  }
  const el = $('newop-stats');
  if (!el) throw new Error('Analytics section not found');

  const bg = getComputedStyle(document.body).backgroundColor || '#ffffff';

  // Inject a temporary BU + year badge next to the title, same pattern as
  // the Overall Dashboard export. Removed in `finally`.
  const titleEl   = el.querySelector('.analytics-section-hdr h3');
  const deptLabel = (departments.find(d => d.key === deptKey) || {}).label || deptKey;
  const yearText  = currentYearFilter || t('allYears');
  const tag = document.createElement('span');
  tag.className = 'export-year-tag';
  tag.textContent = `${deptLabel} · ${t('yearLabel')}: ${yearText}`;
  if (titleEl) titleEl.appendChild(tag);

  try {
    return await html2canvas(el, {
      backgroundColor: bg,
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: document.documentElement.scrollWidth,
      // Skip the PNG/PDF buttons themselves so the export looks clean
      ignoreElements: (node) =>
        !!(node.classList && node.classList.contains('analytics-export-controls')),
    });
  } finally {
    if (tag.parentNode) tag.remove();
  }
}

async function exportNewOpAnalyticsPng(deptKey) {
  const btn = $('newopExportPngBtn');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  try {
    const canvas = await captureNewOpAnalyticsCanvas(deptKey);
    const link = document.createElement('a');
    link.download = `newop-analytics_${deptKey}_${exportTimestamp()}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('[ExportNewOpPNG]', err);
    showMessage(err.message || 'Export PNG failed', true);
  } finally {
    btn.disabled = false;
  }
}

async function exportNewOpAnalyticsPdf(deptKey) {
  const btn = $('newopExportPdfBtn');
  if (!btn || btn.disabled) return;
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showMessage('jsPDF library not loaded', true);
    return;
  }
  btn.disabled = true;
  try {
    const canvas = await captureNewOpAnalyticsCanvas(deptKey);
    const { jsPDF } = window.jspdf;

    const w = canvas.width;
    const h = canvas.height;
    const pdf = new jsPDF({
      orientation: w > h ? 'landscape' : 'portrait',
      unit: 'px',
      format: [w, h],
      hotfixes: ['px_scaling'],
      compress: true,
    });
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h);
    pdf.save(`newop-analytics_${deptKey}_${exportTimestamp()}.pdf`);
  } catch (err) {
    console.error('[ExportNewOpPDF]', err);
    showMessage(err.message || 'Export PDF failed', true);
  } finally {
    btn.disabled = false;
  }
}

// ===== OPEN EDIT MODAL (search) =====
async function openEditModal(employeeId) {
  currentEmployeeId = employeeId;
  try {
    const query = getHolidayQuery();
    const emp = await api(
      `/api/${currentDepartment}/employees/${encodeURIComponent(employeeId)}${query ? '?' + query : ''}`
    );
    fillEditForm(emp);
    show($('editModal'));
  } catch (err) {
    showMessage(err.message, true);
  }
}

// ===== CREATE EMPLOYEE =====
async function createNewEmployee() {
  const payload = {
    'Employee ID':    $('newEmployeeId').value.trim(),
    'Employee Name':  $('newEmployeeName').value.trim(),
    'CSA Start Date': $('newCsaStartDate').value,
    'Type':           currentNewOpType || 'Sewing', // fallback to Sewing when Overall is active
  };
  if (!payload['Employee ID']) {
    showMessage(t('pleaseEnterEmployeeId'), true);
    return;
  }
  try {
    await api(`/api/${currentDepartment}/employees`, { method: 'POST', body: JSON.stringify(payload) });
    const createdYear = (payload['CSA Start Date'] || '').slice(0, 4);
    $('newEmployeeId').value   = '';
    $('newEmployeeName').value = '';
    $('newCsaStartDate').value = '';
    closeRegisterModal();
    showMessage(t('created'));

    // Make the just-created operator visible without a manual page reload:
    // a lingering status filter (new rows are always "Not Started") or year
    // filter (new rows are dated today) would otherwise hide the fresh row.
    // Clear the status filter and pin the year filter to the new row's year.
    currentFilter     = '';
    currentYearFilter = createdYear || '';
    const statusSel = $('statusFilter');
    if (statusSel) statusSel.value = '';
    _newOpTableState.page = 1;

    await loadDashboard();                 // re-fetch + render using the filters above
    const yearSel = $('empYearFilter');    // sync the rebuilt dropdown to the pinned year
    if (yearSel) yearSel.value = currentYearFilter;
  } catch (err) {
    showMessage(err.message, true);
  }
}

// ===== SEARCH EMPLOYEE =====
function searchEmployee() {
  const keyword = $('searchEmployeeId').value.trim().toLowerCase();
  
  // ✨ เปลี่ยนมาใช้ตัวแปร 'lastEmployees' ซึ่งเป็นตัวแปร Master Data จริงของหน้านี้
  const sourceData = lastEmployees || []; 
  
  const filtered = sourceData.filter(emp => {
    // ✨ จับคู่ให้ตรงกับชื่อฟิลด์จริง 'Employee ID' และ 'Employee Name' ของระบบคุณ
    const empId = (emp['Employee ID'] || '').toString().toLowerCase();
    const empName = (emp['Employee Name'] || '').toLowerCase();
    
    return empId.includes(keyword) || empName.includes(keyword);
  });
  
  // ✨ เพิ่มลอจิกรีเซ็ตหน้ากลับไปหน้า 1 ป้องกันบั๊กตารางว่าง (ถ้ามีตัวแปรคุม State ในระบบ)
  if (typeof _newOpTableState !== 'undefined') {
    _newOpTableState.page = 1;
  }
  
  // ✨ เรียกใช้ฟังก์ชันวาดตารางตัวจริงของหน้า New Operator
  renderEmployeeTable(filtered); 
}

// ===== EDIT FORM (modal) =====
function fillEditForm(emp) {
  const form   = $('editForm');
  const fields = [
    'Employee ID', 'Employee Name', 'Type', 'Grade',
    'CSA Start Date', 'Basic Start', 'Basic End',
    'Operation Start', 'Operation End', 'Resign Date',
    'Transfers Date', 'Graduate Eff', 'Comment',
  ];
  fields.forEach(name => {
    const input = form.elements[name];
    if (!input) return;
    if (name === 'Type') {
      input.value = (emp['Type'] || '').trim() || 'Sewing'; // blank/legacy rows default to Sewing
      return;
    }
    input.value = input.type === 'date' ? normalizeDateForInput(emp[name]) : (emp[name] || '');
  });

  const calc = emp.calculated || {};
  lastCalc = calc;
  $('statusBadge').textContent   = t(STATUS_KEY_MAP[computeActualStatus(emp, calc)] || '');
  $('statusBadge').className     = `badge ${statusBadgeClass(computeActualStatus(emp, calc))}`;
  $('remainingDays').textContent = calc.remaining_days ?? '-';
  $('progressBar').style.width   = `${calc.progress || 0}%`;
  $('dueDateText').textContent   = `${t('dueDate')}: ${normalizeDateForInput(emp['Due date']) || calc.due_date || '-'}`;
}

async function saveEditForm(event) {
  event.preventDefault();
  const form     = $('editForm');
  const formData = new FormData(form);
  const payload  = {};
  for (const [key, value] of formData.entries()) payload[key] = value;
  payload._holidays = holidays;

  try {
    const data = await api(
      `/api/${currentDepartment}/employees/${encodeURIComponent(currentEmployeeId)}`,
      { method: 'PATCH', body: JSON.stringify(payload) }
    );
    fillEditForm(data.employee);
    // Update cache
    const idx = lastEmployees.findIndex(e => String(e['Employee ID']) === String(currentEmployeeId));
    if (idx >= 0) lastEmployees[idx] = data.employee;
    showMessage(t('updated'));
    renderEmployeeTable(lastEmployees);
  } catch (err) {
    showMessage(err.message, true);
  }
}

// ===== TAB BAR =====
let activeMainTab = 'newOperator';

let _adminBtnAllowedByRole = false;

// Role badge label — fixed per door/mode, not run through t() since it's the
// same in every language (it identifies which door+mode the session came from).
function _roleBadgeText(role) {
  switch (role) {
    case 'csa_user':   return 'CSA';
    case 'qe_edit':    return 'GICA Edit Mode';
    case 'qe_read':    return 'GICA View Mode';
    case 'gica_admin': return 'GICA Admin Mode';
    case 'qe_audit':   return 'QE (Auditor)';
    case 'qe_auditee': return 'QE (Auditee)';
    case 'admin':      return 'Admin';
    case 'viewer':     return 'Viewer';
    default:           return '';
  }
}

// Topbar brand title/subtitle — fixed per door (not translated, same as the
// role badge), so this overrides the generic appTitle/appSubtitle i18n text
// once role is known. Must be re-applied after applyTranslations() runs again
// (language switch), since that resets every [data-i18n] element including these.
function _applyRoleBrandTitle(role) {
  const titleEl = document.querySelector('.topbar-brand h1');
  const subEl   = document.querySelector('.topbar-brand p');
  if (!titleEl || !subEl) return;
  if (role === 'csa_user') {
    titleEl.textContent = 'CSA Dashboard';
    subEl.textContent   = 'Center of Skill Acquisition';
  } else if (role === 'qe_edit' || role === 'qe_read') {
    titleEl.textContent = 'GICA Dashboard';
    subEl.textContent   = 'Garment Inspection Competency Assessment';
  } else if (role === 'qe_audit' || role === 'qe_auditee') {
    titleEl.textContent = 'Audit Dashboard';
    subEl.textContent   = 'Internal Process Audit';
  } else if (role === 'admin') {
    titleEl.textContent = 'FSK Dashboard';
    subEl.textContent   = 'Center of Skill Acquisition · Garment Inspection Competency Assessment';
  }
}

function initTabBar() {
  const TAB_IDS = ['newOperator', 'jumper', 'trainer', 'sewingOperator', 'gica', 'audit'];
  const btnGroup = document.getElementById('mainTabBar');
  if (!btnGroup) return;

  const switchTab = (tabKey) => {
    activeMainTab = tabKey;
    // update button states
    btnGroup.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabKey);
    });
    // show/hide content panels
    TAB_IDS.forEach(id => {
      const el = document.getElementById('tabContent-' + id);
      if (el) el.classList.toggle('hidden', id !== tabKey);
    });
    // Admin Settings (Special Holidays) is a New Operator feature — never show
    // it while on the GICA/Audit tabs, even for admin/csa_user sessions that can write.
    $('adminBtn')?.classList.toggle('hidden', tabKey === 'gica' || tabKey === 'audit' || !_adminBtnAllowedByRole);
    if (tabKey === 'gica')       requestAnimationFrame(syncGicaSubtabTop);
    if (tabKey === 'audit')      requestAnimationFrame(syncAuditSubtabTop);
    if (tabKey === 'newOperator') requestAnimationFrame(syncNewOpSubtabTop);
    // update placeholder text if i18n already loaded
    TAB_IDS.forEach(id => {
      const ph = document.getElementById('tabPlaceholder-' + id);
      if (ph) ph.textContent = t('tabComingSoon');
    });
  };

  // expose for use by selectDepartmentKey
  _switchMainTab = switchTab;

  btnGroup.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      switchTab(btn.dataset.tab);
      if (btn.dataset.tab === 'jumper')  initJumperTab();
      if (btn.dataset.tab === 'trainer') initTrainerTab();
      if (btn.dataset.tab === 'gica')    initGicaTab();
      if (btn.dataset.tab === 'audit')   initAuditTab();
    };
  });

  // sync button labels with current language
  btnGroup.querySelectorAll('.tab-btn[data-i18n]').forEach(btn => {
    btn.textContent = t(btn.dataset.i18n);
  });
}

// ===== INIT =====
function syncTabBarTop() {
  const topbarEl = document.querySelector('.topbar');
  const tabBarEl = document.getElementById('mainTabBar');
  if (topbarEl && tabBarEl) tabBarEl.style.top = topbarEl.offsetHeight + 'px';
}

// .gica-subtab-bar is a third stacked sticky bar — it must sit below both the
// topbar (sticky top:0) and #mainTabBar (sticky top:<topbar height>), otherwise
// it tries to stick at the same y=0 region and gets hidden under them.
function syncGicaSubtabTop() {
  const topbarEl = document.querySelector('.topbar');
  const tabBarEl = document.getElementById('mainTabBar');
  const subtabEl = document.querySelector('#tabContent-gica .gica-subtab-bar');
  if (topbarEl && tabBarEl && subtabEl) {
    subtabEl.style.top = (topbarEl.offsetHeight + tabBarEl.offsetHeight) + 'px';
  }
}

// Separate from syncGicaSubtabTop because both tabs reuse the .gica-subtab-bar
// class — a single generic selector would always resolve to whichever one is
// first in the DOM, even while hidden (offsetHeight 0), breaking the other tab.
function syncAuditSubtabTop() {
  const topbarEl = document.querySelector('.topbar');
  const tabBarEl = document.getElementById('mainTabBar');
  const subtabEl = document.querySelector('#tabContent-audit .gica-subtab-bar');
  if (topbarEl && tabBarEl && subtabEl) {
    subtabEl.style.top = (topbarEl.offsetHeight + tabBarEl.offsetHeight) + 'px';
  }
}

// Same stacking reason as syncGicaSubtabTop above, for the New Operator
// page's own Sewing/QC-QA subtab bar. Kept as a separate class/function
// (not reusing .gica-subtab-bar) because both bars can be present in the DOM
// at once (different tabs, just hidden) — sharing a class would make
// querySelector only ever sync whichever one comes first in the DOM.
function syncNewOpSubtabTop() {
  const topbarEl = document.querySelector('.topbar');
  const tabBarEl = document.getElementById('mainTabBar');
  const subtabEl = document.querySelector('.newop-subtab-bar');
  if (topbarEl && tabBarEl && subtabEl) {
    subtabEl.style.top = (topbarEl.offsetHeight + tabBarEl.offsetHeight) + 'px';
  }
}

// Wires the Sewing/QC-QA subtab bar on the New Operator landing page.
// Both subtabs reuse the same dashboard markup — switching just changes
// currentNewOpType and re-renders against already-fetched data (no refetch),
// scoped via the "Type" column added to each BU's Excel table.
function _newOpShowTechnicPlaceholder(show) {
  const placeholder = $('newop-technic-panel');
  const dashCard    = $('homeDashCard');
  const dashLoading = $('homeDashLoading');
  if (placeholder) placeholder.classList.toggle('hidden', !show);
  if (dashCard)    dashCard.classList.toggle('hidden', show);
  if (dashLoading && show) dashLoading.classList.add('hidden');
}

function initNewOpSubtabs() {
  const TYPE_MAP = { overall: null, sewing: 'Sewing', qcqa: 'QC/QA', technic: 'Technic' };
  document.querySelectorAll('.newop-subtab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.newop-subtab-btn').forEach(b =>
        b.classList.toggle('newop-subtab-btn--active', b === btn));
      const subtab = btn.dataset.subtab;
      currentNewOpType = TYPE_MAP[subtab] ?? null;

      if (subtab === 'technic') {
        _newOpShowTechnicPlaceholder(true);
        return;
      }
      _newOpShowTechnicPlaceholder(false);

      // Re-render against already-cached allDeptData
      if (Object.keys(allDeptData).length) {
        _rebuildHomeDashYearOptions();
        renderHomeDashboard($('homeDashYearFilter').value);
      }
    };
  });
}

// ===== LOGIN PARTICLE ANIMATION =====
let _loginRafId = null;

function startLoginParticles() {
  if (_loginRafId) return;
  const canvas = document.getElementById('loginParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = Array.from({ length: 70 }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.8 + 0.6,
      dx: (Math.random() - 0.5) * 0.45,
      dy: (Math.random() - 0.5) * 0.45,
      o:  Math.random() * 0.35 + 0.08,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.o})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    _loginRafId = requestAnimationFrame(draw);
  }

  resize();
  initParticles();
  draw();
  window.addEventListener('resize', () => { resize(); initParticles(); });
}

// ===== LOGIN FORM (Supabase email / password) =====

async function _doLogin(email, password) {
  const errEl  = $('loginError');
  const btn    = $('loginSubmitBtn');
  const origTx = btn ? btn.textContent : 'Sign In';
  if (errEl) { errEl.textContent = ''; errEl.classList.add('hidden'); }
  if (btn)   { btn.disabled = true; btn.textContent = 'Signing in…'; }
  try {
    const result = await api('/api/auth/login', {
      method: 'POST',
      body:   JSON.stringify({ email, password }),
    });
    _saveJwt(result.access_token);
    window.location.reload();
  } catch (err) {
    if (errEl) { errEl.textContent = err.message || 'Invalid email or password'; errEl.classList.remove('hidden'); }
    if (btn)   { btn.disabled = false; btn.textContent = origTx; }
  }
}

async function _doLogout() {
  try { await api('/api/auth/logout', { method: 'POST' }); } catch (_) {}
  _saveJwt('');
  window.location.reload();
}

function initLoginForm() {
  const form = $('loginForm');
  if (!form) return;

  // Single-field login: the value entered acts as both the identifier (empid) and the
  // Supabase password. Each Supabase user must be provisioned with password === empid.
  const savedId  = localStorage.getItem('login_remember_id');
  const passEl   = $('loginPassword');
  const remEl    = $('loginRemember');
  if (savedId && passEl) passEl.value = savedId;
  if (savedId && remEl)  remEl.checked = true;

  const toggleBtn = $('loginPwToggle');
  if (toggleBtn && passEl) {
    toggleBtn.addEventListener('click', () => {
      const shown = passEl.type === 'text';
      passEl.type = shown ? 'password' : 'text';
      toggleBtn.setAttribute('aria-label', shown ? 'Show password' : 'Hide password');
      toggleBtn.querySelector('i').className = shown ? 'ti ti-eye' : 'ti ti-eye-off';
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const raw = ($('loginPassword')?.value || '').trim();
    if (!raw) return;

    if ($('loginRemember')?.checked) localStorage.setItem('login_remember_id', raw);
    else                             localStorage.removeItem('login_remember_id');

    const email = raw.includes('@') ? raw : `${raw}@manu.local`;
    _doLogin(email, raw);
  });
}

async function init() {
  initTheme();
  initLang();
  initTabBar();
  syncTabBarTop();
  syncGicaSubtabTop();
  syncNewOpSubtabTop();
  initNewOpSubtabs();
  window.addEventListener('resize', syncTabBarTop);
  window.addEventListener('resize', syncGicaSubtabTop);
  window.addEventListener('resize', syncNewOpSubtabTop);
  initAdmin();
  initRegisterModal();
  initEditModal();

  // Status filter
  $('statusFilter').onchange = () => {
    currentFilter = $('statusFilter').value;
    _newOpTableState.page = 1;
    renderEmployeeTable(lastEmployees);
  };

  // Employee year filter
  $('empYearFilter').onchange = () => {
    currentYearFilter = $('empYearFilter').value;
    _newOpTableState.page = 1;
    renderEmployeeTable(lastEmployees);
  };

  // New Operator table pagination
  $('newop-pageSize').onchange = () => {
    _newOpTableState.pageSize = +$('newop-pageSize').value;
    _newOpTableState.page = 1;
    renderEmployeeTable(lastEmployees);
  };
  $('newop-prevPage').onclick = () => {
    if (_newOpTableState.page <= 1) return;
    _newOpTableState.page--;
    const sy = window.scrollY;
    renderEmployeeTable(lastEmployees);
    requestAnimationFrame(() => window.scrollTo({ top: sy, behavior: 'instant' }));
  };
  $('newop-nextPage').onclick = () => {
    _newOpTableState.page++;
    const sy = window.scrollY;
    renderEmployeeTable(lastEmployees);
    requestAnimationFrame(() => window.scrollTo({ top: sy, behavior: 'instant' }));
  };

  // Home dashboard year filter + refresh
  $('homeDashYearFilter').onchange = () => {
    renderHomeDashboard($('homeDashYearFilter').value);
  };
  $('homeDashRefreshBtn').onclick = () => {
    allDeptData = {};
    loadHomeDashboard();
  };

  // Overall Dashboard export buttons
  $('exportPngBtn').onclick = exportDashboardPng;
  $('exportPdfBtn').onclick = exportDashboardPdf;

  // Holiday add button
  $('addHolidayBtn').onclick = () => {
    const value = $('holidayInput').value;
    if (value && !holidays.includes(value)) {
      holidays.push(value);
      holidays.sort();
      localStorage.setItem('specialHolidays', JSON.stringify(holidays));
      $('holidayInput').value = '';
      renderHolidays();
      if (currentDepartment) loadDashboard();
    }
  };

  // Navigation buttons
  $('backHomeBtn').onclick = () => setPage('home');
  $('refreshBtn').onclick  = loadDashboard;
  $('searchEmployeeId').oninput = () => {
  searchEmployee();
};

  // Table event delegation: edit, confirm, cancel
  $('employeeTableBody').addEventListener('click', async (e) => {
    // Inline edit — start
    const editBtn = e.target.closest('.btn-row-edit');
    if (editBtn) {
      const empId = editBtn.dataset.id;
      const tr    = editBtn.closest('tr');
      const emp   = lastEmployees.find(em => String(em['Employee ID']) === String(empId));
      if (emp && tr) {
        const calc = emp.calculated || {};
        startInlineEdit(tr, emp, calc, computeActualStatus(emp, calc));
      }
      return;
    }

    // Inline edit — confirm
    const confirmBtn = e.target.closest('.btn-confirm-inline');
    if (confirmBtn) {
      const tr = confirmBtn.closest('tr');
      await confirmInlineEdit(tr, tr.dataset.employeeId);
      return;
    }

    // Inline edit — cancel
    const cancelBtn = e.target.closest('.btn-cancel-inline');
    if (cancelBtn) {
      const tr    = cancelBtn.closest('tr');
      const empId = tr.dataset.employeeId;
      const emp   = lastEmployees.find(em => String(em['Employee ID']) === String(empId));
      if (emp && tr) {
        const calc = emp.calculated || {};
        cancelInlineEdit(tr, emp, calc, computeActualStatus(emp, calc));
      }
      return;
    }
  });

  initLoginForm();

  // Check auth — JWT already set in _sbJwt if user was previously signed in
  const me = await api('/api/me');
  if (!me.authenticated) {
    show($('loginPanel'));
    startLoginParticles();
    return;
  }

  currentUser    = me.user;
  currentRole    = me.role || 'viewer';
  _currentUserBu = me.bu || null;

  const VIEW_ONLY_ROLES = ['viewer'];
  const QE_ROLES        = ['qe_edit', 'qe_read'];
  const CSA_ROLES       = ['csa_user'];
  const isViewOnly = currentRole === 'viewer';

  // Apply view-only mode — hides all write controls
  if (isViewOnly) document.body.classList.add('view-only');

  // Role badge — fixed labels per role.
  const badgeText = _roleBadgeText(currentRole);
  const badge = $('roleBadge');
  if (badge && badgeText) {
    badge.textContent = badgeText;
    badge.classList.remove('hidden');
  }
  _applyRoleBrandTitle(currentRole);

  const userLabel = (me.user?.name || me.user?.email || '');
  $('authBox').innerHTML = `${userLabel ? userLabel + ' · ' : ''}` +
    `<a href="#" id="logoutLink">${t('logout')}</a>`;
  $('logoutLink')?.addEventListener('click', e => { e.preventDefault(); _doLogout(); });

  // Standalone logout link — visible replacement while authBox is hidden.
  // Remove the .hidden inline swap when re-enabling authBox.
  const logoutStandalone = $('logoutLinkStandalone');
  if (logoutStandalone) {
    logoutStandalone.classList.remove('hidden');
    logoutStandalone.textContent = t('logout');
    logoutStandalone.onclick = e => { e.preventDefault(); _doLogout(); };
  }
  show($('mainTabBar'));
  // Admin panel is a write surface (holidays) — hide it for any view-only session,
  // and switchTab() additionally hides it while on the GICA tab (see initTabBar).
  _adminBtnAllowedByRole = !isViewOnly;
  if (_adminBtnAllowedByRole) show($('adminBtn'));
  // Force Refresh is Admin Sign In only
  $('forceRefreshSection')?.classList.toggle('hidden', currentRole !== 'admin');

  // Role-based tab visibility:
  //   csa_user         → CSA tabs only
  //   qe_edit / qe_read → GICA only (qe_read = read-only, qe_edit = can write)
  //   qe_audit / qe_auditee → Audit only
  //   admin / viewer   → all tabs
  if (currentRole === 'admin' || currentRole === 'viewer') {
    // no-op — all tabs visible by default
  } else if (currentRole === 'qe_audit' || currentRole === 'qe_auditee') {
    ['newOperator', 'jumper', 'trainer', 'sewingOperator', 'gica'].forEach(id => {
      $('tabItem-' + id)?.classList.add('hidden');
      document.querySelector(`.tab-btn[data-tab="${id}"]`)?.classList.add('hidden');
    });
    if (_switchMainTab) _switchMainTab('audit');
    initAuditTab();
    return;
  } else if (currentRole === 'qe_edit' || currentRole === 'qe_read' || currentRole === 'gica_admin') {
    ['newOperator', 'jumper', 'trainer', 'sewingOperator'].forEach(id => {
      $('tabItem-' + id)?.classList.add('hidden');
      document.querySelector(`.tab-btn[data-tab="${id}"]`)?.classList.add('hidden');
    });
    document.querySelector('.tab-btn[data-tab="audit"]')?.classList.add('hidden');
    if (_switchMainTab) _switchMainTab('gica');
    initGicaTab();
    return;
  } else if (currentRole === 'csa_user') {
    document.querySelector('.tab-btn[data-tab="gica"]')?.classList.add('hidden');
    document.querySelector('.tab-btn[data-tab="audit"]')?.classList.add('hidden');
  }

  departments = await api('/api/departments');
  if (!Array.isArray(departments)) departments = [];
  renderDepartmentButtons();
  renderHolidays();
  setPage('home');

  // Load home dashboard in background
  loadHomeDashboard();
}

// =============================================================================
// JUMPER SKILL TAB
// Data comes from /api/jumper-data (Flask → OneDrive via MANAGER_REFRESH_TOKEN).
// Mirrors the "Jumper Skill" view in the local NiSE Jumper Dashboard.
// =============================================================================

const JUMPER_POSITIONS = [
  'Jumper Sewing Center',
  'Jumper Sewing Inline',
  'Jumper Sewing Machine Operation',
];
const JUMPER_COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed', '#0891b2', '#db2777'];
const BU_ORDER = ['G1', 'G3', 'G2', 'G4', 'TRM', 'EA'];
function sortBus(arr) {
  return [...arr].sort((a, b) => {
    const ai = BU_ORDER.indexOf(a), bi = BU_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}
const TRAINER_PT_COLORS = [
  '#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed', '#0891b2', '#db2777',
  '#ea580c', '#65a30d', '#0d9488', '#9333ea', '#0284c7', '#be123c', '#854d0e',
  '#166534', '#1e40af', '#86198f', '#0f766e', '#b91c1c', '#4338ca',
];

// BU name aliases: raw key from NiSE → display name shown in the dashboard
// (NiSE stores "NYV"; we show "EA" to match the rest of the app)
const JUMPER_BU_ALIASES = { NYV: 'EA' };

// Re-key an object using BU aliases  { NYV: [...] } → { EA: [...] }
function applyBuAliases(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    out[JUMPER_BU_ALIASES[k] ?? k] = v;
  }
  return out;
}

// ── module state ──────────────────────────────────────────────────────────────
let _jumperByBu   = {};   // raw jumper data keyed by BU
let _jumperSewOp  = {};   // raw sewingOperator data keyed by BU
let _jumperRows   = [];   // normalized flat rows
let _jumperCharts = {};   // Chart.js instances { canvasId: Chart }
let _jumperInsideMode = 'positionCount';   // 'avgSkill' | 'positionCount'
let _jumperLoaded = false;
const _jumperTableState = {
  page: 1, pageSize: 10, sortKey: 'bu', sortDir: 1,
  filters: { bu: '', expired: '', search: '' },
};

// ── helpers ───────────────────────────────────────────────────────────────────

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function normalizeJumperRows(byBu) {
  const rows = [];
  for (const [rawBu, emps] of Object.entries(byBu || {})) {
    const bu = JUMPER_BU_ALIASES[rawBu] ?? rawBu;  // NYV → EA (or keep as-is)
    for (const e of emps) {
      rows.push({
        bu,
        empid:          e.empid            || '',
        firstname:      e.firstname        || '',
        deptname:       e.deptname         || '',
        position:       e.positionnameeng  || '',
        skill:          Number(e.skill_count)   || 0,
        expired:        Number(e.expired_count) || 0,
        trainingStatus: String(e.training_status || '').trim().toUpperCase(),
      });
    }
  }
  return rows;
}

// ── JT_PROD: Jumper Training Progress tracker ─────────────────────────────────
// trained count comes from Excel column "Training Status" (Y = trained, N = not trained)
const JT_PROD = {
  _bus: [], _rows: [],

  _data(bu, pos) {
    const posRows = this._rows.filter(r =>
      r.bu === bu && r.position === JUMPER_POSITIONS[pos === 'c' ? 0 : 1]
    );
    const total   = posRows.length;
    const trained = posRows.filter(r => r.trainingStatus === 'Y').length;
    return { trained, total };
  },

  _svg(trained, total) {
    if (total === 0) {
      return `<div style="height:72px;display:flex;align-items:center;justify-content:center;font-size:0.65rem;color:#d1d5db;">—</div>`;
    }
    const ratio = Math.min(Math.max(trained / total, 0), 1);
    const R = 14;
    const C = 2 * Math.PI * R;
    const dash  = (ratio * C).toFixed(2);
    const space = (C - ratio * C).toFixed(2);
    const col   = ratio >= 1 ? '#16a34a' : '#dc2626';
    return `<svg viewBox="0 0 36 36" width="72" height="72">
      <circle cx="18" cy="18" r="${R}" fill="none" stroke="var(--badge-danger-bg)" stroke-width="6"/>
      <circle cx="18" cy="18" r="${R}" fill="none" stroke="${col}" stroke-width="6"
        stroke-dasharray="${dash} ${space}" stroke-dashoffset="0"
        style="transition:stroke-dasharray .4s ease;transform:rotate(-90deg);transform-origin:18px 18px;"/>
      <text x="18" y="15.5" text-anchor="middle" font-size="6.5" style="fill:var(--text)" font-weight="700">${trained}</text>
      <text x="18" y="22"   text-anchor="middle" font-size="3.5" style="fill:var(--text-muted)">/ ${total}</text>
    </svg>`;
  },

  _block(bu, pos, label) {
    const d   = this._data(bu, pos);
    const pct = d.total > 0 ? Math.round(d.trained / d.total * 100) : 0;
    return `<div style="text-align:center;">
      ${this._svg(d.trained, d.total)}
      <div style="font-size:0.65rem;color:var(--text-muted);margin-top:2px;">${label}</div>
      <div style="font-size:0.65rem;font-weight:700;color:${pct >= 100 ? 'var(--ok)' : 'var(--text)'};">${pct}%</div>
    </div>`;
  },

  render() {
    const wrap = document.getElementById('jtp-row3');
    if (!wrap) return;
    wrap.innerHTML = this._bus.map((bu) => `
      <div class="card" style="padding:14px;display:flex;flex-direction:column;">
        <div style="text-align:center;margin-bottom:10px;">
          <span style="font-size:0.6rem;color:var(--text-muted);background:var(--surface2);padding:1px 5px;border-radius:10px;">Training Status</span>
        </div>
        <div style="display:flex;justify-content:space-around;align-items:center;flex:1;gap:4px;">
          ${this._block(bu, 'c', 'Center')}
          ${this._block(bu, 'i', 'Inline')}
        </div>
      </div>`).join('');
  },

  init(bus, rows) { this._bus = bus; this._rows = rows; this.render(); },
};
window._JTP = JT_PROD;

// ── Chart.js wrappers ─────────────────────────────────────────────────────────

function _makeJumperBarChart(canvasId, label, labels, data) {
  if (!document.getElementById(canvasId)) return;
  if (typeof Chart === 'undefined') return;
  const existing = _jumperCharts[canvasId];
  if (existing) { existing.destroy(); }
  _jumperCharts[canvasId] = new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: { labels, datasets: [{ label, data, backgroundColor: JUMPER_COLORS }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 400, easing: 'easeOutQuart' },
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, grace: '10%' } },
    },
  });
}

function _makeJumperPositionChart(canvasId, bus, cA, iA, sewCounts) {
  if (!document.getElementById(canvasId)) return;
  if (typeof Chart === 'undefined') return;
  const existing = _jumperCharts[canvasId];
  if (existing) { existing.destroy(); }

  const cTgt = sewCounts.map(n => Math.round(n * 0.025));
  const iTgt = sewCounts.map(n => Math.round(n * 0.05));
  const cGap = cA.map((a, i) => Math.max(0, cTgt[i] - a));
  const iGap = iA.map((a, i) => Math.max(0, iTgt[i] - a));

  // Flatten: [Center_BU0, Inline_BU0, Center_BU1, Inline_BU1, ...]
  const labels     = bus.flatMap(() => ['Center', 'Inline']);
  const actualData = bus.flatMap((_, i) => [cA[i], iA[i]]);
  const gapData    = bus.flatMap((_, i) => [cGap[i], iGap[i]]);
  const targetData = bus.flatMap((_, i) => [cTgt[i], iTgt[i]]);

  // Center=full opacity, Inline=slightly muted to distinguish visually
  const actualColors = bus.flatMap((_, i) => [
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 1.0),
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 0.65),
  ]);
  const gapColors = bus.flatMap((_, i) => [
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 0.28),
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 0.22),
  ]);

  _jumperCharts[canvasId] = new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Actual',
          data: actualData,
          backgroundColor: actualColors,
          stack: 'stack',
        },
        {
          label: 'Gap to target',
          data: gapData,
          backgroundColor: gapColors,
          stack: 'stack',
          _targetData: targetData,
          _actualData: actualData,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 400, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title(items) {
              const raw = items[0].label;
              return Array.isArray(raw) ? raw.join(' — ') : String(raw);
            },
            label(ctx) {
              const ds = ctx.dataset;
              const idx = ctx.dataIndex;
              if (ds._targetData) {
                const tgt = ds._targetData[idx];
                const act = ds._actualData[idx];
                if (ctx.raw === 0) return `เป้า: ${tgt} คน ✓ ถึงเป้าแล้ว`;
                return `เป้า: ${tgt} คน  (จริง ${act} / ขาด ${ctx.raw})`;
              }
              return `จริง: ${ctx.raw} คน`;
            },
          },
        },
      },
      scales: {
        x: { stacked: true },
        y: { beginAtZero: true, grace: '10%', stacked: true },
      },
    },
  });

  const legendEl = document.getElementById('jtp-positionLegend');
  if (legendEl) {
    const buSwatches = bus.map((bu, i) =>
      `<span style="display:inline-flex;align-items:center;gap:4px;">
        <span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:${JUMPER_COLORS[i % JUMPER_COLORS.length]};flex-shrink:0;"></span>
        <span style="font-size:0.75rem;">${escapeHtml(bu)}</span>
      </span>`
    ).join('');
    legendEl.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:10px;padding-top:8px;border-top:1px solid var(--border);">
        ${buSwatches}
        <span style="margin-left:auto;font-size:0.72rem;color:var(--text-muted);white-space:nowrap;">■ = Actual &nbsp; ░ = Gap to Target</span>
      </div>`;
  }
}

// ── Summary cards (3 rows) ────────────────────────────────────────────────────

function _computeJumperSummary(rows, busKeys, sewOpByBu) {
  const bus       = sortBus(busKeys);
  const totalAll  = rows.length;
  const centerAll = rows.filter(r => r.position === JUMPER_POSITIONS[0]).length;
  const inlineAll = rows.filter(r => r.position === JUMPER_POSITIONS[1]).length;
  const avgSkillAll = totalAll ? (rows.reduce((s, r) => s + r.skill, 0) / totalAll).toFixed(1) : '0';
  const expiredAll  = rows.filter(r => r.expired > 0).length;

  let centerTarget = 0, inlineTarget = 0;
  bus.forEach(bu => {
    centerTarget += Math.round((sewOpByBu[bu] || []).length * 0.025);
    inlineTarget += Math.round((sewOpByBu[bu] || []).length * 0.05);
  });
  const centerFilled = centerTarget > 0 ? Math.min(100, Math.round(centerAll / centerTarget * 100)) : 0;
  const inlineFilled = inlineTarget  > 0 ? Math.min(100, Math.round(inlineAll / inlineTarget  * 100)) : 0;

  const buStats = bus.map((bu, i) => {
    const bRows      = rows.filter(r => r.bu === bu);
    const bCenter    = bRows.filter(r => r.position === JUMPER_POSITIONS[0]).length;
    const bInline    = bRows.filter(r => r.position === JUMPER_POSITIONS[1]).length;
    const bSewCnt    = (sewOpByBu[bu] || []).length;
    const bCenterTgt = Math.round(bSewCnt * 0.025);
    const bInlineTgt = Math.round(bSewCnt * 0.05);
    return {
      bu, total: bRows.length,
      center: bCenter, centerTgt: bCenterTgt,
      centerPct: bCenterTgt > 0 ? Math.min(100, Math.round(bCenter / bCenterTgt * 100)) : 0,
      inline: bInline, inlineTgt: bInlineTgt,
      inlinePct: bInlineTgt > 0 ? Math.min(100, Math.round(bInline / bInlineTgt * 100)) : 0,
      avgSkill: bRows.length ? (bRows.reduce((s, r) => s + r.skill, 0) / bRows.length).toFixed(1) : '0',
      expired: bRows.filter(r => r.expired > 0).length,
      color: JUMPER_COLORS[i % JUMPER_COLORS.length],
    };
  });

  return { bus, totalAll, centerAll, inlineAll, avgSkillAll, expiredAll, centerTarget, inlineTarget, centerFilled, inlineFilled, buStats };
}

function _jumperSummaryHtml(vm) {
  const pBar = (pct, color) => `
    <div class="pbar pbar--6">
      <div class="pbar__fill" style="background:${pct >= 100 ? '#16a34a' : color};width:${pct}%;"></div>
    </div>`;
  const tip = (html) => `<div class="crd-tip"><span class="crd-tip-i">ℹ</span><div class="crd-tip-box">${html}</div></div>`;

  return `
    <!-- Row 1: 5 overview cards -->
    <div class="jtp-row1">
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Jumper ทั้งหมด</div>
          ${tip('จำนวน Jumper ทั้งหมดในทุก BU<br><span style="color:var(--text-muted)">นับทุก record ใน Jumper table</span>')}
        </div>
        <div class="stat-card__value">${vm.totalAll}</div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Jumper Center</div>
          ${tip('Jumper ตำแหน่ง Center<br><span style="color:var(--text-muted)">Target: 2.5% × จำนวน Sewing Operator ต่อ BU</span>')}
        </div>
        <div class="stat-card__value--md">${vm.centerAll}</div>
        ${vm.centerTarget > 0 ? `<div class="u-mt-auto">
          ${pBar(vm.centerFilled, '#2563eb')}
          <div class="u-between u-muted stat-foot">
            <span>${vm.centerFilled}%</span><span>Target: ${vm.centerTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Jumper Inline</div>
          ${tip('Jumper ตำแหน่ง Inline<br><span style="color:var(--text-muted)">Target: 5.0% × จำนวน Sewing Operator ต่อ BU</span>')}
        </div>
        <div class="stat-card__value--md">${vm.inlineAll}</div>
        ${vm.inlineTarget > 0 ? `<div class="u-mt-auto">
          ${pBar(vm.inlineFilled, '#16a34a')}
          <div class="u-between u-muted stat-foot">
            <span>${vm.inlineFilled}%</span><span>Target: ${vm.inlineTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Avg. Skill Score / Person</div>
          ${tip('ค่าเฉลี่ย Skill Count ต่อ 1 คน<br><span style="color:var(--text-muted)">avg ของ Skill Count ของทุก Jumper</span>')}
        </div>
        <div class="stat-card__value">${vm.avgSkillAll}</div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Skill Expired</div>
          ${tip('จำนวน Jumper ที่มี Skill หมดอายุ อย่างน้อย 1 รายการ<br><span style="color:var(--text-muted)">นับ Jumper ที่ Expired Count > 0</span>')}
        </div>
        <div class="stat-card__value"${vm.expiredAll > 0 ? ' style="color:#dc2626;"' : ''}>${vm.expiredAll}</div>
      </div>
    </div>

    <!-- Row 2 + Row 3: BU mini-cards + Training Progress donuts (combined section) -->
    <div class="stat-section">
    <div class="jtp-row2">
      ${vm.buStats.map(s => `
      <div class="stat-card" style="min-width:0;">
        <div class="bu-head">
          <span class="bu-name" style="color:${s.color};">${escapeHtml(s.bu)}</span>
          <span class="u-muted bu-count">${s.total} คน</span>
        </div>
        <div style="margin-bottom:5px;">
          <div class="u-between u-muted" style="font-size:0.7rem;margin-bottom:2px;">
            <span>Center</span>
            <span class="u-text" style="font-weight:600;">${s.centerTgt > 0 ? `${s.center}/${s.centerTgt}` : s.center}</span>
          </div>
          ${s.centerTgt > 0 ? pBar(s.centerPct, s.color) : ''}
        </div>
        <div style="margin-bottom:8px;">
          <div class="u-between u-muted" style="font-size:0.7rem;margin-bottom:2px;">
            <span>Inline</span>
            <span class="u-text" style="font-weight:600;">${s.inlineTgt > 0 ? `${s.inline}/${s.inlineTgt}` : s.inline}</span>
          </div>
          ${s.inlineTgt > 0 ? pBar(s.inlinePct, hexToRgba(s.color, 0.6)) : ''}
        </div>
        <div class="u-muted stat-card__footer">
          <div class="u-between" style="margin-bottom:2px;">
            <span>Skill avg</span><strong class="u-text">${s.avgSkill}</strong>
          </div>
          <div class="u-between">
            <span>Expired</span><strong style="${s.expired > 0 ? 'color:#dc2626;' : 'color:var(--text);'}">${s.expired}</strong>
          </div>
        </div>
      </div>`).join('')}
    </div>

    <!-- Row 3: Training Progress donuts — filled by JT_PROD.init() -->
    <div id="jtp-row3" class="jtp-row3"></div>
    </div>`;
}

function _mountJumperSummary(html, bus, rows) {
  const container = document.getElementById('jtp-summary');
  if (!container) return;
  container.innerHTML = html;
  JT_PROD.init(bus, rows);  // must run after innerHTML (#jtp-row3 is created above)
}

function renderJumperSummaryCards() {
  const rows      = _jumperRows;
  const busKeys   = Object.keys(_jumperByBu);
  const sewOpByBu = _jumperSewOp || {};
  const vm = _computeJumperSummary(rows, busKeys, sewOpByBu);
  _mountJumperSummary(_jumperSummaryHtml(vm), vm.bus, rows);
}

// ── Charts ────────────────────────────────────────────────────────────────────

function renderJumperCharts() {
  const bus       = sortBus(Object.keys(_jumperByBu));
  const sewOpByBu = _jumperSewOp || {};

  const empCounts = bus.map(bu => _jumperRows.filter(r => r.bu === bu).length);
  const avgSkills = bus.map(bu => {
    const emps = _jumperRows.filter(r => r.bu === bu);
    return emps.length ? +(emps.reduce((s, e) => s + e.skill, 0) / emps.length).toFixed(1) : 0;
  });

  _makeJumperBarChart('jtp-empPerBuChart', 'จำนวนคน', bus, empCounts);
  _makeJumperBarChart('jtp-avgSkillChart', 'Skill เฉลี่ย/คน', bus, avgSkills);

  const sewCounts = bus.map(bu => (sewOpByBu[bu] || []).length);
  const cA = bus.map(bu => _jumperRows.filter(r => r.bu === bu && r.position === JUMPER_POSITIONS[0]).length);
  const iA = bus.map(bu => _jumperRows.filter(r => r.bu === bu && r.position === JUMPER_POSITIONS[1]).length);
  _makeJumperPositionChart('jtp-positionCountChart', bus, cA, iA, sewCounts);
}

// ── Data table ────────────────────────────────────────────────────────────────

function _getJumperFiltered() {
  const { bu, expired, search } = _jumperTableState.filters;
  const term = search.trim().toLowerCase();
  return _jumperRows.filter(r => {
    if (bu      && r.bu !== bu)                              return false;
    if (expired === 'expired' && r.expired <= 0)             return false;
    if (expired === 'ok'      && r.expired >  0)             return false;
    if (term && !`${r.empid} ${r.firstname}`.toLowerCase().includes(term)) return false;
    return true;
  });
}

function renderJumperTable() {
  const wrap = document.getElementById('jtp-tableWrap');
  if (!wrap) return;

  const filtered = _getJumperFiltered();
  const { sortKey, sortDir, pageSize } = _jumperTableState;
  const sorted = filtered.slice().sort((a, b) => {
    const va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'number') return (va - vb) * sortDir;
    return String(va).localeCompare(String(vb), 'th') * sortDir;
  });

  const total     = sorted.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  if (_jumperTableState.page > pageCount) _jumperTableState.page = pageCount;
  const start    = total ? (_jumperTableState.page - 1) * pageSize : 0;
  const pageRows = sorted.slice(start, start + pageSize);

  const cols = [
    { key: 'bu',        label: 'BU' },
    { key: 'empid',     label: 'Employee ID' },
    { key: 'firstname', label: 'Full Name' },
    { key: 'deptname',  label: 'Department' },
    { key: 'position',  label: 'Position' },
    { key: 'skill',     label: 'Skill' },
    { key: 'expired',   label: 'Expired' },
  ];

  if (!pageRows.length) {
    wrap.innerHTML = '<div style="color:var(--text-muted);padding:16px;text-align:center;">No data found</div>';
  } else {
    const head = cols.map(c => {
      const arrow = sortKey === c.key ? (sortDir === 1 ? ' ▲' : ' ▼') : '';
      return `<th data-key="${c.key}" style="cursor:pointer;user-select:none;">${c.label}${arrow}</th>`;
    }).join('');
    const body = pageRows.map(r => `<tr>${cols.map(c => {
      if (c.key === 'expired') {
        const cls = r.expired > 0 ? 'warn' : 'ok';
        const lbl = r.expired > 0 ? `${r.expired} Expired` : 'Active';
        return `<td><span class="badge ${cls}">${lbl}</span></td>`;
      }
      return `<td>${escapeHtml(String(r[c.key] ?? ''))}</td>`;
    }).join('')}</tr>`).join('');
    wrap.innerHTML = `<div style="overflow-x:auto"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
    wrap.querySelectorAll('th[data-key]').forEach(th => {
      th.onclick = () => {
        const k = th.dataset.key;
        _jumperTableState.sortDir  = _jumperTableState.sortKey === k ? -_jumperTableState.sortDir : 1;
        _jumperTableState.sortKey  = k;
        _jumperTableState.page     = 1;
        renderJumperTable();
      };
    });
  }

  // pagination controls
  const rs = total ? start + 1 : 0;
  const re = Math.min(start + pageSize, total);
  const rl = document.getElementById('jtp-rangeLabel');
  const pl = document.getElementById('jtp-pageLabel');
  const pp = document.getElementById('jtp-prevPage');
  const np = document.getElementById('jtp-nextPage');
  if (rl) rl.textContent = `show ${rs}-${re} from ${total} items`;
  if (pl) pl.textContent = `Page ${_jumperTableState.page} of ${pageCount}`;
  if (pp) pp.disabled    = _jumperTableState.page <= 1;
  if (np) np.disabled    = _jumperTableState.page >= pageCount;
}

// ── Wire controls (called once after dashboard HTML is in the DOM) ────────────

function _wireJumperControls() {
  // Inside-data slide toggle
  const toggleWrap = document.getElementById('jtp-insideDataToggle');
  if (toggleWrap) {
    toggleWrap.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.onclick = () => {
        _jumperInsideMode = btn.dataset.mode;
        toggleWrap.querySelectorAll('.toggle-btn').forEach(b =>
          b.classList.toggle('active', b.dataset.mode === _jumperInsideMode));
        const track = document.getElementById('jtp-chartTrack');
        if (track) track.style.transform = _jumperInsideMode === 'positionCount' ? 'translateX(-100%)' : 'translateX(0)';
        const posLegend = document.getElementById('jtp-positionLegend');
        if (posLegend) posLegend.style.display = _jumperInsideMode === 'positionCount' ? '' : 'none';
      };
    });
    // Apply initial position based on default mode
    const track = document.getElementById('jtp-chartTrack');
    if (track) track.style.transform = _jumperInsideMode === 'positionCount' ? 'translateX(-100%)' : 'translateX(0)';
    const posLegend = document.getElementById('jtp-positionLegend');
    if (posLegend) posLegend.style.display = _jumperInsideMode === 'positionCount' ? '' : 'none';
  }

  // Table filters
  const buSel     = document.getElementById('jtp-filterBu');
  const expSel    = document.getElementById('jtp-filterExpired');
  const searchInp = document.getElementById('jtp-filterSearch');
  const prevBtn   = document.getElementById('jtp-prevPage');
  const nextBtn   = document.getElementById('jtp-nextPage');
  const pageSel   = document.getElementById('jtp-pageSize');

  if (buSel) {
    const bus = sortBus([...new Set(_jumperRows.map(r => r.bu))]);
    buSel.innerHTML = '<option value="">All BU</option>' +
      bus.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
    buSel.onchange = () => {
      _jumperTableState.filters.bu = buSel.value;
      _jumperTableState.page = 1;
      renderJumperTable();
    };
  }
  if (expSel) expSel.onchange = () => {
    _jumperTableState.filters.expired = expSel.value;
    _jumperTableState.page = 1;
    renderJumperTable();
  };
  if (searchInp) {
    let debounce;
    searchInp.oninput = () => {
      _jumperTableState.filters.search = searchInp.value;
      clearTimeout(debounce);
      debounce = setTimeout(() => { _jumperTableState.page = 1; renderJumperTable(); }, 250);
    };
  }
  if (prevBtn) prevBtn.onclick = () => { if (_jumperTableState.page > 1) { _jumperTableState.page--; renderJumperTable(); } };
  if (nextBtn) nextBtn.onclick = () => { _jumperTableState.page++; renderJumperTable(); };
  if (pageSel) pageSel.onchange = () => {
    _jumperTableState.pageSize = Number(pageSel.value);
    _jumperTableState.page     = 1;
    renderJumperTable();
  };
}

// ── Public entry point ────────────────────────────────────────────────────────

async function initJumperTab() {
  if (_jumperLoaded) return;   // lazy-load once per session

  const loadingEl = document.getElementById('jumper-loading');
  const errorEl   = document.getElementById('jumper-error');
  const dashEl    = document.getElementById('jumper-dashboard');

  if (loadingEl) loadingEl.classList.remove('hidden');
  if (errorEl)   errorEl.classList.add('hidden');
  if (dashEl)    dashEl.classList.add('hidden');

  try {
    const data = await api('/api/jumper-excel');
    _jumperByBu  = applyBuAliases(data.jumper        || {});
    _jumperSewOp = applyBuAliases(data.sewingOperator || {});
    _jumperRows  = normalizeJumperRows(_jumperByBu);
    _jumperLoaded = true;

    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');

    renderJumperSummaryCards();
    renderJumperCharts();
    renderJumperTable();
    _wireJumperControls();
  } catch (err) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.innerHTML = `<p style="color:var(--danger);font-weight:600;">${escapeHtml(err.message)}</p>
        <button onclick="initJumperTab()" style="margin-top:8px;">ลองใหม่</button>`;
      errorEl.classList.remove('hidden');
    }
  }
}

// =============================================================================
// TRAINER TAB
// =============================================================================

let _trainerData        = null;
let _trainerCharts      = {};
let _trainerLoaded      = false;
let _trainerBuMode      = 'status';   // 'headcount' | 'status'
let _trainerInsideMode  = 'ttt';      // 'ttt' | 'status' | 'machine' | 'product' | 'individual'
let _trainerIndividualBu = '';
let _trainerTttBu        = '';
let _trainerTableMode   = 'person';   // 'person' | 'skilltype'
let _trainerTableVisible = true;
const _trainerTableState = {
  page: 1, pageSize: 10,
  filters: { bu: '', productType: '', style: '', status: '', search: '' },
};

// ── Coverage helpers ──────────────────────────────────────────────────────────

function _trainerCoverageData(data) {
  const bus          = sortBus([...new Set(data.trainers.map(t => t.bu))]);
  const productTypes = [...new Set(data.setup.map(s => s.productType))].sort();
  const coverage     = {};
  for (const bu of bus) {
    coverage[bu] = {};
    const trainersInBu = data.trainers.filter(t => t.bu === bu && t.status !== 'Master Trainer');
    for (const pt of productTypes) {
      const setupRows = data.setup.filter(s => s.bu === bu && s.productType === pt);
      if (!setupRows.length || !trainersInBu.length) { coverage[bu][pt] = null; continue; }
      const totalSteps = setupRows.reduce((s, r) => s + r.totalSteps, 0);
      if (!totalSteps) { coverage[bu][pt] = null; continue; }
      let stepsDone = 0;
      for (const t of trainersInBu)
        stepsDone += (data.skills[t.empid] || []).filter(s => s.productType === pt && (s.eff || 0) >= 75).length;
      coverage[bu][pt] = Math.min(100, Math.round(stepsDone / (trainersInBu.length * totalSteps) * 100));
    }
  }
  return { bus, productTypes, coverage };
}

// ── Summary cards (Rows 1–3) ─────────────────────────────────────────────────

function _computeTrainerSummary(data) {
  const { bus, productTypes, coverage } = _trainerCoverageData(data);
  const ptColorMap = {};
  productTypes.forEach((pt, i) => { ptColorMap[pt] = TRAINER_PT_COLORS[i % TRAINER_PT_COLORS.length]; });

  const totalTr      = data.trainers.length;
  const masterCount  = data.trainers.filter(t => t.status === 'Master Trainer').length;
  const certCount    = data.trainers.filter(t => t.status === 'Certified').length;
  const masterTarget = data.trainers.filter(t => t.position === 'Master Trainer').length;
  const certTarget   = totalTr;
  const masterFilled = masterTarget > 0 ? Math.min(100, Math.round(masterCount / masterTarget * 100)) : 0;
  const certFilled   = certTarget   > 0 ? Math.min(100, Math.round(certCount   / certTarget   * 100)) : 0;

  const trainerRates = data.trainers.map(t => {
    const sk = (data.skills[t.empid] || []);
    return sk.length ? sk.filter(r => (r.eff || 0) >= 75).length / sk.length * 100 : null;
  }).filter(v => v !== null);
  const avgSkill = trainerRates.length
    ? (trainerRates.reduce((s, v) => s + v, 0) / trainerRates.length).toFixed(1) : '0.0';
  const avgPct = Math.min(100, parseFloat(avgSkill) || 0);

  const expiredAll  = data.trainers.filter(t => (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1)).length;
  const expiredByBu = {};
  data.trainers.forEach(t => {
    if ((data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1))
      expiredByBu[t.bu] = (expiredByBu[t.bu] || 0) + 1;
  });

  const buStats = bus.map((bu, i) => {
    const trs     = data.trainers.filter(t => t.bu === bu);
    const buRates = trs.map(t => {
      const sk = (data.skills[t.empid] || []);
      return sk.length ? sk.filter(r => (r.eff || 0) >= 75).length / sk.length * 100 : null;
    }).filter(v => v !== null);
    const bAvg = buRates.length
      ? (buRates.reduce((s, v) => s + v, 0) / buRates.length).toFixed(1) : '0.0';
    const bExp = trs.filter(t => (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1)).length;

    const trExcMaster = trs.filter(t => t.status !== 'Master Trainer');
    const top3Items = (data.top3 || []).filter(t => t.bu === bu).map(t => {
      const done = trExcMaster.reduce((acc, tr) =>
        acc + (data.skills[tr.empid] || []).filter(sk =>
          sk.productType === t.productType && sk.style === t.style && (sk.eff || 0) >= 75
        ).length, 0);
      const denom = t.totalSteps * trExcMaster.length;
      const pct = denom > 0 ? Math.min(100, Math.round(done / denom * 100)) : null;
      return { label: `${t.productType} / ${t.style}`, pct, productType: t.productType };
    });

    return {
      bu, color: JUMPER_COLORS[i % JUMPER_COLORS.length],
      total:      trs.length,
      master:     trs.filter(t => t.status === 'Master Trainer').length,
      certified:  trs.filter(t => t.status === 'Certified').length,
      onProgress: trs.filter(t => t.status === 'On-Progress').length,
      avgSkill: bAvg, expired: bExp, top3Items,
    };
  });

  return { bus, totalTr, masterCount, certCount, masterTarget, certTarget, masterFilled, certFilled, avgSkill, avgPct, expiredAll, expiredByBu, buStats, ptColorMap };
}

function _trainerSummaryHtml(vm) {
  const pBar = (pct, color) => `
    <div class="pbar pbar--5">
      <div class="pbar__fill" style="background:${color};width:${pct}%;"></div>
    </div>`;
  const ptColor = pct => pct >= 80 ? '#16a34a' : pct >= 60 ? '#22d3ee' : pct >= 30 ? '#f59e0b' : '#ef4444';
  const tip = (html) => `<div class="crd-tip"><span class="crd-tip-i">ℹ</span><div class="crd-tip-box">${html}</div></div>`;
  const RSUB = (entries, color) => {
    if (!Object.keys(entries).length) return '';
    const rows = Object.entries(entries).map(([bu, n]) =>
      `<div class="u-between" style="gap:8px;white-space:nowrap;"><span>${escapeHtml(bu)}</span><strong style="color:${color};">${n}</strong></div>`
    ).join('');
    return `<div class="u-muted rsub">${rows}</div>`;
  };

  return `
    <div class="stat-grid stat-grid--5">
      <div class="stat-card">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Total Trainer</div>
          ${tip('จำนวน Trainer ทั้งหมดในทีม<br><span style="color:var(--text-muted)">นับทุก record ใน TrainerListAll</span>')}
        </div>
        <div class="stat-card__value">${vm.totalTr}</div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Master Trainer</div>
          ${tip('Trainer ที่ได้รับการรับรองระดับสูงสุด<br><span style="color:var(--text-muted)">ปัจจุบัน: Column <strong>Status</strong> = "Master Trainer"<br>Target: Column <strong>Position</strong> = "Master Trainer"</span>')}
        </div>
        <div style="flex:1;">
          <div class="stat-card__value--md" style="color:var(--purple);">${vm.masterCount}</div>
          ${vm.masterTarget > 0 ? `<div>
            ${pBar(vm.masterFilled, 'var(--purple)')}
            <div class="u-between u-muted stat-foot">
              <span>${vm.masterFilled}%</span><span>Target: ${vm.masterTarget}</span>
            </div>
          </div>` : ''}
        </div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Certified</div>
          ${tip('Trainer ที่ได้รับการรับรองระดับ Certified<br><span style="color:var(--text-muted)">ปัจจุบัน: Column <strong>Status</strong> = "Certified"<br>Target: จำนวน Trainer ทั้งหมด</span>')}
        </div>
        <div class="stat-card__value--md" style="color:var(--ok);">${vm.certCount}</div>
        ${vm.certTarget > 0 ? `<div class="u-mt-auto">
          ${pBar(vm.certFilled, 'var(--ok)')}
          <div class="u-between u-muted stat-foot">
            <span>${vm.certFilled}%</span><span>Target: ${vm.certTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Avg. Efficiency Pass Rate / Person</div>
          ${tip('ค่าเฉลี่ยอัตราการผ่านมาตรฐาน Efficiency ของ Trainer แต่ละคน<br><span style="color:var(--text-muted)">สูตร: (Skill ที่ eff ≥ 75) / (Skill ทั้งหมดของคนนั้น) × 100 → avg ทุกคน<br>Target: 100%</span>')}
        </div>
        <div class="stat-card__value--md" style="color:#0891b2;">${vm.avgSkill}%</div>
        <div class="u-mt-auto">
          ${pBar(vm.avgPct, '#0891b2')}
          <div class="u-muted u-end stat-foot">
            <span>Target: 100%</span>
          </div>
        </div>
      </div>
      <div class="stat-card">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Skill Expired</div>
          ${tip('จำนวน Trainer ที่มี Skill หมดอายุ อย่างน้อย 1 รายการ<br><span style="color:var(--text-muted)">นับ Trainer ที่มี expired = 1 และ eff > 0</span>')}
        </div>
        <div class="u-between" style="align-items:center;gap:8px;flex:1;">
          <div class="stat-card__value stat-card__value--flush"${vm.expiredAll > 0 ? ' style="color:var(--danger);"' : ''}>${vm.expiredAll}</div>
          ${RSUB(vm.expiredByBu, 'var(--danger)')}
        </div>
      </div>
    </div>
    <!-- Row 2 + Row 3: BU mini-cards + Top 3 Priority (combined section) -->
    <div class="stat-section">
    <div class="stat-grid" style="grid-template-columns:repeat(${vm.bus.length || 1},1fr);">
      ${vm.buStats.map(s => `
      <div class="stat-card">
        <div class="bu-head">
          <span class="bu-name" style="color:${s.color};">${escapeHtml(s.bu)}</span>
          <span class="u-muted bu-count">${s.total} คน</span>
        </div>
        <div class="u-muted stat-status-list">
          <div class="u-between"><span>★ Master Trainer</span><strong style="color:var(--purple);">${s.master}</strong></div>
          <div class="u-between"><span>✓ Certified</span><strong style="color:var(--ok);">${s.certified}</strong></div>
          <div class="u-between"><span>○ On-Progress</span><strong style="color:var(--warn);">${s.onProgress}</strong></div>
        </div>
        <div class="u-muted stat-card__footer">
          <div class="u-between" style="margin-bottom:2px;"><span>Avg. Eff Pass Rate</span><strong class="u-text">${s.avgSkill}%</strong></div>
          <div class="u-between"><span>Expired (คน)</span><strong style="${s.expired > 0 ? 'color:var(--danger);' : 'color:var(--text);'}">${s.expired}</strong></div>
        </div>
      </div>`).join('')}
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(${vm.bus.length || 1},1fr);">
      ${vm.buStats.map(s => `
      <div class="stat-card" style="min-height:80px;">
        <div style="text-align:center;margin-bottom:10px;">
          <span class="u-muted" style="font-size:0.6rem;background:var(--surface2);padding:1px 5px;border-radius:10px;">🎯 Top 3 Priority</span>
        </div>
        ${s.top3Items.length === 0
          ? `<div class="u-muted" style="font-size:0.7rem;text-align:center;padding:8px 0;">ไม่มีข้อมูล top_3</div>`
          : s.top3Items.map(x => `
            <div style="margin-bottom:6px;">
              <div class="u-between u-muted" style="font-size:0.68rem;margin-bottom:2px;">
                <span>${escapeHtml(x.label)}</span>
                <span class="u-text" style="font-weight:600;">${x.pct === null ? '—' : x.pct + '%'}</span>
              </div>
              ${x.pct !== null ? pBar(x.pct, vm.ptColorMap[x.productType] || ptColor(x.pct)) : ''}
            </div>`).join('')}
      </div>`).join('')}
    </div>
    </div>`;
}

function _mountTrainerSummary(html) {
  const container = document.getElementById('trainer-summary');
  if (!container) return;
  container.innerHTML = html;
}

function renderTrainerSummaryCards(data) {
  const vm = _computeTrainerSummary(data);
  _mountTrainerSummary(_trainerSummaryHtml(vm));
}

// ── Charts ────────────────────────────────────────────────────────────────────

function renderTrainerCharts(data) {
  _makeTrainerBuChart(data, _trainerBuMode);
  _makeTrainerInsideChart(data, _trainerInsideMode);
}

function _makeTrainerBuChart(data, mode) {
  const id = 'trainer-buChart';
  if (!document.getElementById(id) || typeof Chart === 'undefined') return;
  if (_trainerCharts[id]) _trainerCharts[id].destroy();
  const bus = sortBus([...new Set(data.trainers.map(t => t.bu))]);
  if (mode === 'status') {
    const statuses = ['Master Trainer', 'Certified', 'On-Progress', 'No-Certified'];
    const colors   = ['#2563eb', '#16a34a', '#f59e0b', '#f97316'];
    _trainerCharts[id] = new Chart(document.getElementById(id), {
      type: 'bar',
      data: {
        labels: bus,
        datasets: statuses.map((s, i) => ({
          label: s,
          data: bus.map(bu => data.trainers.filter(t => t.bu === bu && t.status === s).length),
          backgroundColor: colors[i], borderRadius: 3,
        })),
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 400, easing: 'easeOutQuart' },
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
        scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, grace: '10%', ticks: { stepSize: 1 } } },
      },
    });
  } else {
    const sorted = bus.map(bu => ({ bu, n: data.trainers.filter(t => t.bu === bu).length }))
      .sort((a, b) => b.n - a.n);
    _trainerCharts[id] = new Chart(document.getElementById(id), {
      type: 'bar',
      data: {
        labels: sorted.map(x => x.bu),
        datasets: [{ label: 'จำนวน Trainer', data: sorted.map(x => x.n),
          backgroundColor: sorted.map((_, i) => JUMPER_COLORS[i % JUMPER_COLORS.length]), borderRadius: 4 }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 400, easing: 'easeOutQuart' },
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, grace: '10%', ticks: { stepSize: 1 } } },
      },
    });
  }
}

function _makeTrainerInsideChart(data, mode) {
  const id = 'trainer-insideChart';
  const canvas = document.getElementById(id);
  if (!canvas || typeof Chart === 'undefined') return;
  if (_trainerCharts[id]) { _trainerCharts[id].destroy(); _trainerCharts[id] = null; }

  const hint  = document.getElementById('trainer-insideChartHint');

  const bus       = sortBus([...new Set(data.trainers.map(t => t.bu))]);
  const allSkills = Object.values(data.skills).flat();
  const qualified = allSkills.filter(s => (s.eff || 0) >= 75);

  // Hide hint by default (only shown in individual mode w/o BU)
  if (hint) hint.classList.add('hidden');
  canvas.style.display = '';

  const baseOpts = {
    responsive: true, maintainAspectRatio: false,
    animation: { duration: 400, easing: 'easeOutQuart' },
    plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
  };

  if (mode === 'status') {
    // Stacked bar: Qualified / In-Progress / To-Train per BU
    const rows = bus.map(bu => {
      const ids = data.trainers.filter(t => t.bu === bu).map(t => t.empid);
      const sks = allSkills.filter(s => ids.includes(s.empid));
      return {
        qual: sks.filter(s => (s.eff || 0) >= 75).length,
        prog: sks.filter(s => (s.eff || 0) > 0 && (s.eff || 0) < 75).length,
        todo: sks.filter(s => (s.eff || 0) === 0).length,
      };
    });
    _trainerCharts[id] = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: bus,
        datasets: [
          { label: 'Qualified (≥75)', data: rows.map(r => r.qual), backgroundColor: '#16a34a', borderRadius: 3 },
          { label: 'In-Progress',     data: rows.map(r => r.prog), backgroundColor: '#f59e0b', borderRadius: 3 },
          { label: 'To-Train',        data: rows.map(r => r.todo), backgroundColor: '#94a3b8', borderRadius: 3 },
        ],
      },
      options: { ...baseOpts, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, grace: '10%' } } },
    });

  } else if (mode === 'machine' || mode === 'product') {
    // Horizontal stacked bar: Y = Machine / Product Type, X = qualified count, stacks = BU
    const field = mode === 'machine' ? 'machineType' : 'productType';
    const empBu = {};
    for (const t of data.trainers) empBu[t.empid] = t.bu;
    const totals = {};
    for (const s of qualified) {
      const k = s[field]; if (!k) continue;
      totals[k] = (totals[k] || 0) + 1;
    }
    const TOP_N = mode === 'machine' ? 10 : 12;
    const topItems = Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, TOP_N).map(x => x[0]);
    const datasets = bus.map((bu, i) => ({
      label: bu,
      data: topItems.map(it => qualified.filter(s => s[field] === it && empBu[s.empid] === bu).length),
      backgroundColor: JUMPER_COLORS[i % JUMPER_COLORS.length],
      borderRadius: 3,
    }));
    _trainerCharts[id] = new Chart(canvas, {
      type: 'bar',
      data: { labels: topItems, datasets },
      options: { ...baseOpts, indexAxis: 'y',
        scales: { x: { stacked: true, beginAtZero: true, grace: '10%' }, y: { stacked: true } } },
    });

  } else if (mode === 'individual') {
    const selBu = _trainerIndividualBu;
    if (!selBu) {
      // No BU selected — show hint, hide canvas
      canvas.style.display = 'none';
      if (hint) { hint.classList.remove('hidden'); hint.textContent = 'กรุณาเลือก BU เพื่อดูทักษะของครูฝึกรายบุคคล'; }
      return;
    }
    const trsInBu = data.trainers.filter(t => t.bu === selBu).sort((a, b) => a.name.localeCompare(b.name));
    const ids = trsInBu.map(t => t.empid);
    const buQual = qualified.filter(s => ids.includes(s.empid));
    const pts = [...new Set(buQual.map(s => s.productType).filter(Boolean))].sort();
    if (!trsInBu.length || !pts.length) {
      canvas.style.display = 'none';
      if (hint) { hint.classList.remove('hidden'); hint.textContent = 'ไม่มีทักษะ qualified ใน BU นี้'; }
      return;
    }
    // Build consistent color map from ALL product types (all BUs) so same PT always gets same color
    const allPts = [...new Set(qualified.map(s => s.productType).filter(Boolean))].sort();
    const ptColorMap = {};
    allPts.forEach((pt, i) => { ptColorMap[pt] = TRAINER_PT_COLORS[i % TRAINER_PT_COLORS.length]; });
    const datasets = pts.map(pt => ({
      label: pt,
      data: trsInBu.map(t => buQual.filter(s => s.empid === t.empid && s.productType === pt).length),
      backgroundColor: ptColorMap[pt] ?? JUMPER_COLORS[0],
      borderRadius: 3,
    }));
    _trainerCharts[id] = new Chart(canvas, {
      type: 'bar',
      data: { labels: trsInBu.map(t => t.name), datasets },
      options: { ...baseOpts,
        scales: {
          x: { stacked: true, ticks: { font: { size: 10 }, maxRotation: 0, minRotation: 0,
            callback(value) {
              const lbl = this.getLabelForValue(value);
              return lbl.length > 8 ? lbl.slice(0, 8) + '…' : lbl;
            } } },
          y: { stacked: true, beginAtZero: true, grace: '10%', title: { display: true, text: 'จำนวนทักษะ (Qualified)' } },
        } },
    });

  } else if (mode === 'ttt') {
    const passLine = 70;
    const trainersWithScore = data.trainers;
    const buList = sortBus([...new Set(trainersWithScore.map(t => t.bu))]);
    const buColorMap = {};
    buList.forEach((bu, i) => { buColorMap[bu] = JUMPER_COLORS[i % JUMPER_COLORS.length]; });

    const annotationOpts = {
      annotations: {
        passLine: {
          type: 'line', yMin: passLine, yMax: passLine,
          borderColor: '#dc2626', borderWidth: 2, borderDash: [6, 4],
        },
      },
    };
    const passLegend = `<span style="display:inline-block;width:22px;border-bottom:2px dashed #dc2626;vertical-align:middle;margin-right:5px;"></span><span>เกณฑ์ผ่าน ${passLine}%</span>`;

    if (!_trainerTttBu) {
      // ── BU Overview ──
      const avgScores = buList.map(bu => {
        const inBu = trainersWithScore.filter(t => t.bu === bu);
        return inBu.length ? +(inBu.reduce((s, t) => s + (t.score ?? 0), 0) / inBu.length).toFixed(1) : 0;
      });

      _trainerCharts[id] = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: buList,
          datasets: [{
            label: 'ค่าเฉลี่ย (%)',
            data: avgScores,
            backgroundColor: buList.map(bu => buColorMap[bu]),
            borderRadius: 4,
            barPercentage: 0.6,
          }],
        },
        options: {
          ...baseOpts,
          onClick(evt, elems) {
            if (!elems.length) return;
            const idx = elems[0].index;
            _trainerTttBu = buList[idx];
            _makeTrainerInsideChart(data, 'ttt');
          },
          plugins: {
            legend: { display: false },
            annotation: annotationOpts,
            tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.raw.toFixed(1)}%` } },
          },
          scales: {
            x: { ticks: { font: { size: 12 }, maxRotation: 0, minRotation: 0 } },
            y: { beginAtZero: true, max: 100,
              title: { display: true, text: 'คะแนนเฉลี่ย (%)' },
              ticks: { callback: v => v + '%' } },
          },
        },
      });
      if (hint) { hint.classList.remove('hidden'); hint.innerHTML = `${passLegend}<span style="color:var(--border-light);">|</span><span>คลิกที่แท่ง BU เพื่อดูรายบุคคล</span>`; }

    } else {
      // ── Individual drill-down for selected BU ──
      const selBu = _trainerTttBu;
      const inBu = trainersWithScore.filter(t => t.bu === selBu).sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
      if (!inBu.length) {
        canvas.style.display = 'none';
        if (hint) { hint.classList.remove('hidden'); hint.textContent = 'ไม่มีข้อมูลคะแนนใน BU นี้'; }
        return;
      }
      const labels = inBu.map(t => {
        const n = t.name;
        return n.length > 8 ? n.slice(0, 8) + '…' : n;
      });
      const scores = inBu.map(t => t.score ?? 0);
      const colors = scores.map(v => v >= passLine ? '#16a34a' : '#ef4444');

      _trainerCharts[id] = new Chart(canvas, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'คะแนน (%)',
            data: scores,
            backgroundColor: colors,
            borderRadius: 4,
            barPercentage: 0.6,
          }],
        },
        options: {
          ...baseOpts,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 },
              generateLabels() {
                return [
                  { text: 'Pass (≥70%)', fillStyle: '#16a34a', strokeStyle: '#16a34a', lineWidth: 0 },
                  { text: 'Fail (<70%)', fillStyle: '#ef4444', strokeStyle: '#ef4444', lineWidth: 0 },
                ];
              },
            } },
            annotation: annotationOpts,
            tooltip: {
              callbacks: {
                title: ctx => inBu[ctx[0].dataIndex]?.name || '',
                label: ctx => `${ctx.raw.toFixed(1)}%`,
              },
            },
          },
          scales: {
            x: { ticks: { font: { size: 11 }, maxRotation: 0, minRotation: 0,
              callback(value) {
                const lbl = this.getLabelForValue(value);
                return lbl.length > 8 ? lbl.slice(0, 8) + '…' : lbl;
              } } },
            y: { beginAtZero: true, max: 100,
              title: { display: true, text: 'คะแนน (%)' },
              ticks: { callback: v => v + '%' } },
          },
        },
      });
      if (hint) {
        hint.classList.remove('hidden');
        hint.innerHTML = `${passLegend}` +
          `<span style="color:var(--border-light);">|</span>` +
          `<button onclick="_trainerTttBu='';_makeTrainerInsideChart(window._tttData,'ttt');" style="background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;cursor:pointer;color:var(--text);font-size:0.82rem;">← ภาพรวม BU</button>` +
          `<span style="font-size:0.82rem;">${escapeHtml(selBu)} — รายบุคคล</span>`;
      }
    }
    window._tttData = data;
  }
}

// ── Coverage Matrix ───────────────────────────────────────────────────────────

function renderTrainerCoverageMatrix(data) {
  const wrap = document.getElementById('trainer-coverageMatrix');
  if (!wrap) return;
  const { bus, productTypes, coverage } = _trainerCoverageData(data);
  if (!productTypes.length) {
    wrap.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;text-align:center;padding:20px;">ยังไม่มีข้อมูล BUSetup — กรุณาสร้างตาราง BUSetup ในไฟล์ Excel</p>';
    return;
  }
  const cellCls = pct => {
    if (pct === null) return '';
    if (pct >= 80) return 'cov-high';
    if (pct >= 60) return 'cov-good';
    if (pct >= 30) return 'cov-warn';
    return 'cov-low';
  };
  const colAvg = productTypes.map(pt => {
    const v = bus.map(bu => coverage[bu][pt]).filter(x => x !== null);
    return v.length ? Math.round(v.reduce((s, x) => s + x, 0) / v.length) : null;
  });
  const rowAvg = bus.map(bu => {
    const v = productTypes.map(pt => coverage[bu][pt]).filter(x => x !== null);
    return v.length ? Math.round(v.reduce((s, x) => s + x, 0) / v.length) : null;
  });
  const allV = bus.flatMap(bu => productTypes.map(pt => coverage[bu][pt])).filter(x => x !== null);
  const grandAvg = allV.length ? Math.round(allV.reduce((s, x) => s + x, 0) / allV.length) : null;

  const TH = 'padding:7px 10px;font-size:0.75rem;font-weight:600;background:var(--surface2);color:var(--text);text-align:center;white-space:nowrap;border:1px solid var(--border-light);';
  const TD = 'padding:6px 10px;font-size:0.75rem;text-align:center;border:1px solid var(--border-light);color:var(--text);';
  const ptColW = `${(80 / productTypes.length).toFixed(3)}%`;  // PT columns share 80% equally
  wrap.innerHTML = `
    <table style="border-collapse:collapse;width:100%;min-width:500px;table-layout:fixed;">
      <colgroup>
        <col style="width:12%;">
        ${productTypes.map(() => `<col style="width:${ptColW};">`).join('')}
        <col style="width:8%;">
      </colgroup>
      <thead><tr>
        <th style="${TH}text-align:left;">BU</th>
        ${productTypes.map(pt => `<th style="${TH}word-break:break-word;white-space:normal;">${escapeHtml(pt)}</th>`).join('')}
        <th style="${TH}">x̄</th>
      </tr></thead>
      <tbody>
        ${bus.map((bu, i) => `
        <tr>
          <td style="${TD}text-align:left;font-weight:600;">${escapeHtml(bu)}</td>
          ${productTypes.map(pt => {
            const p = coverage[bu][pt];
            const cls = cellCls(p);
            return `<td class="${cls}" style="${TD}">${p === null ? '—' : p + '%'}</td>`;
          }).join('')}
          <td style="${TD}font-weight:700;">${rowAvg[i] === null ? '—' : rowAvg[i] + '%'}</td>
        </tr>`).join('')}
        <tr style="border-top:2px solid var(--border);">
          <td style="${TD}text-align:left;font-weight:700;">x̄</td>
          ${colAvg.map(v => `<td style="${TD}font-weight:700;">${v === null ? '—' : v + '%'}</td>`).join('')}
          <td style="${TD}font-weight:700;">${grandAvg === null ? '—' : grandAvg + '%'}</td>
        </tr>
      </tbody>
    </table>`;
}

// ── Person list ───────────────────────────────────────────────────────────────

function renderTrainerTable(data) {
  const wrap = document.getElementById('trainer-table');
  if (!wrap) return;
  const { bu, productType, style, status, search } = _trainerTableState.filters;
  const q = search.toLowerCase();

  if (_trainerTableMode === 'person') {
    let rows = [];
    for (const t of data.trainers) {
      if (bu && t.bu !== bu) continue;
      if (status && t.status !== status) continue;
      if (q && !t.name.toLowerCase().includes(q) && !t.empid.toLowerCase().includes(q)) continue;
      const trSkills = (data.skills[t.empid] || []).filter(s =>
        (s.eff || 0) > 0 &&
        (!productType || s.productType === productType) &&
        (!style || s.style === style)
      );
      for (const sk of trSkills) {
        rows.push({
          empid: t.empid, name: t.name, bu: t.bu, status: t.status,
          processNo: sk.processNo, processName: sk.processName,
          machineType: sk.machineType, grade: sk.grade,
          smv: sk.smv, amv: sk.amv, eff: sk.eff,
          productType: sk.productType, style: sk.style,
          expired: sk.expired,
        });
      }
    }

    const total = rows.length;
    const { page, pageSize } = _trainerTableState;
    const pageCount = Math.ceil(total / pageSize) || 1;
    const start     = (page - 1) * pageSize;
    const pageRows  = rows.slice(start, start + pageSize);
    const effColor  = eff => {
      if (eff == null || isNaN(eff)) return 'var(--text-muted)';
      if (eff >= 75) return 'var(--ok)';
      const hue = Math.round((eff / 75) * 120);
      return `hsl(${hue}, 80%, 38%)`;
    };

    if (!pageRows.length) {
      wrap.innerHTML = '<div style="color:var(--text-muted);padding:16px;text-align:center;">ไม่พบข้อมูล</div>';
    } else {
      wrap.innerHTML = `<div style="overflow-x:auto"><table>
        <thead><tr>
          <th>BU</th><th>รหัสพนักงาน</th><th>ชื่อ-สกุล</th>
          <th>Process No</th><th>Process Name</th><th>Machine</th>
          <th>SMV</th><th>AMV</th><th>Eff%</th>
          <th>Product Type</th><th>Style</th><th>หมดอายุ</th>
        </tr></thead>
        <tbody>${pageRows.map(r => `
          <tr>
            <td>${escapeHtml(r.bu)}</td>
            <td>${escapeHtml(r.empid)}</td>
            <td>${escapeHtml(r.name)}</td>
            <td>${escapeHtml(r.processNo || '—')}</td>
            <td>${escapeHtml(r.processName || '—')}</td>
            <td>${escapeHtml(r.machineType || '—')}</td>
            <td style="text-align:right;">${r.smv ? r.smv.toFixed(2) : '—'}</td>
            <td style="text-align:right;">${r.amv ? r.amv.toFixed(2) : '—'}</td>
            <td style="text-align:right;font-weight:700;color:${effColor(r.eff)};">${r.eff ? r.eff.toFixed(1) + '%' : '—'}</td>
            <td>${escapeHtml(r.productType || '—')}</td>
            <td>${escapeHtml(r.style || '—')}</td>
            <td><span class="badge ${Number(r.expired) === 1 ? 'warn' : 'ok'}">${Number(r.expired) === 1 ? 'หมดอายุ' : 'ปกติ'}</span></td>
          </tr>`).join('')}
        </tbody>
      </table></div>`;
    }

    const rl = document.getElementById('trainer-rangeLabel');
    const pl = document.getElementById('trainer-pageLabel');
    const pv = document.getElementById('trainer-prevPage');
    const nv = document.getElementById('trainer-nextPage');
    if (rl) rl.textContent = total > 0 ? `${start+1}–${Math.min(start+pageSize,total)} of ${total}` : '0 items';
    if (pl) pl.textContent = `${page} / ${pageCount}`;
    if (pv) pv.disabled = page <= 1;
    if (nv) nv.disabled = page >= pageCount;

  } else {
    // By Skill Type — pivot: rows = trainers, columns = product types, cell = qualified skill count (eff >= 75)
    const allPts = [...new Set(
      Object.values(data.skills).flat().map(s => s.productType).filter(Boolean)
    )].sort().filter(pt => !productType || pt === productType);

    const filteredTrainers = data.trainers.filter(t => {
      if (bu && t.bu !== bu) return false;
      if (status && t.status !== status) return false;
      if (q && !t.name.toLowerCase().includes(q) && !t.empid.toLowerCase().includes(q)) return false;
      return true;
    }).sort((a, b) => a.bu.localeCompare(b.bu) || a.name.localeCompare(b.name));

    // pivot[empid][pt] = count of qualified skills (eff >= 75) in that product type
    const pivot = {};
    for (const t of filteredTrainers) {
      pivot[t.empid] = {};
      for (const pt of allPts) {
        pivot[t.empid][pt] = (data.skills[t.empid] || []).filter(s =>
          s.productType === pt && (s.eff || 0) >= 75 && (!style || s.style === style)
        ).length;
      }
    }

    const total = filteredTrainers.length;
    const { page, pageSize } = _trainerTableState;
    const pageCount = Math.ceil(total / pageSize) || 1;
    const start     = (page - 1) * pageSize;
    const pageRows  = filteredTrainers.slice(start, start + pageSize);

    if (!total) {
      wrap.innerHTML = '<div style="color:var(--text-muted);padding:16px;text-align:center;">ไม่พบข้อมูล</div>';
    } else {
      wrap.innerHTML = `<div style="overflow-x:auto"><table>
        <thead><tr>
          <th>BU</th><th>ชื่อ-สกุล</th>
          ${allPts.map(pt => `<th style="text-align:center;">${escapeHtml(pt)}</th>`).join('')}
        </tr></thead>
        <tbody>${pageRows.map(t => `
          <tr>
            <td>${escapeHtml(t.bu)}</td>
            <td>${escapeHtml(t.name)}</td>
            ${allPts.map(pt => {
              const cnt = pivot[t.empid][pt];
              return `<td style="text-align:center;">${cnt > 0 ? `<strong>${cnt}</strong>` : '<span style="color:var(--text-muted);">—</span>'}</td>`;
            }).join('')}
          </tr>`).join('')}
        </tbody>
      </table></div>`;
    }

    const rl = document.getElementById('trainer-rangeLabel');
    const pl = document.getElementById('trainer-pageLabel');
    const pv = document.getElementById('trainer-prevPage');
    const nv = document.getElementById('trainer-nextPage');
    if (rl) rl.textContent = total > 0 ? `${start+1}–${Math.min(start+pageSize,total)} of ${total}` : '0 items';
    if (pl) pl.textContent = `${page} of ${pageCount}`;
    if (pv) pv.disabled = page <= 1;
    if (nv) nv.disabled = page >= pageCount;
  }
}

// ── Wire controls ─────────────────────────────────────────────────────────────

function _wireTrainerControls(data) {
  const wire = (id, modeRef, setter, renderFn) => {
    const wrap = document.getElementById(id);
    if (!wrap) return;
    wrap.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.onclick = () => {
        setter(btn.dataset.mode);
        wrap.querySelectorAll('.toggle-btn').forEach(b =>
          b.classList.toggle('active', b.dataset.mode === btn.dataset.mode));
        renderFn(data, btn.dataset.mode);
      };
    });
  };
  wire('trainer-buChartToggle',      _trainerBuMode,     m => { _trainerBuMode = m; },     _makeTrainerBuChart);
  wire('trainer-insideDataToggle',   _trainerInsideMode,  m => {
    _trainerInsideMode = m;
    if (m !== 'ttt') _trainerTttBu = '';
    if (m !== 'individual') {
      _trainerIndividualBu = '';
      const ib = document.getElementById('trainer-individualBtn');
      if (ib) ib.textContent = 'Individual';
      const im = document.getElementById('trainer-individualMenu');
      if (im) im.classList.add('hidden');
    }
  },  _makeTrainerInsideChart);

  // Individual mode — floating BU sub-menu under the Individual button
  const indBtn  = document.getElementById('trainer-individualBtn');
  const indMenu = document.getElementById('trainer-individualMenu');
  if (indBtn && indMenu) {
    const bus = [...new Set(data.trainers.map(t => t.bu))].sort();
    indMenu.innerHTML = bus.map(b =>
      `<button type="button" class="individual-menu-item${b === _trainerIndividualBu ? ' active' : ''}" data-bu="${escapeHtml(b)}">${escapeHtml(b)}</button>`
    ).join('');

    // Override the generic toggle handler: activate mode AND open/close the menu
    indBtn.onclick = (e) => {
      e.stopPropagation();
      _trainerInsideMode = 'individual';
      document.querySelectorAll('#trainer-insideDataToggle .toggle-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.mode === 'individual'));
      _makeTrainerInsideChart(data, 'individual');
      indMenu.classList.toggle('hidden');
    };

    indMenu.querySelectorAll('.individual-menu-item').forEach(item => {
      item.onclick = (e) => {
        e.stopPropagation();
        _trainerIndividualBu = item.dataset.bu;
        indMenu.querySelectorAll('.individual-menu-item').forEach(i =>
          i.classList.toggle('active', i.dataset.bu === _trainerIndividualBu));
        indBtn.textContent = `Individual: ${_trainerIndividualBu} ▾`;
        indMenu.classList.add('hidden');
        _makeTrainerInsideChart(data, 'individual');
      };
    });

    // Close the menu when clicking anywhere else (incl. other toggle buttons)
    if (!window._trainerIndMenuCloser) {
      window._trainerIndMenuCloser = true;
      document.addEventListener('click', (e) => {
        const menu = document.getElementById('trainer-individualMenu');
        if (menu && !menu.classList.contains('hidden') && !menu.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });
    }
  }

  const tableToggle = document.getElementById('trainer-tableToggle');
  if (tableToggle) {
    tableToggle.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.onclick = () => {
        _trainerTableMode = btn.dataset.mode;
        tableToggle.querySelectorAll('.toggle-btn').forEach(b =>
          b.classList.toggle('active', b.dataset.mode === _trainerTableMode));
        _trainerTableState.page = 1;
        renderTrainerTable(data);
      };
    });
  }

  const hideBtn = document.getElementById('trainer-tableHideBtn');
  if (hideBtn) {
    hideBtn.onclick = () => {
      _trainerTableVisible = !_trainerTableVisible;
      const body = document.getElementById('trainer-tableBody');
      if (body) body.style.display = _trainerTableVisible ? '' : 'none';
      hideBtn.textContent = _trainerTableVisible ? 'ซ่อน ▲' : 'แสดง ▼';
    };
  }

  const buSel     = document.getElementById('trainer-filterBu');
  const ptSel     = document.getElementById('trainer-filterProductType');
  const styleSel  = document.getElementById('trainer-filterStyle');
  const statusSel = document.getElementById('trainer-filterStatus');
  const searchInp = document.getElementById('trainer-filterSearch');
  const prevBtn   = document.getElementById('trainer-prevPage');
  const nextBtn   = document.getElementById('trainer-nextPage');
  const pageSel   = document.getElementById('trainer-pageSize');

  if (buSel) {
    const bus = [...new Set(data.trainers.map(t => t.bu))].sort();
    buSel.innerHTML = '<option value="">All BU</option>' +
      bus.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
    buSel.onchange = () => { _trainerTableState.filters.bu = buSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
  }
  const populateStyles = (forPt) => {
    if (!styleSel) return;
    const styles = [...new Set(
      Object.values(data.skills).flat()
        .filter(s => !forPt || s.productType === forPt)
        .map(s => s.style)
        .filter(Boolean)
    )].sort();
    styleSel.innerHTML = '<option value="">All Styles</option>' +
      styles.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
  };

  if (ptSel) {
    const pts = [...new Set(Object.values(data.skills).flat().map(s => s.productType).filter(Boolean))].sort();
    ptSel.innerHTML = '<option value="">All Product Types</option>' +
      pts.map(p => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join('');
    ptSel.onchange = () => {
      _trainerTableState.filters.productType = ptSel.value;
      _trainerTableState.filters.style = '';
      populateStyles(ptSel.value);
      _trainerTableState.page = 1;
      renderTrainerTable(data);
    };
  }
  if (styleSel) {
    populateStyles('');
    styleSel.onchange = () => { _trainerTableState.filters.style = styleSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
  }
  if (statusSel) {
    ['Master Trainer','Certified','On-Progress','No-Certified'].forEach(s => {
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      statusSel.appendChild(opt);
    });
    statusSel.onchange = () => { _trainerTableState.filters.status = statusSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
  }
  if (searchInp) {
    let db;
    searchInp.oninput = () => {
      clearTimeout(db);
      db = setTimeout(() => { _trainerTableState.filters.search = searchInp.value; _trainerTableState.page = 1; renderTrainerTable(data); }, 250);
    };
  }
  if (prevBtn) prevBtn.onclick = () => { _trainerTableState.page--; renderTrainerTable(data); };
  if (nextBtn) nextBtn.onclick = () => { _trainerTableState.page++; renderTrainerTable(data); };
  if (pageSel) pageSel.onchange = () => { _trainerTableState.pageSize = +pageSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
}

// ── Main init ─────────────────────────────────────────────────────────────────

async function initTrainerTab() {
  if (_trainerLoaded) return;
  const loadingEl = document.getElementById('trainer-loading');
  const errorEl   = document.getElementById('trainer-error');
  const dashEl    = document.getElementById('trainer-dashboard');
  try {
    const res = await fetch('/api/trainer-excel');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    _trainerData = await res.json();
    if (_trainerData.error) throw new Error(_trainerData.error);
    _trainerLoaded = true;
    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');
    renderTrainerSummaryCards(_trainerData);
    renderTrainerCharts(_trainerData);
    renderTrainerCoverageMatrix(_trainerData);
    renderTrainerTable(_trainerData);
    _wireTrainerControls(_trainerData);
  } catch (err) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.innerHTML = `<p style="color:var(--danger);font-weight:600;">${escapeHtml(err.message)}</p>
        <button onclick="initTrainerTab()" style="margin-top:8px;">ลองใหม่</button>`;
      errorEl.classList.remove('hidden');
    }
  }
}

// =============================================================================
// GICA ASSESSMENT TAB
// Data from /api/gica-excel (Flask → OneDrive via MANAGER_REFRESH_TOKEN).
// Each employee's CURRENT status = their latest non-empty test slot (#15 → #1).
// Grades: A ≥ 85% · B ≥ 65% · C ≥ 50% · D < 50%.
// Next test: A → Review (+30 working days) · B/C/D → Retest (+7 working days).
// =============================================================================

const GICA_GRADES        = ['A', 'B', 'C', 'D'];
const GICA_GRADE_RANK    = { A: 4, B: 3, C: 2, D: 1 };
const GICA_GRADE_COLORS  = { A: '#16a34a', B: '#2563eb', C: '#f59e0b', D: '#dc2626' };
const GICA_GRADE_BG      = { A: '#dcfce7', B: '#dbeafe', C: '#fef3c7', D: '#fee2e2' };
const GICA_LEVEL_ORDER   = ['QEDM','AQEDM','DVM','ADVM','DPM','ADPM','Department Head','Supervisor*','Supervisor','Officer','Worker'];
const GICA_QUAD_GROUPS = [
  { id: 'g-qdm',  label: 'QEDM / AQEDM / DVM / ADVM', levels: ['QEDM','AQEDM','DVM','ADVM'], expM: 'B', expI: 'C' },
  { id: 'g-dpm',  label: 'DPM / ADPM',                 levels: ['DPM','ADPM'],                 expM: 'B', expI: 'B' },
  { id: 'g-sups', label: 'Supervisor*',                 levels: ['Supervisor*'],                expM: 'A', expI: 'B' },
  { id: 'g-sup',  label: 'Supervisor',                  levels: ['Supervisor'],                 expM: 'A', expI: 'A' },
  { id: 'g-off',  label: 'Officer',                     levels: ['Officer'],                    expM: 'A', expI: 'A' },
  { id: 'g-wkr',  label: 'Worker',                      levels: ['Worker'],                     expM: 'A', expI: 'A' },
];
const GICA_GRADE_THRESH = { A: 0.85, B: 0.65, C: 0.50, D: 0.00 };
const GICA_GRADE_TEXT    = { A: '#15803d', B: '#1d4ed8', C: '#b45309', D: '#b91c1c' };

let _gicaData         = null;
let _gicaLoaded       = false;
let _gicaCharts       = {};
let _gicaTrendCharts  = {};
let _gicaSchedMode  = 'all';
let _gicaSchedDate  = '';
let _gicaSchedBu    = '';
// { [level]: { all: pct, [bu]: pct } } — "all" is the generic fallback (KPI Setup
// modal's "All BU" tab); per-BU keys are seeded from kpi_g1/kpi_g2/... on load and
// can be adjusted in-session per BU for "what if" simulation (not persisted).
let _gicaKpiTargets = {};
let _gicaKpiActiveBu = 'all';
const _gicaTableState = {
  page: 1, pageSize: 25, sortKey: 'nextDate', sortDir: 1,
  filters: { bu: '', grade: '', dept: '', level: '', type: '', search: '' },
};

// ── Date / format helpers ─────────────────────────────────────────────────────
function _gicaToday() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
function _gicaParseDate(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d.getTime()) ? null : d;
}
function _gicaDaysUntil(iso) {
  const d = _gicaParseDate(iso);
  return d ? Math.round((d - _gicaToday()) / 86400000) : null;
}
function _gicaFmtDate(iso) {
  const d = _gicaParseDate(iso);
  if (!d) return '—';
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
}
function _gicaScoreToGrade(s) {
  if (s == null) return '';
  if (s >= 0.85) return 'A';
  if (s >= 0.65) return 'B';
  if (s >= 0.50) return 'C';
  return 'D';
}
function _gicaGradeBadge(g) {
  if (!g) return '—';
  return `<span style="display:inline-block;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:10px;background:${GICA_GRADE_BG[g] || '#eee'};color:${GICA_GRADE_TEXT[g] || '#333'};">${g}</span>`;
}
function _gicaTypeBadge(t) {
  if (!t) return '—';
  const bg  = t === 'Review' ? '#dbeafe' : '#fee2e2';
  const col = t === 'Review' ? '#1d4ed8' : '#b91c1c';
  return `<span style="font-size:0.68rem;font-weight:600;padding:2px 7px;border-radius:10px;background:${bg};color:${col};">${t}</span>`;
}
function _gicaDaysBadge(iso) {
  const d = _gicaDaysUntil(iso);
  if (d == null) return '';
  let bg, col, txt;
  if (d < 0)       { bg = '#fee2e2'; col = '#b91c1c'; txt = `${Math.abs(d)} days overdue`; }
  else if (d <= 3) { bg = '#fee2e2'; col = '#b91c1c'; txt = `${d} วัน`; }
  else if (d <= 7) { bg = '#fef3c7'; col = '#b45309'; txt = `${d} วัน`; }
  else             { bg = '#dbeafe'; col = '#1d4ed8'; txt = `${d} วัน`; }
  return `<span style="font-size:0.68rem;font-weight:600;padding:2px 7px;border-radius:10px;background:${bg};color:${col};">${txt}</span>`;
}
function _gicaPBar(pct, color) {
  const p = Math.max(0, Math.min(100, pct));
  return `<div style="height:7px;background:var(--border-light);border-radius:4px;overflow:hidden;">
    <div style="height:100%;width:${p}%;background:${color};border-radius:4px;"></div></div>`;
}
function _gicaExpBadge(g) {
  return g && GICA_GRADE_COLORS[g]
    ? `<span class="exp-badge exp-badge--${g}">${g}</span>`
    : `<span class="exp-badge exp-badge--expect">—</span>`;
}

// KPI Setup modal slider list for one tab ('all' or a BU code) — reads the live
// _gicaKpiTargets global so it can be re-rendered standalone on tab switch.
function _gicaKpiListHtml(bu) {
  return GICA_LEVEL_ORDER.filter(l => l !== 'Department Head').map(lv => {
    const t = _gicaKpiTargets[lv] || { all: 80 };
    const val = (bu === 'all' ? t.all : (t[bu] ?? t.all)) ?? 80;
    return `
      <div class="gica-kpi-row" data-level="${escapeHtml(lv)}">
        <span class="gica-kpi-row__label">${escapeHtml(lv)}</span>
        <input type="range" class="gica-kpi-slider" min="0" max="100" step="5"
          value="${val}" data-level="${escapeHtml(lv)}">
        <span class="gica-kpi-row__val">${val}%</span>
      </div>`;
  }).join('');
}

// ── Entry point ───────────────────────────────────────────────────────────────
async function initGicaTab() {
  if (_gicaLoaded) return;
  const loadingEl = $('gica-loading');
  const errorEl   = $('gica-error');
  const dashEl    = $('gica-dashboard');
  if (loadingEl) loadingEl.classList.remove('hidden');
  if (errorEl)   errorEl.classList.add('hidden');
  if (dashEl)    dashEl.classList.add('hidden');
  try {
    const res = await fetch('/api/gica-excel');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    _gicaData = await res.json();
    if (_gicaData.error) throw new Error(_gicaData.error);
    _gicaLoaded = true;

    // Seed KPI targets from kpi_g1/kpi_g2/... (per-BU defaults from Excel) — the
    // generic "all" fallback stays at 80 unless a level has no BU-specific value.
    GICA_LEVEL_ORDER.forEach(lv => { _gicaKpiTargets[lv] = { all: 80 }; });
    Object.entries(_gicaData.kpiDefaults || {}).forEach(([bu, levels]) => {
      Object.entries(levels || {}).forEach(([lv, pct]) => {
        if (!_gicaKpiTargets[lv]) _gicaKpiTargets[lv] = { all: 80 };
        _gicaKpiTargets[lv][bu] = pct;
      });
    });

    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');
    requestAnimationFrame(syncGicaSubtabTop);
    // Wire sub-tabs (Performance / Assessment Schedule / Employee List)
    dashEl.querySelectorAll('.gica-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dashEl.querySelectorAll('.gica-subtab-btn').forEach(b => b.classList.toggle('gica-subtab-btn--active', b === btn));
        const subtab     = btn.dataset.subtab;
        const perfPanel  = $('gica-perf-panel');
        const schedPanel = $('gica-sched-panel');
        const empPanel   = $('gica-emplist-panel');
        if (perfPanel)  perfPanel.classList.toggle('hidden',  subtab !== 'performance');
        if (schedPanel) schedPanel.classList.toggle('hidden', subtab !== 'assessment-schedule');
        if (empPanel)   empPanel.classList.toggle('hidden',   subtab !== 'employee-list');
        if (subtab === 'assessment-schedule') {
          // Schedule canvas needs DOM visibility for Chart.js to size correctly.
          if (!_gicaScheduleRendered) { renderGicaSchedule(); _gicaScheduleRendered = true; }
          else if (_gicaSchedTimelineChart) _gicaSchedTimelineChart.resize();
        } else if (subtab === 'employee-list') {
          if (!_gicaEmpListRendered) { renderGicaTable(); _wireGicaControls(); _gicaEmpListRendered = true; }
        }
      });
    });

    // Month-dots → attempt-history modal: shared across every table that uses
    // _gicaEmpTableHtml (Employee List, BU cohort, Calendar drill, Schedule drill),
    // so wire it once via delegation instead of per-table.
    dashEl.addEventListener('click', e => {
      const dotsEl = e.target.closest('.gica-month-dots[data-empid]');
      if (dotsEl) _gicaShowAttemptDotsModal(dotsEl.dataset.empid);
    });
    const attemptDotsModal = $('gica-attempt-dots-modal');
    const closeAttemptDotsModal = () => {
      if (!attemptDotsModal) return;
      attemptDotsModal.classList.add('hidden');
      attemptDotsModal.classList.remove('gica-modal--paired-right');
      $('gica-result-modal')?.classList.remove('gica-modal--paired-left');
    };
    $('gica-attempt-dots-close')?.addEventListener('click', closeAttemptDotsModal);
    $('gica-attempt-dots-backdrop')?.addEventListener('click', closeAttemptDotsModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAttemptDotsModal(); });

    // QE/Admin-only write UI on Employee List
    if (['qe_edit', 'gica_admin', 'admin'].includes(currentRole)) {
      _wireGicaResultModal();
      _wireGicaCreateModal();
      $('gica-create-operator-btn')?.classList.remove('hidden');
    }
    // Score History delete is admin-only, but wiring the modal is harmless for others
    // (the button that opens it is hidden unless admin).
    if (['gica_admin', 'admin'].includes(currentRole)) _wireGicaScoreHistoryModal();

    renderGicaSummary();
  } catch (err) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.innerHTML = `<p style="color:var(--danger);font-weight:600;">${escapeHtml(err.message)}</p>
        <button onclick="initGicaTab()" style="margin-top:8px;">ลองใหม่</button>`;
      errorEl.classList.remove('hidden');
    }
  }
}

// ── Summary: KPI cards + BU breakdown ─────────────────────────────────────────
// Functional core / imperative shell:
//   _computeGicaSummary → viewModel   (pure: data in → plain object out)
//   _gicaSummaryHtml    → html string (pure: viewModel in → string out; no DOM, no globals)
//   _mountGicaSummary   → DOM         (imperative shell: the only DOM touch)
//   renderGicaSummary   → orchestrator that wires the three together
// Coverage list for the FLIP-BACK of each Quadrant card.
// Rules (locked by user 2026-08-06):
//   • Show every level in group.levels — even levels with zero employees anywhere.
//   • Ignore the section's BU/Dept filters (always full dataset).
//   • Group by department (levels listed as children); levels with no matching
//     employee anywhere collect under a "(no data)" bucket at the bottom.
// Source of truth for dept↔level↔role mapping is `gica_freq` (freqTable),
// NOT actual employee rows. Freq defines the org structure (which dept has
// which levels + role labels); employees are just instances of those slots.
function _computeGicaQuadCoverage(freqTable, group) {
  // dept -> level -> Set<role>
  const deptMap = new Map();
  const seenLevels = new Set();
  (freqTable || []).forEach(r => {
    if (!r || !r.level || !r.department) return;
    if (!group.levels.includes(r.level)) return;
    if (!deptMap.has(r.department)) deptMap.set(r.department, new Map());
    const lvMap = deptMap.get(r.department);
    if (!lvMap.has(r.level)) lvMap.set(r.level, new Set());
    if (r.role) lvMap.get(r.level).add(r.role);
    seenLevels.add(r.level);
  });
  const depts = [...deptMap.keys()].sort((a, b) => a.localeCompare(b)).map(d => {
    const lvMap = deptMap.get(d);
    const levels = [...lvMap.keys()]
      .sort((a, b) => group.levels.indexOf(a) - group.levels.indexOf(b))
      .map(lv => ({
        level: lv,
        roles: [...lvMap.get(lv)].sort((a, b) => a.localeCompare(b)),
      }));
    return { dept: d, levels };
  });
  const missingLevels = group.levels.filter(l => !seenLevels.has(l));
  return { depts, missingLevels };
}

function _gicaQuadBackHtml(group, coverage) {
  const renderLevel = lv => `
    <div class="quad-back-level">- ${escapeHtml(lv.level)}</div>
    ${lv.roles.map(r => `<div class="quad-back-pos">* ${escapeHtml(r)}</div>`).join('')}
  `;
  const rows = coverage.depts.map(d => `
    <div class="quad-back-dept">${escapeHtml(d.dept)}</div>
    ${d.levels.map(renderLevel).join('')}
  `).join('');
  const missing = coverage.missingLevels.length ? `
    <div class="quad-back-dept quad-back-dept--missing">(ไม่พบข้อมูล)</div>
    ${coverage.missingLevels.map(lv => `<div class="quad-back-level">- ${escapeHtml(lv)}</div>`).join('')}
  ` : '';
  return `${rows}${missing}` || '<div class="quad-back-empty">—</div>';
}

function _computeGicaQuadrant(emps, groupId, buSet, deptSet) {
  const grp = GICA_QUAD_GROUPS.find(g => g.id === groupId) || GICA_QUAD_GROUPS[0];
  const xT  = grp.expM ? GICA_GRADE_THRESH[grp.expM] : null;
  const yT  = grp.expI ? GICA_GRADE_THRESH[grp.expI] : null;

  const jitter = (i, axis) => {
    const h = Math.sin(i * 127.1 + axis * 311.7) * 43758.5453;
    return (h - Math.floor(h) - 0.5) * 0.03;
  };

  const points = [];
  emps.forEach((e, i) => {
    if (!e.score1 && !e.score2) return;
    if (buSet.size   > 0 && !buSet.has(e.bu))         return;
    if (deptSet.size > 0 && !deptSet.has(e.deptname)) return;
    if (grp.levels && !grp.levels.includes(e.level)) return;
    const rx = e.score1 || 0, ry = e.score2 || 0;
    // Jitter is for plot position ONLY (so overlapping dots are visible) — pass/fail
    // quadrant must be decided from the raw, unjittered score or borderline scores
    // (e.g. right at the B/B threshold) can randomly land on the wrong side of the line.
    const x  = Math.max(0.0, Math.min(1.0, rx + jitter(i, 0)));
    const y  = Math.max(0.0, Math.min(1.0, ry + jitter(i, 1)));
    const quad = xT !== null
      ? (rx >= xT && ry >= yT ? 'I' : rx < xT && ry >= yT ? 'II' : rx >= xT ? 'III' : 'IV')
      : (e.passed === true ? 'pass' : e.passed === false ? 'fail' : 'na');
    points.push({ x, y, raw1: rx, raw2: ry, quad,
      name: e.name, bu: e.bu, level: e.level, grade1: e.grade1, grade2: e.grade2 });
  });

  const counts = {};
  points.forEach(p => { counts[p.quad] = (counts[p.quad] || 0) + 1; });
  return { points, xT, yT, counts, grp, total: points.length };
}

function _computeGicaSummary(emps, busRaw, kpiTargets = {}, freqTable = []) {
  const total = emps.length;
  const byGrade = { A: 0, B: 0, C: 0, D: 0 };
  // Grade distribution split by sub-test: Measurement = grade{i}-1, Inspection = grade{i}-2
  const byGradeMeasure = { A: 0, B: 0, C: 0, D: 0 };
  const byGradeInspect = { A: 0, B: 0, C: 0, D: 0 };
  emps.forEach(e => {
    if (byGrade[e.grade] != null) byGrade[e.grade]++;
    if (byGradeMeasure[e.grade1] != null) byGradeMeasure[e.grade1]++;
    if (byGradeInspect[e.grade2] != null) byGradeInspect[e.grade2]++;
  });
  const _sum = o => o.A + o.B + o.C + o.D;

  // Avg score denominator excludes untested employees so a BU with many
  // uninitiated rows isn't dragged toward zero. "Has a score" = the latest
  // attempt carries BOTH Measurement (score1) and Inspection (score2).
  const hasBothScores = e =>
    Number.isFinite(e.score1) && Number.isFinite(e.score2) && e.score1 > 0 && e.score2 > 0;
  const scoredEmps    = emps.filter(hasBothScores);
  const scoredCount   = scoredEmps.length;

  const totMeasure = _sum(byGradeMeasure), totInspect = _sum(byGradeInspect);
  const avgScore   = scoredCount ? scoredEmps.reduce((s, e) => s + (e.score  || 0), 0) / scoredCount : 0;
  const avgMeasure = scoredCount ? scoredEmps.reduce((s, e) => s + (e.score1 || 0), 0) / scoredCount : 0;
  const avgInspect = scoredCount ? scoredEmps.reduce((s, e) => s + (e.score2 || 0), 0) / scoredCount : 0;

  const bus = sortBus(busRaw);
  const retestBuRows = bus.map(bu => ({
    bu,
    n: emps.filter(e => e.bu === bu && e.passed === false).length,
  }));

  const buCards = BU_ORDER.map(bu => {
    const inBu = emps.filter(e => e.bu === bu);
    if (!inBu.length) return { bu, empty: true };
    const cnt         = { A: 0, B: 0, C: 0, D: 0 };
    const cntMeasure  = { A: 0, B: 0, C: 0, D: 0 };
    const cntInspect  = { A: 0, B: 0, C: 0, D: 0 };
    inBu.forEach(e => {
      if (cnt[e.grade]         != null) cnt[e.grade]++;
      if (cntMeasure[e.grade1] != null) cntMeasure[e.grade1]++;
      if (cntInspect[e.grade2] != null) cntInspect[e.grade2]++;
    });
    // Same "has-a-score" denominator as the top-row KPI (see hasBothScores above).
    const scoredInBu  = inBu.filter(hasBothScores);
    const scoredNBu   = scoredInBu.length;
    const avg        = scoredNBu ? scoredInBu.reduce((s, e) => s + (e.score  || 0), 0) / scoredNBu : 0;
    const avgMeasure = scoredNBu ? scoredInBu.reduce((s, e) => s + (e.score1 || 0), 0) / scoredNBu : 0;
    const avgInspect = scoredNBu ? scoredInBu.reduce((s, e) => s + (e.score2 || 0), 0) / scoredNBu : 0;
    const totM = _sum(cntMeasure), totI = _sum(cntInspect);
    const deptMap = {}, levelMap = {};
    inBu.forEach(e => {
      if (e.deptname) deptMap[e.deptname] = (deptMap[e.deptname] || 0) + 1;
      if (e.level)    levelMap[e.level]    = (levelMap[e.level]    || 0) + 1;
    });
    const deptRows  = Object.entries(deptMap).sort((a, b) => a[0].localeCompare(b[0]));
    const levelRows = Object.entries(levelMap).sort((a, b) => {
      const ia = GICA_LEVEL_ORDER.indexOf(a[0]), ib = GICA_LEVEL_ORDER.indexOf(b[0]);
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return  1;
      return a[0].localeCompare(b[0]);
    });
    const passN = inBu.filter(e => e.passed === true).length;
    const failN = inBu.filter(e => e.passed === false).length;
    const untestedN = inBu.length - passN - failN;
    return {
      bu, empty: false, count: inBu.length, cnt,
      passN, failN, untestedN,
      avgPct: Math.round(avg * 100), avgGrade: _gicaScoreToGrade(avg),
      aTargetPct: Math.min(100, Math.round(cnt.A / (inBu.length * 0.8) * 100)),
      cntMeasure, totMeasureBu: totM,
      avgMeasurePct: Math.round(avgMeasure * 100), avgMeasureGrade: _gicaScoreToGrade(avgMeasure),
      aMeasureBuPct: totM ? Math.round(cntMeasure.A / totM * 100) : 0,
      cntInspect, totInspectBu: totI,
      avgInspectPct: Math.round(avgInspect * 100), avgInspectGrade: _gicaScoreToGrade(avgInspect),
      aInspectBuPct: totI ? Math.round(cntInspect.A / totI * 100) : 0,
      deptRows, levelRows,
    };
  });

  // Expectation matrix: BU × Level — cell aggregates pass% + avg grade vs expectation
  const _avgGrade = arr => {
    if (!arr.length) return null;
    const ranks = arr.map(g => GICA_GRADE_RANK[g] || 0).filter(r => r > 0);
    if (!ranks.length) return null;
    const avg = ranks.reduce((s, r) => s + r, 0) / ranks.length;
    return Object.keys(GICA_GRADE_RANK).reduce((best, g) =>
      Math.abs(GICA_GRADE_RANK[g] - avg) < Math.abs(GICA_GRADE_RANK[best] - avg) ? g : best, 'D');
  };
  const _mode = arr => {
    const cnt = {};
    arr.forEach(v => { if (v) cnt[v] = (cnt[v] || 0) + 1; });
    let best = '', max = 0;
    Object.entries(cnt).forEach(([k, v]) => { if (v > max) { best = k; max = v; } });
    return best;
  };
  const expMatrix = GICA_LEVEL_ORDER
    .filter(lv => lv !== 'Department Head')
    .map(lv => {
      const atLevel = emps.filter(e => e.level === lv);
      const freqAtLevel = freqTable.filter(r => r.level === lv);
      const expM = _mode(freqAtLevel.map(r => r.expectation1));
      const expI = _mode(freqAtLevel.map(r => r.expectation2));
      const cells = {};
      BU_ORDER.forEach(bu => {
        const cell = atLevel.filter(e => e.bu === bu);
        if (!cell.length) { cells[bu] = { empty: true }; return; }
        const passBoth = cell.filter(e => e.passed === true).length;
        const passMcnt = cell.filter(e =>
          e.exp1 && e.grade1 && (GICA_GRADE_RANK[e.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0)).length;
        const passIcnt = cell.filter(e =>
          e.exp2 && e.grade2 && (GICA_GRADE_RANK[e.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0)).length;
        const avgM = _avgGrade(cell.map(e => e.grade1));
        const avgI = _avgGrade(cell.map(e => e.grade2));
        cells[bu] = {
          empty: false, count: cell.length,
          avgM, avgI,
          passBothCount: passBoth,
          passBothPct: Math.round(passBoth / cell.length * 100),
          passMPct: Math.round(passMcnt / cell.length * 100),
          passIPct: Math.round(passIcnt / cell.length * 100),
          passOkM: avgM && expM && (GICA_GRADE_RANK[avgM] || 0) >= (GICA_GRADE_RANK[expM] || 0),
          passOkI: avgI && expI && (GICA_GRADE_RANK[avgI] || 0) >= (GICA_GRADE_RANK[expI] || 0),
        };
      });
      return { level: lv, expM, expI, cells };
    });

  const _cellForGroup = (group, expM, expI) => {
    const cells = {};
    BU_ORDER.forEach(bu => {
      const cell = group.filter(e => e.bu === bu);
      if (!cell.length) { cells[bu] = { empty: true }; return; }
      const passBoth = cell.filter(e => e.passed === true).length;
      const passMcnt = cell.filter(e =>
        e.exp1 && e.grade1 && (GICA_GRADE_RANK[e.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0)).length;
      const passIcnt = cell.filter(e =>
        e.exp2 && e.grade2 && (GICA_GRADE_RANK[e.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0)).length;
      const avgM = _avgGrade(cell.map(e => e.grade1));
      const avgI = _avgGrade(cell.map(e => e.grade2));
      cells[bu] = {
        empty: false, count: cell.length,
        avgM, avgI,
        passBothCount: passBoth,
        passBothPct: Math.round(passBoth / cell.length * 100),
        passMPct: Math.round(passMcnt / cell.length * 100),
        passIPct: Math.round(passIcnt / cell.length * 100),
        passOkM: avgM && expM && (GICA_GRADE_RANK[avgM] || 0) >= (GICA_GRADE_RANK[expM] || 0),
        passOkI: avgI && expI && (GICA_GRADE_RANK[avgI] || 0) >= (GICA_GRADE_RANK[expI] || 0),
      };
    });
    return cells;
  };
  const _aggForGroup = group => {
    const cells = {};
    BU_ORDER.forEach(bu => {
      const cell = group.filter(e => e.bu === bu);
      if (!cell.length) { cells[bu] = { empty: true }; return; }
      const passBoth = cell.filter(e => e.passed === true).length;
      cells[bu] = { empty: false, count: cell.length, passBothCount: passBoth,
        passBothPct: Math.round(passBoth / cell.length * 100) };
    });
    return cells;
  };

  const depts = [...new Set(emps.map(e => e.deptname).filter(Boolean))].sort();
  const expMatrixDept = depts.map(dept => {
    const atDept = emps.filter(e => e.deptname === dept);
    const levelRows = GICA_LEVEL_ORDER
      .filter(lv => atDept.some(e => e.level === lv))
      .map(lv => {
        const atLevel = atDept.filter(e => e.level === lv);
        const freqAtDeptLevel = freqTable.filter(r => r.level === lv && r.department === dept);
        const expM = _mode(freqAtDeptLevel.map(r => r.expectation1));
        const expI = _mode(freqAtDeptLevel.map(r => r.expectation2));
        return { level: lv, expM, expI, cells: _cellForGroup(atLevel, expM, expI) };
      });
    return { dept, deptAgg: _aggForGroup(atDept), levelRows };
  });

  const GICA_TREND_MAX = 12;
  const trendByBu = {};
  BU_ORDER.forEach(bu => {
    const inBu = emps.filter(e => e.bu === bu);
    if (!inBu.length) { trendByBu[bu] = null; return; }
    const measAcc = Array.from({length: GICA_TREND_MAX}, () => ({ s: 0, n: 0 }));
    const inspAcc = Array.from({length: GICA_TREND_MAX}, () => ({ s: 0, n: 0 }));
    // Denominator matches KPI + BU cards: only employees whose latest attempt carries
    // BOTH Measurement and Inspection count. Someone with a half-recorded attempt
    // (only Meas or only Insp) contributes to the numerator via their history rows
    // but not to the count — consistent with the "has a score" rule above.
    const eligibleCount = inBu.filter(hasBothScores).length;
    // Carry-forward only goes as far as the BU's actual highest attempt count — if
    // nobody in the BU has tested past attempt 3, slots 4-12 must stay null (no data)
    // rather than flat-lining everyone's attempt-3 score out to slot 12.
    const maxLen = Math.min(GICA_TREND_MAX, inBu.reduce((m, e) => Math.max(m, (e.history || []).length), 0));
    inBu.forEach(e => {
      const hist = e.history || [];
      if (!hist.length) return; // never tested — no "latest" score to carry forward
      // Carry-forward: every attempt slot (up to maxLen) uses this person's LATEST
      // recorded score as of that point (their actual attempt k if they've taken it,
      // otherwise their most recent prior attempt) — same "always everyone's latest
      // data" philosophy as the row-2 front-face cards, instead of leaving slots blank
      // for people who simply haven't been re-tested yet.
      for (let k = 0; k < maxLen; k++) {
        const h = hist[Math.min(k, hist.length - 1)];
        if (h.score1 != null) { measAcc[k].s += h.score1; measAcc[k].n++; }
        if (h.score2 != null) { inspAcc[k].s += h.score2; inspAcc[k].n++; }
      }
    });
    trendByBu[bu] = {
      meas: measAcc.map(x => (eligibleCount && x.n) ? Math.round(x.s / eligibleCount * 100) : null),
      insp: inspAcc.map(x => (eligibleCount && x.n) ? Math.round(x.s / eligibleCount * 100) : null),
    };
  });

  return {
    total, byGrade,
    byGradeMeasure, byGradeInspect, totMeasure, totInspect,
    aMeasure: byGradeMeasure.A,
    aInspect: byGradeInspect.A,
    aMeasurePct: totMeasure ? Math.round(byGradeMeasure.A / totMeasure * 100) : 0,
    aInspectPct: totInspect ? Math.round(byGradeInspect.A / totInspect * 100) : 0,
    avgPct:        Math.round(avgScore * 100),
    avgGrade:      _gicaScoreToGrade(avgScore),
    avgMeasurePct: Math.round(avgMeasure * 100),
    avgInspectPct: Math.round(avgInspect * 100),
    totalPass:     emps.filter(e => e.passed === true).length,
    totalFail:     emps.filter(e => e.passed === false).length,
    totalAwaiting: emps.filter(e => e.passed !== true && e.passed !== false).length,
    retestBuRows, buCards,
    expMatrix, expMatrixDept,
    expMatrixBus:   BU_ORDER,
    expMatrixDepts: [...new Set(emps.map(e => e.deptname).filter(Boolean))].sort(),
    kpiTargets,
    trendByBu,
    freqTable,
    emps,
  };
}

// KPI Summary — actual pass/fail counts per BU + organization rollup.
// "Passed" mirrors the same rule used elsewhere: latest attempt's grades ≥
// expectations from gica_freq (backend fills e.passed).
function _computeGicaKpiSummary(emps) {
  const mk = () => ({ total: 0, tested: 0, passed: 0, failed: 0, pending: 0 });
  const org = mk();
  const buStats = {};
  BU_ORDER.forEach(bu => { buStats[bu] = { bu, ...mk() }; });

  emps.forEach(e => {
    if (!e.bu || !buStats[e.bu]) return;
    const s = buStats[e.bu];
    s.total++; org.total++;
    if (e.passed === true) {
      s.passed++; s.tested++;
      org.passed++; org.tested++;
    } else if (e.passed === false) {
      s.failed++; s.tested++;
      org.failed++; org.tested++;
    } else {
      s.pending++; org.pending++;
    }
  });

  const withRate = (s, denomKey) => ({
    ...s,
    passRate: s[denomKey] > 0 ? (s.passed / s[denomKey] * 100) : null,
  });

  return {
    // Organization KPI: passed / TOTAL (all employees across every BU, including untested)
    org: withRate(org, 'total'),
    // Per-BU KPI: passed / TESTED (only people actually assessed in that BU)
    bus: BU_ORDER.map(bu => withRate(buStats[bu], 'tested')),
  };
}

function _gicaKpiSummaryHtml(vm) {
  const { org, bus } = vm;
  // Ring geometry: 84px diameter, 8px stroke.
  const ring = (pct, color, size = 84, sw = 8) => {
    const r = (size - sw) / 2, cx = size / 2, cy = size / 2;
    const circ = 2 * Math.PI * r;
    const p = pct == null ? 0 : Math.max(0, Math.min(100, pct));
    const dash = (p / 100) * circ;
    return `
      <svg class="kpi-sum-ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${sw}"
                stroke-linecap="round" stroke-dasharray="${dash.toFixed(2)} ${(circ - dash).toFixed(2)}"
                stroke-dashoffset="0" transform="rotate(-90 ${cx} ${cy})"></circle>
      </svg>`;
  };
  const pctColor = pct => (pct == null) ? '#94a3b8' : (pct >= 80 ? '#16a34a' : pct >= 50 ? '#f59e0b' : '#dc2626');
  const fmt = n => Number.isFinite(n) ? n : 0;

  // Hero — organization rollup
  const orgPct = org.passRate;
  const orgPctTxt = orgPct == null ? '—' : orgPct.toFixed(1) + '%';
  const orgColor = pctColor(orgPct);
  const hero = `
    <div class="kpi-sum-hero" style="--kpi-hero-accent:${orgColor};">
      <div class="kpi-sum-hero__ring">${ring(orgPct ?? 0, orgColor, 132, 12)}
        <div class="kpi-sum-hero__ring-center">
          <div class="kpi-sum-hero__pct">${orgPctTxt}</div>
          <div class="kpi-sum-hero__frac">${org.passed}/${org.total}</div>
        </div>
      </div>
      <div class="kpi-sum-hero__meta">
        <div class="kpi-sum-hero__eyebrow"><i class="ti ti-building" aria-hidden="true"></i> ${t('gicaKpiOrgTitle')}</div>
        <div class="kpi-sum-hero__title">${t('gicaKpiPassRate')}</div>
        <div class="kpi-sum-hero__stats">
          <div class="kpi-sum-stat"><span class="kpi-sum-stat__dot" style="background:#16a34a;"></span><strong>${org.passed}</strong> ${t('gicaKpiPassed')}</div>
          <div class="kpi-sum-stat"><span class="kpi-sum-stat__dot" style="background:#dc2626;"></span><strong>${org.failed}</strong> ${t('gicaKpiFailed')}</div>
          <div class="kpi-sum-stat"><span class="kpi-sum-stat__dot" style="background:#94a3b8;"></span><strong>${org.pending}</strong> ${t('gicaKpiPending')}</div>
          <div class="kpi-sum-stat kpi-sum-stat--tot"><i class="ti ti-users" aria-hidden="true"></i> <strong>${org.total}</strong> Total</div>
        </div>
      </div>
    </div>`;

  // BU cards
  const buCards = bus.map(s => {
    const buColor = (typeof GICA_BU_COLORS !== 'undefined' && GICA_BU_COLORS[s.bu]) || '#6b7280';
    if (s.total === 0) {
      return `
        <div class="kpi-sum-bu-card kpi-sum-bu-card--empty" data-bu="${escapeHtml(s.bu)}" style="--kpi-bu-color:${buColor};">
          <div class="kpi-sum-bu-card__head">
            <span class="kpi-sum-bu-badge">${escapeHtml(s.bu)}</span>
          </div>
          <div class="kpi-sum-bu-card__body kpi-sum-bu-card__body--empty">${t('gicaKpiNoDataBu')}</div>
        </div>`;
    }
    const pct = s.passRate;
    const pctTxt = pct == null ? '—' : pct.toFixed(1) + '%';
    const color = pctColor(pct);
    return `
      <div class="kpi-sum-bu-card" data-bu="${escapeHtml(s.bu)}" title="${escapeHtml(t('gicaKpiBuDetailTip'))}" style="--kpi-bu-color:${buColor};cursor:pointer;">
        <div class="kpi-sum-bu-card__head">
          <span class="kpi-sum-bu-badge">${escapeHtml(s.bu)}</span>
          <span class="kpi-sum-bu-card__total"><i class="ti ti-users" aria-hidden="true"></i> ${s.total}</span>
        </div>
        <div class="kpi-sum-bu-card__ring-wrap">
          ${ring(pct ?? 0, color, 92, 9)}
          <div class="kpi-sum-bu-card__ring-center">
            <div class="kpi-sum-bu-card__pct" style="color:${color};">${pctTxt}</div>
            <div class="kpi-sum-bu-card__frac">${s.passed}/${fmt(s.tested)}</div>
          </div>
        </div>
        <div class="kpi-sum-bu-card__foot">
          <div class="kpi-sum-bu-card__pill kpi-sum-bu-card__pill--pass">
            <i class="ti ti-check" aria-hidden="true"></i> ${s.passed}
          </div>
          <div class="kpi-sum-bu-card__pill kpi-sum-bu-card__pill--fail">
            <i class="ti ti-x" aria-hidden="true"></i> ${s.failed}
          </div>
          <div class="kpi-sum-bu-card__pill kpi-sum-bu-card__pill--pending">
            <i class="ti ti-clock" aria-hidden="true"></i> ${s.pending}
          </div>
        </div>
      </div>`;
  }).join('');

  return `
    ${hero}
    <div class="kpi-sum-section-title">${t('gicaKpiBuSection')}</div>
    <div class="kpi-sum-bu-grid">${buCards}</div>`;
}

// ── KPI × BU drill-down ───────────────────────────────────────────────────────
// Click a BU card in the KPI Summary modal → opens this per-level breakdown.
// Shows every level in GICA_LEVEL_ORDER (minus Department Head), whether or not
// the BU has anyone at that level — matches the user's request for a fixed
// 10-row layout (QEDM → Worker).
function _computeGicaKpiBuDetail(emps, bu, kpiTargets) {
  const inBu   = emps.filter(e => e.bu === bu);
  const levels = GICA_LEVEL_ORDER.filter(lv => lv !== 'Department Head');
  const map    = {};
  levels.forEach(lv => { map[lv] = { level: lv, total: 0, tested: 0, passed: 0, failed: 0, pending: 0 }; });
  inBu.forEach(e => {
    if (!e.level || !map[e.level]) return;
    const s = map[e.level];
    s.total++;
    if (e.passed === true)       { s.passed++; s.tested++; }
    else if (e.passed === false) { s.failed++; s.tested++; }
    else                         { s.pending++; }
  });
  const kpiFor = lv => {
    const t = kpiTargets[lv];
    if (!t) return null;
    return t[bu] ?? t.all ?? null;
  };
  const rows = levels.map(lv => {
    const s = map[lv];
    const kpi = kpiFor(lv);
    const passRate = s.tested > 0 ? (s.passed / s.tested * 100) : null;
    const meetsKpi = kpi != null && passRate != null && passRate >= kpi;
    return { ...s, kpi, passRate, meetsKpi };
  });
  const totals = {
    total:   inBu.length,
    tested:  inBu.filter(e => e.passed === true || e.passed === false).length,
    passed:  inBu.filter(e => e.passed === true).length,
    failed:  inBu.filter(e => e.passed === false).length,
    pending: inBu.filter(e => e.passed !== true && e.passed !== false).length,
  };
  totals.passRate = totals.tested > 0 ? (totals.passed / totals.tested * 100) : null;
  const scored = rows.filter(r => r.kpi != null && r.tested > 0);
  const meetingKpi = scored.filter(r => r.meetsKpi).length;
  let sumW = 0, sumWK = 0;
  scored.forEach(r => { sumW += r.tested; sumWK += r.kpi * r.tested; });
  const avgKpi = sumW > 0 ? (sumWK / sumW) : null;
  return { bu, totals, rows, avgKpi, meetingKpi, scoredCount: scored.length };
}

function _gicaKpiBuDetailHtml(vm) {
  const buColor  = (typeof GICA_BU_COLORS !== 'undefined' && GICA_BU_COLORS[vm.bu]) || '#6b7280';
  const pctColor = pct => (pct == null) ? '#94a3b8' : (pct >= 80 ? '#16a34a' : pct >= 50 ? '#f59e0b' : '#dc2626');
  const pctFmt   = v => v == null ? '—' : v.toFixed(1) + '%';
  const heroColor = pctColor(vm.totals.passRate);
  const ring = (pct, color, size = 100, sw = 10) => {
    const r = (size - sw) / 2, cx = size / 2, cy = size / 2;
    const circ = 2 * Math.PI * r;
    const p = pct == null ? 0 : Math.max(0, Math.min(100, pct));
    const dash = (p / 100) * circ;
    return `
      <svg class="kpi-sum-ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${sw}"
                stroke-linecap="round" stroke-dasharray="${dash.toFixed(2)} ${(circ - dash).toFixed(2)}"
                transform="rotate(-90 ${cx} ${cy})"></circle>
      </svg>`;
  };

  const hero = `
    <div class="kpi-bu-detail-hero" style="--kpi-bu-color:${buColor};">
      <div class="kpi-bu-detail-hero__ring">${ring(vm.totals.passRate ?? 0, heroColor, 116, 11)}
        <div class="kpi-bu-detail-hero__ring-center">
          <div class="kpi-bu-detail-hero__pct" style="color:${heroColor};">${pctFmt(vm.totals.passRate)}</div>
          <div class="kpi-bu-detail-hero__frac">${vm.totals.passed}/${vm.totals.tested}</div>
        </div>
      </div>
      <div class="kpi-bu-detail-hero__meta">
        <div class="kpi-bu-detail-hero__eyebrow"><span class="kpi-bu-detail-hero__badge" style="background:${buColor};">${escapeHtml(vm.bu)}</span> ${escapeHtml(t('gicaKpiBuDetailSubtitle'))}</div>
        <div class="kpi-bu-detail-hero__stats">
          <div class="kpi-sum-stat"><span class="kpi-sum-stat__dot" style="background:#16a34a;"></span><strong>${vm.totals.passed}</strong> ${t('gicaKpiPassed')}</div>
          <div class="kpi-sum-stat"><span class="kpi-sum-stat__dot" style="background:#dc2626;"></span><strong>${vm.totals.failed}</strong> ${t('gicaKpiFailed')}</div>
          <div class="kpi-sum-stat"><span class="kpi-sum-stat__dot" style="background:#94a3b8;"></span><strong>${vm.totals.pending}</strong> ${t('gicaKpiPending')}</div>
          <div class="kpi-sum-stat kpi-sum-stat--tot"><i class="ti ti-users" aria-hidden="true"></i> <strong>${vm.totals.total}</strong> Total</div>
          <div class="kpi-sum-stat kpi-sum-stat--kpi"><i class="ti ti-target" aria-hidden="true"></i> ${escapeHtml(t('gicaKpiAvgTarget'))}: <strong>${vm.avgKpi == null ? '—' : vm.avgKpi.toFixed(0) + '%'}</strong></div>
          <div class="kpi-sum-stat kpi-sum-stat--meet"><i class="ti ti-checks" aria-hidden="true"></i> ${escapeHtml(t('gicaKpiLevelsMeeting'))}: <strong>${vm.meetingKpi}/${vm.scoredCount}</strong></div>
        </div>
      </div>
    </div>`;

  const rowsHtml = vm.rows.map(r => {
    if (r.total === 0) {
      return `
        <div class="kpi-bu-lv-row kpi-bu-lv-row--empty">
          <div class="kpi-bu-lv-row__name">${escapeHtml(r.level)}</div>
          <div class="kpi-bu-lv-row__kpi">${r.kpi == null ? '—' : r.kpi + '%'}</div>
          <div class="kpi-bu-lv-row__bar-wrap"><div class="kpi-bu-lv-row__empty">${escapeHtml(t('gicaKpiNoLevelData'))}</div></div>
          <div class="kpi-bu-lv-row__pct">—</div>
          <div class="kpi-bu-lv-row__stats"><span class="kpi-bu-lv-row__stat"><i class="ti ti-users" aria-hidden="true"></i> 0</span></div>
          <div class="kpi-bu-lv-row__badge-plain">—</div>
        </div>`;
    }
    const color = pctColor(r.passRate);
    const barPct = r.passRate == null ? 0 : Math.max(0, Math.min(100, r.passRate));
    const kpiMarker = r.kpi != null
      ? `<div class="kpi-bu-lv-row__kpi-marker" style="left:${Math.max(0, Math.min(100, r.kpi))}%;" title="KPI ${r.kpi}%"></div>`
      : '';
    // Only 2 badge states: Pass / Fail — when there's no KPI target or nothing has
    // been tested yet, show a plain "—" (no colored badge) instead of a 3rd state.
    const hasResult = r.kpi != null && r.tested > 0;
    const badgeHtml = hasResult
      ? `<div class="kpi-bu-lv-row__badge ${r.meetsKpi ? 'kpi-bu-lv-row__badge--pass' : 'kpi-bu-lv-row__badge--fail'}">${r.meetsKpi ? `✓ ${t('gicaKpiMet')}` : `✗ ${t('gicaKpiMissed')}`}</div>`
      : `<div class="kpi-bu-lv-row__badge-plain">—</div>`;
    return `
      <div class="kpi-bu-lv-row">
        <div class="kpi-bu-lv-row__name">${escapeHtml(r.level)}</div>
        <div class="kpi-bu-lv-row__kpi">${r.kpi == null ? '—' : r.kpi + '%'}</div>
        <div class="kpi-bu-lv-row__bar-wrap">
          <div class="kpi-bu-lv-row__bar">
            <div class="kpi-bu-lv-row__fill" style="width:${barPct}%;background:${color};"></div>
            ${kpiMarker}
          </div>
        </div>
        <div class="kpi-bu-lv-row__pct" style="color:${color};">${pctFmt(r.passRate)}</div>
        <div class="kpi-bu-lv-row__stats">
          <span class="kpi-bu-lv-row__stat kpi-bu-lv-row__stat--pass" title="${escapeHtml(t('gicaKpiPassed'))}">${r.passed}</span>
          <span class="kpi-bu-lv-row__stat kpi-bu-lv-row__stat--fail" title="${escapeHtml(t('gicaKpiFailed'))}">${r.failed}</span>
          <span class="kpi-bu-lv-row__stat kpi-bu-lv-row__stat--pending" title="${escapeHtml(t('gicaKpiPending'))}">${r.pending}</span>
          <span class="kpi-bu-lv-row__stat kpi-bu-lv-row__stat--total" title="Total"><i class="ti ti-users" aria-hidden="true"></i> ${r.total}</span>
        </div>
        ${badgeHtml}
      </div>`;
  }).join('');

  return `
    ${hero}
    <div class="kpi-bu-detail-section-title">${escapeHtml(t('gicaKpiPerLevel'))}</div>
    <div class="kpi-bu-lv-header">
      <div>${escapeHtml(t('gicaColLevel'))}</div>
      <div>${escapeHtml(t('gicaKpiTargetShort'))}</div>
      <div>${escapeHtml(t('gicaKpiActualPct'))}</div>
      <div>%</div>
      <div>${escapeHtml(t('gicaKpiCounts'))}</div>
      <div>${escapeHtml(t('gicaKpiResult'))}</div>
    </div>
    <div class="kpi-bu-lv-list">${rowsHtml}</div>`;
}

function _gicaOpenKpiBuDetailModal(bu) {
  const modal = $('gica-kpi-bu-detail-modal');
  const title = $('gica-kpi-bu-detail-title');
  const body  = $('gica-kpi-bu-detail-body');
  if (!modal || !body) return;
  const vm = _computeGicaKpiBuDetail(_gicaData.employees || [], bu, _gicaKpiTargets);
  const buColor = GICA_BU_COLORS[bu] || 'var(--accent)';
  if (title) title.innerHTML = `<span style="color:${buColor};font-weight:800;">${escapeHtml(bu)}</span> · ${escapeHtml(t('gicaKpiBuDetailTitle'))}`;
  body.innerHTML = _gicaKpiBuDetailHtml(vm);
  modal.dataset.bu = bu;
  modal.classList.remove('hidden');
}

function _gicaExportKpiBuDetailPng() {
  const body = $('gica-kpi-bu-detail-body');
  const modal = $('gica-kpi-bu-detail-modal');
  if (!body || typeof html2canvas === 'undefined') { showToast('html2canvas not loaded'); return; }
  const bu = modal?.dataset?.bu || 'BU';
  const bg = getComputedStyle(document.body).getPropertyValue('--surface').trim() || '#ffffff';
  // html2canvas 1.4 can't parse color-mix() / oklch() / lab() — keep options
  // minimal and rely on plain colors in the KPI drill markup.
  html2canvas(body, { backgroundColor: bg, scale: 2, logging: false, useCORS: true })
    .then(canvas => {
      const link = document.createElement('a');
      link.download = `KPI-${bu}-${new Date().toISOString().slice(0,10)}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(err => { showToast('PNG export failed: ' + (err.message || err)); });
}

function _gicaPrintKpiBuDetail() {
  _gicaPrint('gica-kpi-bu-detail-body');
}

function _gicaSummaryHtml(vm) {
  const avgCounts     = Object.fromEntries(GICA_GRADES.map(g => [g, Math.round((vm.byGradeMeasure[g] + vm.byGradeInspect[g]) / 2)]));
  const avgTot        = Math.round((vm.totMeasure + vm.totInspect) / 2);
  const avgOverallPct = Math.round(((vm.avgMeasurePct || 0) + (vm.avgInspectPct || 0)) / 2);
  const miniBar = rows => {
    const mx = Math.max(...rows.map(r => r.n), 1);
    return rows.map(r => `
      <div class="mini-bar__row">
        <span class="mini-bar__bu">${escapeHtml(r.bu)}</span>
        <div class="mini-bar__track">
          <div class="mini-bar__fill" style="width:${Math.round(r.n / mx * 100)}%;background:${GICA_BU_COLORS[r.bu] || '#6b7280'};"></div>
        </div>
        <span class="mini-bar__count">${r.n}</span>
      </div>`).join('');
  };
  // Grade-distribution donut (SVG, theme-aware via CSS vars — no Chart.js lifecycle)
  const donut = (counts, tot) => {
    const R = 40, sw = 20, CIRC = 2 * Math.PI * R, gap = tot ? 1.5 : 0;
    let acc = 0;
    const ring = GICA_GRADES.map(g => {
      const v = counts[g] || 0;
      if (!v || !tot) return '';
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      const seg  = `<circle cx="50" cy="50" r="${R}" fill="none" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 50 50)"></circle>`;
      acc += len;
      return seg;
    }).join('');
    return `
      <div class="donut-wrap">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
          ${ring}
        </svg>
      </div>`;
  };
  // Donut with callout leader lines — grade count + pct labeled outside the ring + avg gauge
  const donutLabeled = (counts, tot, avgPct) => {
    const CX = 145, CY = 102, R = 50, sw = 20; 
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.2 : 0;
    let acc = 0;
    const segs = [], lines = [];
    GICA_GRADES.forEach(g => {
      const v = counts[g] || 0;
      if (!tot || !v) return;
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx = CX + outerR * Math.cos(mid),        my = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + 12) * Math.cos(mid), ey = CY + (outerR + 12) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? 18 : -18), hy = ey;
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      const pct = Math.round(v / tot * 100);
      lines.push(`
        <line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${GICA_GRADE_COLORS[g]}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="9.5" font-weight="600" fill="var(--text)">Grade ${g}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + 9.5).toFixed(1)}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-muted)">(${pct}%)</text>`);
      acc += len;
    });
    const ap = avgPct || 0;
    const gc = GICA_GRADE_COLORS[_gicaScoreToGrade(ap / 100)] || '#6b7280';
    return `
      <svg viewBox="0 0 300 205" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + 8}" text-anchor="middle" font-size="22" font-weight="800" fill="${gc}">${ap}%</text>
        <text x="${CX}" y="${CY + 20}" text-anchor="middle" font-size="8.5" fill="var(--text-muted)" letter-spacing="0.5">Avg. Score</text>
      </svg>`;
  };
  const legend = cnt => `
    <div class="donut-legend">
      ${GICA_GRADES.map(g => `
        <div class="donut-legend__row">
          <span class="donut-legend__dot" style="background:${GICA_GRADE_COLORS[g]};"></span>
          <span class="u-muted donut-legend__grade">Grade ${g}</span>
          <span class="donut-legend__count">${cnt[g]}</span>
        </div>`).join('')}
    </div>`;

  const donutLabeledSm = (counts, tot, avgPct) => {
    const CX = 125, CY = 88, R = 43, sw = 20;
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.0 : 0;
    let acc = 0;
    const segs = [], lines = [];
    GICA_GRADES.forEach(g => {
      const v = counts[g] || 0;
      if (!tot || !v) return;
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx = CX + outerR * Math.cos(mid),       my = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + 7.5) * Math.cos(mid), ey = CY + (outerR + 7.5) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? 13 : -13), hy = ey;
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      const pct = Math.round(v / tot * 100);
      lines.push(`
        <line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${GICA_GRADE_COLORS[g]}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="9" font-weight="600" fill="var(--text)">Grade ${g}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + 12).toFixed(1)}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-muted)">(${pct}%)</text>`);
      acc += len;
    });
    const ap = avgPct || 0;
    const gc = GICA_GRADE_COLORS[_gicaScoreToGrade(ap / 100)] || '#6b7280';
    return `
      <svg viewBox="0 0 255 172" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + 6}" text-anchor="middle" font-size="20" font-weight="800" fill="${gc}">${ap}%</text>
        <text x="${CX}" y="${CY + 20}" text-anchor="middle" font-size="9" fill="var(--text-muted)" letter-spacing="0.5">Avg. Score</text>
      </svg>`;
  };

  const buBarChart = buCards => {
    if (!buCards.length) return '';
    const active = buCards.filter(c => !c.empty);
    const maxN = Math.max(...active.map(c => c.count), 1);
    const W = 220, CH = 70, PAD = 8, LH = 16, TPAD = 14;
    const n = buCards.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.62);
    const bo = (slot - bw) / 2;
    const bars = buCards.map((c, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      if (c.empty) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="6.5" fill="var(--text-muted)">${escapeHtml(t('gicaNoData'))}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>`;
      }
      const totalH = Math.max(Math.round(c.count / maxN * CH), 3);
      const scale  = c.count ? totalH / c.count : 0;
      // Each segment claims min 2px if the underlying count > 0 so tiny cohorts
      // don't disappear from rounding. stackH is the actual drawn total (may
      // exceed totalH by 1-2px on small bars — acceptable, keeps every non-zero
      // segment visible).
      const passH     = c.passN     > 0 ? Math.max(Math.round(c.passN     * scale), 2) : 0;
      const failH     = c.failN     > 0 ? Math.max(Math.round(c.failN     * scale), 2) : 0;
      const untestedH = c.untestedN > 0 ? Math.max(Math.round(c.untestedN * scale), 2) : 0;
      const stackH    = passH + failH + untestedH;
      const color = GICA_BU_COLORS[c.bu] || '#6b7280';
      const topY       = TPAD + CH - stackH;
      const passY      = TPAD + CH - passH;
      const failY      = passY - failH;
      const untestedY  = failY - untestedH;
      const clipId = `gica-bu-bar-clip-${c.bu}`;
      return `<g>
        <title>${escapeHtml(c.bu)} — Pass: ${c.passN}, Fail: ${c.failN}, Not tested: ${c.untestedN} (Total ${c.count})</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${stackH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">
          ${untestedH > 0 ? `<rect x="${x}" y="${untestedY}" width="${bw}" height="${untestedH}" fill="var(--gica-untested-fill)"></rect>` : ''}
          ${failH > 0 ? `<rect x="${x}" y="${failY}" width="${bw}" height="${failH}" fill="${color}" opacity="0.25"></rect>` : ''}
          ${passH > 0 ? `<rect x="${x}" y="${passY}" width="${bw}" height="${passH}" fill="${color}"></rect>` : ''}
        </g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="8" font-weight="700" fill="${color}">${c.count}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" width="100%" style="display:block;margin-top:10px;overflow:visible;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  const kpi = `
    <div class="stat-grid stat-grid--4">

      <!-- Total employees + Need retest -->
      <div class="stat-card">
        <div class="u-between">
          <div>
            <div class="stat-card__label">${t('gicaTotalEmp')}</div>
            <div class="stat-card__value">${vm.total}</div>
          </div>
          <div style="text-align:right;">

            <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
              <span class="u-muted">${t('pass')}</span><strong style="color:#16a34a;">${vm.totalPass}</strong>
            </div>
            <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
              <span class="u-muted">${t('fail')}</span><strong style="color:#dc2626;">${vm.totalFail}</strong>
            </div>
            <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
              <span class="u-muted">${t('pending')}</span><strong class="u-muted">${vm.totalAwaiting}</strong>
            </div>
          </div>
        </div>
        ${buBarChart(vm.buCards)}
      </div>

      <!-- Overall Score (Measurement) -->
      <div class="stat-card">
        <div class="stat-card__label">${t('gicaOverallMeas')}</div>
        ${donutLabeled(vm.byGradeMeasure, vm.totMeasure, vm.avgMeasurePct)}
      </div>

      <!-- Overall Score (Inspection) -->
      <div class="stat-card">
        <div class="stat-card__label">${t('gicaOverallInsp')}</div>
        ${donutLabeled(vm.byGradeInspect, vm.totInspect, vm.avgInspectPct)}
      </div>

      <!-- Avg Score (flip: front = donut, back = criteria) -->
      <div class="flip-card-wrap" id="gica-avg-flip">
        <div class="flip-card-inner">
          <div class="flip-card-front stat-card">
            <div class="u-between">
              <div class="stat-card__label">${t('gicaOverallAvg')}</div>
              <div class="flip-indicator" style="margin-top:0;">${t('gicaFlipCriteria')}</div>
            </div>
            ${donutLabeled(avgCounts, avgTot, avgOverallPct)}
          </div>
          <div class="flip-card-back stat-card">
            <div class="stat-card__label">${t('gicaCriteria')}</div>
            <div class="criteria-list">
              <span class="u-muted criteria-list__head">${t('gicaGradingCriteria')}</span>
              ${[{g:'A',r:'85 – 100%'},{g:'B',r:'65 – 84%'},{g:'C',r:'50 – 64%'},{g:'D',r:'≤ 49%'}]
                .map(c => `<div class="criteria-list__row">
                  <span class="donut-legend__dot" style="background:${GICA_GRADE_COLORS[c.g]};"></span>
                  <span class="u-muted">${t('grade')} ${c.g}</span>
                  <span class="criteria-list__range">${c.r}</span>
                </div>`).join('')}
            </div>
            <div class="flip-indicator">${t('gicaFlipBack')}</div>
          </div>
        </div>
      </div>

    </div>`;

  const faceHalfHtml = (label, tot, visualHtml) => `
    <div class="flip-card-half">
      <div class="u-between">
        <div class="flip-card-type">${label}</div>
        ${tot != null ? `<span class="u-muted" style="font-size:0.7rem;font-weight:600;">${tot} ${t('gicaPeople')}</span>` : ''}
      </div>
      ${visualHtml}
    </div>`;

  const dualFaceHtml = (isFront, c, buColor, topHtml, bottomHtml) => `
    <div class="${isFront ? 'flip-card-front' : 'flip-card-back'} stat-card flip-card-face--dual" style="min-width:0;">
      <div class="bu-head">
        <span class="bu-name" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      </div>
      ${faceHalfHtml(t('gicaScoreMeas'), isFront ? c.totMeasureBu : null, topHtml)}
      <div class="flip-card-divider"></div>
      ${faceHalfHtml(t('gicaScoreInsp'), null, bottomHtml)}
    </div>`;

  const renderFlipCard = c => {
    if (c.empty) return `<div class="stat-card stat-card--empty" style="min-width:0;">
      <div class="bu-name u-muted">${escapeHtml(c.bu)}</div>
      <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">${t('gicaNoData')}</div>
    </div>`;
    const buColor = GICA_BU_COLORS[c.bu] || 'var(--text)';
    const tr = vm.trendByBu && vm.trendByBu[c.bu];
    const hasTrend = !!tr;
    const trendWrap = id => hasTrend
      ? `<div class="gica-trend-canvas-wrap"><canvas id="${id}"></canvas></div>`
      : `<div class="u-muted" style="font-size:0.72rem;text-align:center;padding:30px 0;">${t('gicaNoTrend')}</div>`;
    return `<div class="flip-card-wrap" data-bu="${escapeHtml(c.bu)}">
      <div class="flip-card-inner">
        ${dualFaceHtml(true,  c, buColor, donutLabeledSm(c.cntMeasure, c.totMeasureBu, c.avgMeasurePct), donutLabeledSm(c.cntInspect, c.totInspectBu, c.avgInspectPct))}
        ${dualFaceHtml(false, c, buColor, trendWrap(`gica-trend-meas-${escapeHtml(c.bu)}`), trendWrap(`gica-trend-insp-${escapeHtml(c.bu)}`))}
      </div>
    </div>`;
  };

  const buFlipCards = vm.buCards.map(renderFlipCard).join('');

  const passClass = (pct, kpiPct) =>
    kpiPct != null ? (pct >= kpiPct ? 'ok' : 'bad')
                   : (pct >= 80 ? 'ok' : pct >= 60 ? 'mid' : 'bad');
  const expBadge = _gicaExpBadge;

  const _mkExpCell = (c, rowAttr, kpiPct) => {
    if (!c || c.empty) return `<td class="exp-cell exp-cell--empty">—</td>`;
    const cls = passClass(c.passBothPct, kpiPct);
    return `<td class="exp-cell" ${rowAttr} title="${escapeHtml(t('gicaClickToView'))}">
      <div class="exp-cell__top">
        <span class="exp-cell__count">${c.passBothCount}/${c.count} ${t('gicaPeople')}</span>
        <span class="exp-cell__pct pass-pct--${cls}">${c.passBothPct}%</span>
      </div>
      <div class="pbar pbar--6${kpiPct != null ? ' pbar--kpi' : ''}" style="margin:2px 0 0;">
        <div class="pbar__fill exp-pbar--${cls}" style="width:${c.passBothPct}%;"></div>
        ${kpiPct != null ? `<div class="pbar__kpi-marker" style="left:${kpiPct}%;"></div>` : ''}
      </div>
    </td>`;
  };

  const buThs = vm.expMatrixBus.map(bu =>
    `<th class="exp-th exp-th--bu" style="color:${GICA_BU_COLORS[bu] || 'var(--text)'};">${escapeHtml(bu)}</th>`).join('');

  const kpiPctFor = (level, bu) => {
    const t = vm.kpiTargets[level];
    return t ? (t[bu] ?? t.all ?? null) : null;
  };

  const GICA_LEVEL_TOOLTIPS = { 'Supervisor*': 'Sewing Department Head' };
  const _gicaLevelLabel = level => {
    const tip = GICA_LEVEL_TOOLTIPS[level];
    return `<div class="exp-row__level"${tip ? ` title="${escapeHtml(tip)}"` : ''}>${escapeHtml(level)}</div>`;
  };

  const expMatrixColspan = 3 + vm.expMatrixBus.length;
  const matrixRows = vm.expMatrix.length ? vm.expMatrix.map(row => {
    const cells = vm.expMatrixBus.map(bu =>
      _mkExpCell(row.cells[bu], `data-level="${escapeHtml(row.level)}" data-bu="${escapeHtml(bu)}"`, kpiPctFor(row.level, bu))
    ).join('');
    return `<tr>
      <td class="exp-row__head">${_gicaLevelLabel(row.level)}</td>
      <td class="exp-td--expect">${expBadge(row.expM)}</td>
      <td class="exp-td--expect exp-td--expect-last">${expBadge(row.expI)}</td>
      ${cells}
    </tr>`;
  }).join('') : `<tr><td colspan="${expMatrixColspan}" style="text-align:center;color:var(--text-muted);padding:20px;">${t('gicaMatrixEmpty')}</td></tr>`;

  const matrixDeptRows = vm.expMatrixDept.length ? vm.expMatrixDept.map(({ dept, deptAgg, levelRows }, idx) => {
    const aggCells = vm.expMatrixBus.map(bu => {
      const c = deptAgg[bu];
      if (!c || c.empty) return `<td class="exp-cell exp-cell--empty exp-cell--dept-agg">—</td>`;
      const cls = passClass(c.passBothPct);
      return `<td class="exp-cell exp-cell--dept-agg" data-dept="${escapeHtml(dept)}" data-bu="${escapeHtml(bu)}" title="${escapeHtml(t('gicaClickToViewDept'))}">
        <div class="exp-cell__top">
          <span class="exp-cell__count">${c.passBothCount}/${c.count} ${t('gicaPeople')}</span>
          <span class="exp-cell__pct pass-pct--${cls}">${c.passBothPct}%</span>
        </div>
        <div class="pbar pbar--6" style="margin:2px 0 0;">
          <div class="pbar__fill exp-pbar--${cls}" style="width:${c.passBothPct}%;"></div>
        </div>
      </td>`;
    }).join('');

    const subRows = levelRows.map(row => {
      const cells = vm.expMatrixBus.map(bu =>
        _mkExpCell(row.cells[bu], `data-dept="${escapeHtml(dept)}" data-level="${escapeHtml(row.level)}" data-bu="${escapeHtml(bu)}"`, kpiPctFor(row.level, bu))
      ).join('');
      return `<tr class="exp-level-sub-row">
        <td class="exp-row__head exp-row__sub">${_gicaLevelLabel(row.level)}</td>
        <td class="exp-td--expect">${expBadge(row.expM)}</td>
        <td class="exp-td--expect exp-td--expect-last">${expBadge(row.expI)}</td>
        ${cells}
      </tr>`;
    }).join('');

    return `<tr class="exp-dept-head-row${idx > 0 ? ' exp-dept-head-row--sep' : ''}">
        <td class="exp-row__dept-head" colspan="3">${escapeHtml(dept)}</td>
        ${aggCells}
      </tr>${subRows}`;
  }).join('') : `<tr><td colspan="${expMatrixColspan}" style="text-align:center;color:var(--text-muted);padding:20px;">${t('gicaMatrixEmpty')}</td></tr>`;

  // Table_freq reference modal: per (department, level, role) — how often someone is
  // tested and the minimum grade each sub-test must reach. Grouped by department for
  // readability, sorted by GICA_LEVEL_ORDER within each department.
  const freqModalBody = (() => {
    const rows = vm.freqTable || [];
    if (!rows.length) return `<p class="u-muted" style="text-align:center;padding:24px 0;">${t('gicaFreqEmpty')}</p>`;
    const byDept = {};
    rows.forEach(r => { (byDept[r.department || '—'] = byDept[r.department || '—'] || []).push(r); });
    const depts = Object.keys(byDept).sort((a, b) => a.localeCompare(b));
    const sortRows = list => list.slice().sort((a, b) => {
      const ia = GICA_LEVEL_ORDER.indexOf(a.level), ib = GICA_LEVEL_ORDER.indexOf(b.level);
      if (ia !== ib) return (ia === -1 ? 1 : ib === -1 ? -1 : ia - ib);
      return (a.role || '').localeCompare(b.role || '');
    });
    const expBadge = g => g
      ? `<span class="exp-badge exp-badge--${g}">${escapeHtml(g)}</span>`
      : '<span class="u-muted">—</span>';
    const cols = `
    <colgroup>
      <col style="width: 20%;"> <col style="width: 35%;"> <col style="width: 21%;"> <col style="width: 12%;"> <col style="width: 12%;"> </colgroup>
  `;

  return `
    <div class="gica-freq-table-wrap">
      <table class="gica-freq-table" style="table-layout: fixed; width: 100%; border-collapse: collapse;">
        ${cols}
        <thead><tr>
          <th>${t('gicaFreqDeptLevel')}</th>
          <th>${t('gicaFreqRole')}</th>
          <th style="text-align:center;">${t('gicaFreqFreq')}</th>
          <th style="text-align:center;" title="${escapeHtml(t('gicaExpectedMeas'))}"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
          <th style="text-align:center;" title="${escapeHtml(t('gicaExpectedInsp'))}"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
        </tr></thead>
        <tbody>
          ${depts.map(dept => `
            <tr class="gica-freq-dept-row"><td colspan="5">${escapeHtml(dept)}</td></tr>
            ${sortRows(byDept[dept]).map(r => `
              <tr>
                <td style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">${escapeHtml(r.level || '—')}</td>
                <td class="u-muted" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">${escapeHtml(r.role || '—')}</td>
                <td style="text-align:center; overflow:hidden; white-space:nowrap;">${r.freqMonths != null ? t('gicaFreqEveryNMos', { n: r.freqMonths }) : '—'}</td>
                <td style="text-align:center;">${expBadge(r.expectation1)}</td>
                <td style="text-align:center;">${expBadge(r.expectation2)}</td>
              </tr>`).join('')}
          `).join('')}
        </tbody>
      </table>
    </div>`;
  })();

  const matrix = `
    <div class="card card--section gica-expect-section">
      <div class="chart-header">
        <div style="display:flex;align-items:center;gap:10px;margin-top:-16px;">
          <h3 style="margin:0; font-size:1rem; color:var(--text);">${t('gicaExpMatrix')}</h3>

        </div>
        <div class="exp-legend">
          <button id="gica-kpi-summary-btn" class="gica-kpi-setup-btn" title="${escapeHtml(t('gicaKpiSummaryTip'))}">
            <i class="ti ti-chart-donut-4" aria-hidden="true"></i> ${t('gicaKpiSummary')}
          </button>
          <button id="gica-kpi-setup-btn" class="gica-kpi-setup-btn" title="${escapeHtml(t('gicaKpiSetupTip'))}">
            <i class="ti ti-target-arrow" aria-hidden="true"></i> ${t('gicaKpiSetup')}
          </button>
          <button id="gica-freq-info-btn" class="gica-kpi-setup-btn" title="${escapeHtml(t('gicaFreqInfoTip'))}">
            <i class="ti ti-file-text" aria-hidden="true"></i>
          </button>
          <span class="exp-legend__item"><span class="exp-legend__dot" style="background:#16a34a;"></span>${t('gicaKpiAchieved')}</span>
          <span class="exp-legend__item"><span class="exp-legend__dot" style="background:#dc2626;"></span>${t('gicaKpiNotAchieved')}</span>
        </div>
      </div>
      <div id="gica-matrix-tables">
        <div class="exp-matrix-front">
          <div class="exp-table-wrap">
            <table class="exp-table">
              <thead><tr>
                <th class="exp-th exp-th--level">${t('gicaColLevel')}</th>
                <th class="exp-th exp-th--expect" title="${escapeHtml(t('gicaExpectedMeas'))}"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
                <th class="exp-th exp-th--expect exp-th--expect-last" title="${escapeHtml(t('gicaExpectedInsp'))}"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
                ${buThs}
              </tr></thead>
              <tbody>${matrixRows}</tbody>
            </table>
          </div>
        </div>
        <div class="exp-matrix-back hidden">
          <div class="exp-table-wrap">
            <table class="exp-table">
              <thead><tr>
                <th class="exp-th exp-th--level exp-th--dept">${t('gicaColDept')}</th>
                <th class="exp-th exp-th--expect" title="${escapeHtml(t('gicaExpectedMeas'))}"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
                <th class="exp-th exp-th--expect exp-th--expect-last" title="${escapeHtml(t('gicaExpectedInsp'))}"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
                ${buThs}
              </tr></thead>
              <tbody>${matrixDeptRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div id="gica-expect-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" data-close="1"></div>
      <div class="gica-modal__panel">
        <div class="gica-modal__head">
          <h4 id="gica-expect-modal-title" style="margin:0;font-size:1rem;"></h4>
          <button class="gica-modal__close" data-close="1" aria-label="ปิด">✕</button>
        </div>
        <div id="gica-expect-modal-body" class="gica-modal__body"></div>
      </div>
    </div>
    <div id="gica-kpi-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="gica-kpi-backdrop"></div>
      <div class="gica-modal__panel gica-kpi-modal__panel">
        <div class="gica-modal__head">
          <h4 style="margin:0;font-size:1rem;">${t('gicaKpiSetup')}</h4>
          <button class="gica-modal__close" id="gica-kpi-close" aria-label="ปิด">✕</button>
        </div>
        <div class="gica-kpi-modal__body">
          <p class="u-muted gica-kpi-modal__desc">${t('gicaKpiModalDesc')} </p>
          <div class="gica-kpi-bu-tabs">
            <button class="gica-kpi-bu-tab${_gicaKpiActiveBu === 'all' ? ' gica-kpi-bu-tab--active' : ''}" data-bu="all" type="button">${t('gicaAllBu')}</button>
            ${BU_ORDER.map(bu => `<button class="gica-kpi-bu-tab${_gicaKpiActiveBu === bu ? ' gica-kpi-bu-tab--active' : ''}" data-bu="${escapeHtml(bu)}" type="button">${escapeHtml(bu)}</button>`).join('')}
          </div>
          <div class="gica-kpi-list" id="gica-kpi-list">
            ${_gicaKpiListHtml(_gicaKpiActiveBu)}
          </div>
        </div>
        <div class="gica-kpi-modal__footer">
          <button class="gica-kpi-btn gica-kpi-btn--cancel" id="gica-kpi-cancel">${t('cancel')}</button>
          <button class="gica-kpi-btn gica-kpi-btn--confirm" id="gica-kpi-confirm">${t('confirm')}</button>
        </div>
      </div>
    </div>
    <div id="gica-freq-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="gica-freq-backdrop"></div>
      <div class="gica-modal__panel">
        <div class="gica-modal__head">
          <h4 style="margin:0;font-size:1rem;">${t('gicaFreqModalTitle')}</h4>
          <button class="gica-modal__close" id="gica-freq-close" aria-label="ปิด">✕</button>
        </div>
        <div class="gica-modal__body">${freqModalBody}</div>
      </div>
    </div>
    <div id="gica-kpi-summary-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="gica-kpi-summary-backdrop"></div>
      <div class="gica-modal__panel gica-kpi-summary-modal__panel">
        <div class="gica-modal__head">
          <h4 style="margin:0;font-size:1rem;">${t('gicaKpiSummaryTitle')}</h4>
          <button class="gica-modal__close" id="gica-kpi-summary-close" aria-label="ปิด">✕</button>
        </div>
        <div class="gica-modal__body" id="gica-kpi-summary-body">
          ${_gicaKpiSummaryHtml(_computeGicaKpiSummary(vm.emps || []))}
        </div>
      </div>
    </div>
    <div id="gica-kpi-bu-detail-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="gica-kpi-bu-detail-backdrop"></div>
      <div class="gica-modal__panel gica-kpi-bu-detail-modal__panel">
        <div class="gica-modal__head">
          <h4 id="gica-kpi-bu-detail-title" style="margin:0;font-size:1rem;"></h4>
          <div style="display:flex;gap:8px;align-items:center;">
            <button id="gica-kpi-bu-detail-png" class="gica-mini-btn gica-mini-btn--png" title="${escapeHtml(t('gicaKpiSavePng'))}"><i class="ti ti-photo-down" aria-hidden="true"></i> PNG</button>
            <button id="gica-kpi-bu-detail-print" class="gica-mini-btn gica-mini-btn--print" title="${escapeHtml(t('gicaKpiPrint'))}"><i class="ti ti-printer" aria-hidden="true"></i> ${escapeHtml(t('gicaKpiPrint'))}</button>
            <button class="gica-modal__close" id="gica-kpi-bu-detail-close" aria-label="ปิด">✕</button>
          </div>
        </div>
        <div class="gica-modal__body" id="gica-kpi-bu-detail-body"></div>
      </div>
    </div>`;

  const quadSection = `
    <div class="card card--section" id="gica-quad-section">
      <div class="chart-header">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">${t('gicaQuadTitle')}</h3>
        <div style="display:flex;align-items:center;gap:6px;">
          <div class="quad-dropdown">
            <button class="quad-dd-btn" id="quad-bu-trigger"><span class="quad-dd-label">${t('gicaColBu')}</span> ▾</button>
            <div class="quad-dd-panel" id="quad-bu-panel" hidden>
              <button class="quad-btn quad-btn--active" data-bu="all">${t('gicaAllBu')}</button>
              ${vm.expMatrixBus.map(bu => `<button class="quad-btn" data-bu="${escapeHtml(bu)}">${escapeHtml(bu)}</button>`).join('')}
            </div>
          </div>
          <div class="quad-dropdown">
            <button class="quad-dd-btn" id="quad-dept-trigger"><span class="quad-dd-label">${t('gicaColDept')}</span> ▾</button>
            <div class="quad-dd-panel" id="quad-dept-panel" hidden>
              <button class="quad-btn quad-btn--active" data-dept="all">${t('gicaAllDepts')}</button>
              ${vm.expMatrixDepts.map(d => `<button class="quad-btn" data-dept="${escapeHtml(d)}">${escapeHtml(d)}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="quad-grid">
        ${GICA_QUAD_GROUPS.map(g => {
          const cov = _computeGicaQuadCoverage(vm.freqTable || [], g);
          return `
          <div class="quad-card-wrap" data-quad-flip data-group="${g.id}" role="button" tabindex="0" aria-label="พลิกดู Departments &amp; Levels">
            <div class="quad-flip-inner">
              <div class="quad-card quad-card--front">
                <div class="quad-card__title">${escapeHtml(g.label)}</div>
                <div class="quad-card__sub">${expBadge(g.expM)}&nbsp;/&nbsp;${expBadge(g.expI)}</div>
                <div class="quad-chart-wrap"><canvas id="gica-quad-canvas-${g.id}"></canvas></div>
              </div>
              <div class="quad-card quad-card--back">
                <div class="quad-card__title">${escapeHtml(g.label)}</div>
                <div class="quad-card__sub quad-back__sub-label">Departments &amp; Levels</div>
                <div class="quad-back-body">${_gicaQuadBackHtml(g, cov)}</div>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;

  return `${kpi}
    <div style="position:relative;">
      <div class="stat-grid stat-grid--6">${buFlipCards}</div>
      <button id="gica-flip-all" class="gica-flip-btn" data-flipped="0" aria-label="${escapeHtml(t('gicaFlipViewTrend'))}" title="${escapeHtml(t('gicaFlipViewTrend'))}">
        <span class="gica-flip-btn__icon" aria-hidden="true">↻</span>
      </button>
    </div>
    ${matrix}
    ${quadSection}`;
}

function _mountGicaQuadrant(container, emps) {
  const section = container.querySelector('#gica-quad-section');
  if (!section || typeof Chart === 'undefined') return;

  // Resolve descriptions from i18n at mount time so a language change re-render picks the new labels.
  const QUAD_CFG = {
    I:   { bg: 'rgba(22,163,74,0.65)',  bd: '#15803d', desc: t('gicaQuadPassBoth')    },
    II:  { bg: 'rgba(245,158,11,0.65)', bd: '#b45309', desc: t('gicaQuadMFailIPass')  },
    III: { bg: 'rgba(99,102,241,0.65)', bd: '#4338ca', desc: t('gicaQuadMPassIFail')  },
    IV:  { bg: 'rgba(220,38,38,0.65)',  bd: '#b91c1c', desc: t('gicaQuadFailBoth')    },
  };
  const _charts  = {};
  const _buSet   = new Set();
  const _deptSet = new Set();

  const buildOne = grp => {
    const canvas = section.querySelector(`#gica-quad-canvas-${grp.id}`);
    if (!canvas) return;
    if (_charts[grp.id]) { _charts[grp.id].destroy(); delete _charts[grp.id]; }

    const vm = _computeGicaQuadrant(emps, grp.id, _buSet, _deptSet);
    const grouped = {};
    vm.points.forEach(p => { (grouped[p.quad] = grouped[p.quad] || []).push(p); });
    const datasets = ['I','III','II','IV'].filter(q => grouped[q]?.length).map(q => ({
      label: `${q} — ${QUAD_CFG[q].desc} (${vm.counts[q] || 0})`,
      data: grouped[q],
      backgroundColor: QUAD_CFG[q].bg,
      borderColor: QUAD_CFG[q].bd,
      borderWidth: 1,
      pointRadius: 4.5,
      pointHoverRadius: 7,
    }));

    const cs       = getComputedStyle(document.documentElement);
    const clrMuted = cs.getPropertyValue('--text-muted').trim() || '#6b6899';
    const clrGrid  = cs.getPropertyValue('--border').trim()     || '#d4d2e8';

    const quadLinesPlugin = {
      id: `gicaQL_${grp.id}`,
      afterDraw(chart) {
        const { ctx, chartArea: ca, scales } = chart;
        const xPx = scales.x.getPixelForValue(vm.xT);
        const yPx = scales.y.getPixelForValue(vm.yT);
        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = 'rgba(107,114,128,0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(xPx, ca.top);  ctx.lineTo(xPx, ca.bottom); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ca.left, yPx); ctx.lineTo(ca.right, yPx);  ctx.stroke();
        ctx.restore();
        ctx.save();
        const pad = 5;
        [
          { q:'I',   tx: ca.right-pad, ty: ca.top+pad,    ta:'right', tb:'top'    },
          { q:'II',  tx: ca.left+pad,  ty: ca.top+pad,    ta:'left',  tb:'top'    },
          { q:'IV',  tx: ca.left+pad,  ty: ca.bottom-pad, ta:'left',  tb:'bottom' },
          { q:'III', tx: ca.right-pad, ty: ca.bottom-pad, ta:'right', tb:'bottom' },
        ].forEach(({ q, tx, ty, ta, tb }) => {
          ctx.textAlign = ta; ctx.textBaseline = tb;
          ctx.fillStyle = QUAD_CFG[q].bd;
          const dy = tb === 'top' ? 11 : -11;
          ctx.font = '700 9px Inter,sans-serif';
          ctx.fillText(`${q}  (${vm.counts[q] || 0})`, tx, ty);
          ctx.font = '400 8px Inter,sans-serif';
          ctx.fillText(QUAD_CFG[q].desc, tx, ty + dy);
        });
        ctx.restore();
      }
    };

    _charts[grp.id] = new Chart(canvas, {
      type: 'scatter',
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            min: 0, max: 1.2,
            ticks: { color: clrMuted, font: { size: 9 }, callback: v => v <= 1.001 ? `${Math.round(v * 100)}%` : '', stepSize: 0.25 },
            grid:  { color: clrGrid + '44' },
          },
          y: {
            min: 0, max: 1.2,
            ticks: { color: clrMuted, font: { size: 9 }, callback: v => v <= 1.001 ? `${Math.round(v * 100)}%` : '', stepSize: 0.25 },
            grid:  { color: clrGrid + '44' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: items => items[0]?.raw?.name || '—',
              label: item => {
                const d = item.raw;
                return [
                  `BU: ${d.bu}  ·  Level: ${d.level}`,
                  `M: ${Math.round((d.raw1 || 0) * 100)}%  (${d.grade1 || '—'})`,
                  `I: ${Math.round((d.raw2 || 0) * 100)}%  (${d.grade2 || '—'})`,
                ];
              }
            }
          }
        }
      },
      plugins: [quadLinesPlugin],
    });
  };

  const buildAll = () => GICA_QUAD_GROUPS.forEach(buildOne);

  const updateTrigger = (triggerId, set, defaultLabel) => {
    const btn = section.querySelector(`#${triggerId}`);
    if (!btn) return;
    const label = btn.querySelector('.quad-dd-label');
    if (!label) return;
    if (set.size === 0) {
      label.textContent = defaultLabel;
      btn.classList.remove('quad-dd-btn--active');
    } else {
      label.textContent = set.size <= 2 ? [...set].join(', ') : `${defaultLabel} (${set.size})`;
      btn.classList.add('quad-dd-btn--active');
    }
  };

  const wirePanelFilter = (panelId, dataKey, targetSet, triggerId, defaultLabel) => {
    const panel = section.querySelector(`#${panelId}`);
    if (!panel) return;
    panel.addEventListener('click', e => {
      const btn = e.target.closest(`.quad-btn[data-${dataKey}]`);
      if (!btn) return;
      const val = btn.dataset[dataKey];
      if (val === 'all') {
        targetSet.clear();
      } else {
        targetSet.has(val) ? targetSet.delete(val) : targetSet.add(val);
      }
      panel.querySelectorAll(`.quad-btn[data-${dataKey}]`).forEach(b => {
        const v = b.dataset[dataKey];
        b.classList.toggle('quad-btn--active', v === 'all' ? targetSet.size === 0 : targetSet.has(v));
      });
      updateTrigger(triggerId, targetSet, defaultLabel);
      buildAll();
    });
  };

  const togglePanel = (panelId, e) => {
    e.stopPropagation();
    const panel = section.querySelector(`#${panelId}`);
    const wasHidden = panel.hidden;
    section.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
    panel.hidden = !wasHidden;
  };

  section.querySelector('#quad-bu-trigger')  ?.addEventListener('click', e => togglePanel('quad-bu-panel', e));
  section.querySelector('#quad-dept-trigger')?.addEventListener('click', e => togglePanel('quad-dept-panel', e));

  if (section._onDocClick) document.removeEventListener('click', section._onDocClick);
  section._onDocClick = () => section.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
  document.addEventListener('click', section._onDocClick);

  wirePanelFilter('quad-bu-panel',   'bu',   _buSet,   'quad-bu-trigger',   'BU');
  wirePanelFilter('quad-dept-panel', 'dept', _deptSet, 'quad-dept-trigger', 'แผนก');

  // Flip each Quadrant card on click / Enter / Space. Click bubbles from
  // canvas too — that's intentional (Chart.js tooltip is hover-only, so a
  // deliberate click flips the card either way). Dropdown buttons live
  // outside the wrap so they don't trigger flip.
  section.querySelectorAll('.quad-card-wrap[data-quad-flip]').forEach(wrap => {
    wrap.addEventListener('click', () => wrap.classList.toggle('is-flipped'));
    wrap.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        wrap.classList.toggle('is-flipped');
      }
    });
  });

  buildAll();
}

function _mountGicaSummary(html, vm) {
  const container = $('gica-summary');
  if (!container) return;
  Object.values(_gicaTrendCharts).forEach(ch => { try { ch.destroy(); } catch (_) {} });
  for (const k in _gicaTrendCharts) delete _gicaTrendCharts[k];
  container.innerHTML = html;
  container.querySelectorAll('.flip-card-wrap[data-bu]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
  const wireFlipAll = (btnId, selector, labelA, labelB) => {
    const btn = container.querySelector(btnId);
    if (!btn) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const flipping = btn.dataset.flipped !== '1';
      container.querySelectorAll(selector).forEach(c => {
        c.classList.toggle('is-flipped', flipping);
      });
      btn.dataset.flipped = flipping ? '1' : '0';
      const newLabel = flipping ? labelB : labelA;
      btn.title = newLabel;
      btn.setAttribute('aria-label', newLabel);
    });
  };
  wireFlipAll('#gica-flip-all', '.flip-card-wrap[data-bu]', t('gicaFlipViewTrend'), t('gicaFlipViewScore'));
  const avgFlip = container.querySelector('#gica-avg-flip');
  if (avgFlip) avgFlip.addEventListener('click', () => avgFlip.classList.toggle('is-flipped'));

  // Expectation matrix — Scale+Fade transition Level ↔ Department
  const matrixTables = container.querySelector('#gica-matrix-tables');
  const section      = container.querySelector('.gica-expect-section');
  if (matrixTables && section) {
    let _matrixAnimating = false;
    section.addEventListener('click', e => {
      if (_matrixAnimating) return;
      if (e.target.closest('.exp-cell[data-level], .exp-cell[data-dept]')) return;
      const front = matrixTables.querySelector('.exp-matrix-front');
      const back  = matrixTables.querySelector('.exp-matrix-back');
      if (!front || !back) return;
      _matrixAnimating = true;
      matrixTables.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
      matrixTables.style.opacity   = '0';
      matrixTables.style.transform = 'scale(0.97)';
      setTimeout(() => {
        const showingFront = !front.classList.contains('hidden');
        front.classList.toggle('hidden',  showingFront);
        back.classList.toggle('hidden',  !showingFront);
        matrixTables.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
        matrixTables.style.opacity   = '1';
        matrixTables.style.transform = '';
        setTimeout(() => { _matrixAnimating = false; }, 220);
      }, 180);
    });
  }

  // KPI Setup modal — one BU tab + "All BU" fallback tab; switching tabs swaps which
  // (level → target) bucket the sliders read/write, without losing unsaved edits.
  const kpiModal     = container.querySelector('#gica-kpi-modal');
  const closeKpiModal = () => kpiModal && kpiModal.classList.add('hidden');
  const _saveKpiSlidersToActiveBu = () => {
    kpiModal.querySelectorAll('.gica-kpi-slider').forEach(slider => {
      const lv  = slider.dataset.level;
      const val = Number(slider.value);
      if (!_gicaKpiTargets[lv]) _gicaKpiTargets[lv] = { all: 80 };
      if (_gicaKpiActiveBu === 'all') {
        // Setting "All BU" cascades to every BU — clear per-BU overrides so the
        // whole matrix follows this one value uniformly (frontend-only; backend
        // kpi_g1/kpi_g2/... Excel tables are not touched).
        const t = _gicaKpiTargets[lv];
        Object.keys(t).forEach(k => { if (k !== 'all') delete t[k]; });
        t.all = val;
      } else {
        _gicaKpiTargets[lv][_gicaKpiActiveBu] = val;
      }
    });
  };
  const _wireKpiSliders = () => {
    kpiModal.querySelectorAll('.gica-kpi-slider').forEach(slider => {
      const valEl = slider.closest('.gica-kpi-row')?.querySelector('.gica-kpi-row__val');
      slider.addEventListener('input', () => { if (valEl) valEl.textContent = slider.value + '%'; });
    });
  };
  if (kpiModal) {
    container.querySelector('#gica-kpi-setup-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      kpiModal.classList.remove('hidden');
    });
    container.querySelector('#gica-kpi-close')?.addEventListener('click', closeKpiModal);
    container.querySelector('#gica-kpi-cancel')?.addEventListener('click', closeKpiModal);
    container.querySelector('#gica-kpi-backdrop')?.addEventListener('click', closeKpiModal);
    _wireKpiSliders();
    kpiModal.querySelectorAll('.gica-kpi-bu-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        if (tab.dataset.bu === _gicaKpiActiveBu) return;
        _saveKpiSlidersToActiveBu();
        _gicaKpiActiveBu = tab.dataset.bu;
        kpiModal.querySelectorAll('.gica-kpi-bu-tab').forEach(t => t.classList.toggle('gica-kpi-bu-tab--active', t === tab));
        const list = kpiModal.querySelector('#gica-kpi-list');
        if (list) {
          list.innerHTML = _gicaKpiListHtml(_gicaKpiActiveBu);
          _wireKpiSliders();
        }
      });
    });
    container.querySelector('#gica-kpi-confirm')?.addEventListener('click', () => {
      _saveKpiSlidersToActiveBu();
      closeKpiModal();
      renderGicaSummary();
    });
  }

  // Table_freq reference modal
  const freqModal = container.querySelector('#gica-freq-modal');
  const closeFreqModal = () => freqModal && freqModal.classList.add('hidden');
  if (freqModal) {
    container.querySelector('#gica-freq-info-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      freqModal.classList.remove('hidden');
    });
    container.querySelector('#gica-freq-close')?.addEventListener('click', closeFreqModal);
    container.querySelector('#gica-freq-backdrop')?.addEventListener('click', closeFreqModal);
  }

  // KPI Summary modal — pure read-only actual-vs-passed per BU + org rollup.
  // Body is rebuilt each open so stale numbers can't sit under the cache-busted CSS/JS.
  const kpiSumModal = container.querySelector('#gica-kpi-summary-modal');
  const closeKpiSumModal = () => kpiSumModal && kpiSumModal.classList.add('hidden');
  if (kpiSumModal) {
    container.querySelector('#gica-kpi-summary-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      const body = kpiSumModal.querySelector('#gica-kpi-summary-body');
      if (body) body.innerHTML = _gicaKpiSummaryHtml(_computeGicaKpiSummary(vm.emps || []));
      kpiSumModal.classList.remove('hidden');
    });
    container.querySelector('#gica-kpi-summary-close')?.addEventListener('click', closeKpiSumModal);
    container.querySelector('#gica-kpi-summary-backdrop')?.addEventListener('click', closeKpiSumModal);
    // Click any BU card in the summary → open per-BU per-level drill-down modal.
    // Delegated so it survives body innerHTML rebuild on every open.
    kpiSumModal.addEventListener('click', e => {
      const card = e.target.closest('.kpi-sum-bu-card[data-bu]:not(.kpi-sum-bu-card--empty)');
      if (!card) return;
      _gicaOpenKpiBuDetailModal(card.dataset.bu);
    });
  }

  // KPI × BU drill-down modal — opens from KPI Summary card click.
  const kpiBuDetailModal = container.querySelector('#gica-kpi-bu-detail-modal');
  const closeKpiBuDetail = () => kpiBuDetailModal && kpiBuDetailModal.classList.add('hidden');
  if (kpiBuDetailModal) {
    container.querySelector('#gica-kpi-bu-detail-close')?.addEventListener('click', closeKpiBuDetail);
    container.querySelector('#gica-kpi-bu-detail-backdrop')?.addEventListener('click', closeKpiBuDetail);
    container.querySelector('#gica-kpi-bu-detail-png')?.addEventListener('click', _gicaExportKpiBuDetailPng);
    container.querySelector('#gica-kpi-bu-detail-print')?.addEventListener('click', _gicaPrintKpiBuDetail);
  }

  // Expectation matrix drill-down
  const modal     = container.querySelector('#gica-expect-modal');
  const modalTtl  = container.querySelector('#gica-expect-modal-title');
  const modalBody = container.querySelector('#gica-expect-modal-body');
  const closeModal = () => modal && modal.classList.add('hidden');
  if (modal) {
    modal.querySelectorAll('[data-close="1"]').forEach(el => el.addEventListener('click', closeModal));
  }
  if (window._gicaEscHandler) document.removeEventListener('keydown', window._gicaEscHandler);
  window._gicaEscHandler = e => {
    if (e.key !== 'Escape') return;
    // Layered close: if the KPI BU detail modal is open, close ONLY that one so
    // the underlying KPI Summary stays visible (drill-down back-navigation).
    if (kpiBuDetailModal && !kpiBuDetailModal.classList.contains('hidden')) {
      closeKpiBuDetail();
      return;
    }
    closeModal();
    closeKpiModal();
    closeFreqModal();
    closeKpiSumModal();
  };
  document.addEventListener('keydown', window._gicaEscHandler);

  const _showModal = (list, title) => {
    if (modalTtl) modalTtl.textContent = title;
    if (modalBody) {
      modalBody.innerHTML = list.length ? `
        <table class="exp-modal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th class="exp-modal-icon-th" title="Measurement"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
              <th class="exp-modal-icon-th" title="Inspection"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
              <th>Department</th>
              <th>Position</th>
              <th>Level</th>

              <th class="exp-modal-icon-th" title="Measurement"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
              <th class="exp-modal-icon-th" title="Inspection"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
              
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(e => {
              const okM = e.exp1 && e.grade1 && (GICA_GRADE_RANK[e.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0);
              const okI = e.exp2 && e.grade2 && (GICA_GRADE_RANK[e.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
              return `<tr>
                <td>${escapeHtml(e.name || '—')}</td>
                <td class="exp-modal-icon-td">${_gicaExpBadge(e.exp1)}</td>
                <td class="exp-modal-icon-td">${_gicaExpBadge(e.exp2)}</td>
                <td class="u-muted">${escapeHtml(e.deptname || '—')}</td>
                <td class="u-muted">${escapeHtml(e.position || '—')}</td>
                <td class="u-muted">${escapeHtml(e.level || '—')}</td>
                <td><span class="exp-badge ${okM ? 'exp-badge--pass' : 'exp-badge--fail'}">${e.grade1 || '—'}</span></td>
                <td><span class="exp-badge ${okI ? 'exp-badge--pass' : 'exp-badge--fail'}">${e.grade2 || '—'}</span></td>
                <td>${e.passed ? '<span class="exp-status exp-status--pass">Pass</span>' : '<span class="exp-status exp-status--fail">Fail</span>'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>` : '<div class="u-muted" style="text-align:center;padding:24px;">— No data available —</div>';
    }
    if (modal) modal.classList.remove('hidden');
  };

  // Trend mini-charts — back face of each BU flip card: one chart for
  // Measurement, one for Inspection, stacked top/bottom.
  if (typeof Chart !== 'undefined' && vm.trendByBu) {
    const X_SLOTS = 12;
    const tLabels = Array.from({length: X_SLOTS}, (_, i) => `${i + 1}`);
    const tFont = { size: 9, family: 'Inter, system-ui, -apple-system, sans-serif' };
    const tOpts = {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      // Top padding on the chart area itself lifts the 100-line marker off the
      // edge without stretching the axis (max stays 100, ticks stay 0/20/…/100).
      layout: { padding: { top: 10 } },
      scales: {
        y: {
          min: 0, max: 100,
          ticks: { stepSize: 20, callback: v => `${v}`, font: tFont, maxTicksLimit: 6, color: Chart.defaults.color },
          grid: { color: 'rgba(128,128,128,0.07)', drawBorder: false },
          border: { display: false },
        },
        x: {
          ticks: { font: tFont, color: Chart.defaults.color, maxRotation: 0 },
          grid: { display: false },
          border: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index', intersect: false,
          callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw != null ? ctx.raw + '%' : '—'}` },
        },
      },
    };
    const buildTrendChart = (canvasId, label, data, color, dashed) => {
      const canvas = container.querySelector(`#${canvasId}`);
      if (!canvas) return null;
      return new Chart(canvas, {
        type: 'line',
        data: {
          labels: tLabels,
          datasets: [{
            label,
            data: data.slice(0, X_SLOTS),
            borderColor: color,
            backgroundColor: dashed ? 'transparent' : color + '18',
            fill: !dashed,
            borderDash: dashed ? [4, 3] : undefined,
            borderWidth: dashed ? 1.5 : 2,
            pointRadius: dashed ? 2 : 2.5,
            pointHoverRadius: dashed ? 3.5 : 4,
            tension: 0.4,
            spanGaps: true,
          }],
        },
        options: tOpts,
      });
    };
    BU_ORDER.forEach(bu => {
      const t = vm.trendByBu[bu];
      if (!t) return;
      const color = GICA_BU_COLORS[bu] || '#6b7280';
      const measCh = buildTrendChart(`gica-trend-meas-${bu}`, 'Measurement', t.meas, color, false);
      const inspCh = buildTrendChart(`gica-trend-insp-${bu}`, 'Inspection',  t.insp, color, true);
      if (measCh) _gicaTrendCharts[`${bu}-meas`] = measCh;
      if (inspCh) _gicaTrendCharts[`${bu}-insp`] = inspCh;
    });
  }

  const emps = _gicaData.employees || [];
  _mountGicaQuadrant(container, emps);
  // Front face: Level × BU
  container.querySelectorAll('.exp-cell[data-level]:not([data-dept])').forEach(td => {
    td.addEventListener('click', () => {
      const lv = td.dataset.level, bu = td.dataset.bu;
      const list = emps.filter(e => e.level === lv && e.bu === bu)
        .sort((a, b) => Number(b.passed) - Number(a.passed) || (a.name || '').localeCompare(b.name || ''));
      _showModal(list, `${bu} · ${lv} — ${list.length} คน`);
    });
  });
  // Back face dept agg row: Dept × BU (all levels in dept)
  container.querySelectorAll('.exp-cell[data-dept]:not([data-level])').forEach(td => {
    td.addEventListener('click', () => {
      const dept = td.dataset.dept, bu = td.dataset.bu;
      const list = emps.filter(e => e.deptname === dept && e.bu === bu)
        .sort((a, b) => Number(b.passed) - Number(a.passed) || (a.name || '').localeCompare(b.name || ''));
      _showModal(list, `${bu} · ${dept} — ${list.length} คน`);
    });
  });
  // Back face level sub-row: Dept+Level × BU
  container.querySelectorAll('.exp-cell[data-dept][data-level]').forEach(td => {
    td.addEventListener('click', () => {
      const dept = td.dataset.dept, lv = td.dataset.level, bu = td.dataset.bu;
      const list = emps.filter(e => e.deptname === dept && e.level === lv && e.bu === bu)
        .sort((a, b) => Number(b.passed) - Number(a.passed) || (a.name || '').localeCompare(b.name || ''));
      _showModal(list, `${bu} · ${dept} · ${lv} — ${list.length} คน`);
    });
  });
}

function renderGicaSummary() {
  const vm = _computeGicaSummary(_gicaData.employees || [], _gicaData.bus || [], _gicaKpiTargets, _gicaData.freqTable || []);
  _mountGicaSummary(_gicaSummaryHtml(vm), vm);
}

// ══════════════════════════════════════════════════════════════════════════════
// ASSESSMENT SCHEDULE — Functional core / Imperative shell
//   _computeGicaSchedule → viewModel   (pure)
//   _gicaScheduleHtml    → html string (pure)
//   _mountGicaSchedule   → DOM         (imperative)
//   renderGicaSchedule   → orchestrator
// ══════════════════════════════════════════════════════════════════════════════

let _gicaSchedTimelineMode = 'week';   // 'week' | 'month'
let _gicaSchedTimelineChart = null;
let _gicaScheduleRendered  = false;
let _gicaEmpListRendered   = false;
let _gicaSchedBuFilter   = new Set();
let _gicaSchedDeptFilter = new Set();
let _gicaCalMonthOffset = 0;        // 0 = current month, ±N = N months away
let _gicaCalBuFilter    = new Set();
let _gicaCalTypeFilter  = new Set();
let _gicaCalSidebarOpen = false;

function _gicaSchedBuckets(today, mode) {
  const buckets = [];
  if (mode === 'day') {
    // -7..+14 = 22 daily buckets — narrower granularity so widen the window vs
    // week/month (12 buckets each) to still show ~3 weeks of scheduling.
    const day0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (let i = -7; i <= 14; i++) {
      const start = new Date(day0); start.setDate(day0.getDate() + i);
      const end   = new Date(start); end.setHours(23, 59, 59, 999);
      buckets.push({ start, end, isFuture: i > 0,
        label: `${start.getDate()}/${start.getMonth() + 1}` });
    }
  } else if (mode === 'week') {
    const day = today.getDay() || 7;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - (day - 1));
    for (let i = -5; i <= 6; i++) {
      const start = new Date(weekStart); start.setDate(weekStart.getDate() + i * 7);
      const end   = new Date(start);     end.setDate(start.getDate() + 6);
      buckets.push({ start, end, isFuture: i > 0,
        label: `${start.getDate()}/${start.getMonth() + 1}` });
    }
  } else {
    for (let i = -5; i <= 6; i++) {
      const start = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const end   = new Date(today.getFullYear(), today.getMonth() + i + 1, 0);
      const yr = currentLang === 'th' ? start.getFullYear() + 543 : start.getFullYear();
      buckets.push({ start, end, isFuture: i > 0,
        label: `${monthAbbr(start.getMonth())} ${String(yr).slice(2)}` });
    }
  }
  return buckets;
}

function _gicaSchedBucketIdx(iso, buckets) {
  const d = _gicaParseDate(iso);
  if (!d) return -1;
  for (let i = 0; i < buckets.length; i++) {
    if (d >= buckets[i].start && d <= buckets[i].end) return i;
  }
  return -1;
}

function _gicaDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ISO 8601 week number (Mon-start weeks, week 1 = week containing the year's first Thursday).
function _gicaIsoWeekNumber(d) {
  const target = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const dayNr = (target.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const fDayNr = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - fDayNr + 3);
  return 1 + Math.round((target - firstThursday) / (7 * 86400000));
}

// Month grid for the Calendar View — Mon-start weeks, only as many rows as the month needs (5 or 6).
function _gicaCalGrid(monthDate) {
  const year = monthDate.getFullYear(), month = monthDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth   = new Date(year, month + 1, 0);
  const startDow = firstOfMonth.getDay() || 7;
  const cur = new Date(firstOfMonth);
  cur.setDate(firstOfMonth.getDate() - (startDow - 1));
  const days = [];
  while (true) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
    if (cur > lastOfMonth && days.length % 7 === 0) break;
  }
  return days;
}

function _gicaCalGroupByBu(entries) {
  const map = {};
  entries.forEach(entry => {
    const k = entry.emp.bu || '—';
    if (!map[k]) map[k] = { bu: k, count: 0, overdue: false, types: new Set() };
    map[k].count++;
    if (entry.kind === 'Missed') map[k].overdue = true;
    if (entry.kind) map[k].types.add(entry.kind);
  });
  return sortBus(Object.keys(map)).map(bu => {
    const g = map[bu];
    g.types = Object.keys(GICA_CAL_TYPE).filter(t => g.types.has(t));
    return g;
  });
}

// Add N days to an ISO date string (YYYY-MM-DD) → new ISO string. Null-safe.
function _gicaAddDaysIso(iso, days) {
  const d = _gicaParseDate(iso);
  if (!d) return null;
  d.setDate(d.getDate() + days);
  return _gicaDateKey(d);
}

// Expand one employee into virtual calendar events.
// - Historical backfill: between each h.scheduledDate and h.date (person tested late),
//   generate a 'Missed' event at scheduledDate and every +7 days until the actual test.
// - Current backlog: from e.scheduledNext, roll +7 days generating 'Missed' events for every
//   step in the past; the final step >= today is emitted as the upcoming scheduled event
//   (kind = e.nextType). This mirrors the Timeline's overdue-cascade so the sum of chips
//   across a week matches the Timeline's per-week total for that person.
// Guard limits prevent runaway loops on bad data (200 iterations = ~4 years of weekly rolls).
function _gicaExpandCalendarEvents(e, today) {
  const events = [];
  const todayKey = _gicaDateKey(today);

  (e.history || []).forEach(h => {
    if (!h.scheduledDate || !h.date || h.date <= h.scheduledDate) return;
    let d = h.scheduledDate;
    let guard = 0;
    while (d && d < h.date && guard++ < 200) {
      events.push({ date: d, kind: 'Missed' });
      d = _gicaAddDaysIso(d, 7);
    }
  });

  if (e.scheduledNext) {
    let d = e.scheduledNext;
    let guard = 0;
    while (d && d < todayKey && guard++ < 200) {
      events.push({ date: d, kind: 'Missed' });
      d = _gicaAddDaysIso(d, 7);
    }
    if (d) events.push({ date: d, kind: e.nextType || 'Review' });
  }

  // Dedup per date. When both a Missed and a non-Missed event land on the same day
  // (rare overlap between history backfill and current backlog), the non-Missed wins.
  const byDate = new Map();
  events.forEach(ev => {
    const prev = byDate.get(ev.date);
    if (!prev || (prev.kind === 'Missed' && ev.kind !== 'Missed')) byDate.set(ev.date, ev);
  });
  return [...byDate.values()];
}

// Calendar View — month grid. Events keyed by expanded schedule (see _gicaExpandCalendarEvents):
// each employee contributes one chip per expected/missed date, so overdue people appear on
// every past 7-day step they skipped — this makes the calendar reflect real backlog workload
// consistent with the Timeline's overdue cascade. BU/type filters are independent of the
// Timeline's filters — each chart owns its own filter state.
function _computeGicaCalendar(emps, monthDate, buFilter = new Set(), typeFilter = new Set(), sidebarOpen = false) {
  const allSchedable = emps.filter(e => e.scheduledNext || e.startDate);
  const availBus = sortBus([...new Set(allSchedable.map(e => e.bu).filter(Boolean))]);

  const buFiltered = allSchedable.filter(e => buFilter.size === 0 || buFilter.has(e.bu));

  const today    = _gicaToday();
  const todayKey = _gicaDateKey(today);

  const eventsByDate = {};
  buFiltered.forEach(e => {
    _gicaExpandCalendarEvents(e, today).forEach(ev => {
      if (typeFilter.size > 0 && !typeFilter.has(ev.kind)) return;
      (eventsByDate[ev.date] = eventsByDate[ev.date] || []).push({ emp: e, kind: ev.kind });
    });
  });
  const gridDays  = _gicaCalGrid(monthDate);
  const month     = monthDate.getMonth();
  const weeks = [];
  for (let i = 0; i < gridDays.length; i += 7) {
    const days = gridDays.slice(i, i + 7).map(d => {
      const key = _gicaDateKey(d);
      const events = eventsByDate[key] || [];
      return {
        key, dayNum: d.getDate(), inMonth: d.getMonth() === month, isToday: key === todayKey,
        isPast: d < today,
        events, buGroups: _gicaCalGroupByBu(events),
      };
    });
    weeks.push({ weekNumber: _gicaIsoWeekNumber(gridDays[i]), days });
  }

  const M = ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December'];
  const monthLabel = `${M[month]} ${monthDate.getFullYear()}`;

  return { weeks, monthLabel, availBus, buFilter, typeFilter, sidebarOpen };
}

// Row 2 BU cards — total needing test THIS WEEK per BU, split by Retest/Review type,
// each shown as "attended this week / required this week". Cohort + cutoff rules match
// the Timeline above (and the now-removed Sankey): a person counts toward this week's
// cohort if they tested this week, or if they're due (scheduledNext <= cutoff) and
// haven't tested yet — cutoff is today for the current week so a week still in progress
// only counts people already overdue right now, not ones whose day just hasn't arrived.
function _computeGicaWeeklyBuCards(emps, today) {
  const allSchedable = emps.filter(e => e.scheduledNext || e.startDate);
  const buckets    = _gicaSchedBuckets(today, 'week');
  const currentIdx = buckets.findIndex(b => today >= b.start && today <= b.end);
  const cutoff     = currentIdx >= 0 ? (today < buckets[currentIdx].end ? today : buckets[currentIdx].end) : today;

  const buMap = {};
  const ensure = bu => buMap[bu] || (buMap[bu] = {
    bu, total: 0, attended: 0, overdue: 0, attendedPass: 0, attendedFail: 0,
    retestReq: 0, retestAttended: 0, reviewReq: 0, reviewAttended: 0,
    earlyN: 0, earlyPass: 0, earlyFail: 0,
    employees: [],
  });

  allSchedable.forEach(e => {
    if (!e.bu || currentIdx < 0) return;
    const thisWeekEntry = (e.history || []).find(h => h.date && _gicaSchedBucketIdx(h.date, buckets) === currentIdx);
    const attendedThisWeek = !!thisWeekEntry;

    // "Early Assessment": tested this week but scheduled date for that test is a future bucket
    if (attendedThisWeek && thisWeekEntry.scheduledDate) {
      const schedIdx = _gicaSchedBucketIdx(thisWeekEntry.scheduledDate, buckets);
      if (schedIdx > currentIdx) {
        const c = ensure(e.bu);
        c.earlyN++;
        const ep = thisWeekEntry.grade1 && thisWeekEntry.grade2 && e.exp1 && e.exp2 &&
          (GICA_GRADE_RANK[thisWeekEntry.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
          (GICA_GRADE_RANK[thisWeekEntry.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
        if (ep) c.earlyPass++; else c.earlyFail++;
        return;
      }
    }

    // "Due this week" cohort: scheduled this week or overdue (not yet tested), OR tested on-plan
    let inCohort = false;
    if (attendedThisWeek) {
      // Tested this week and not early → on-plan attendance
      inCohort = true;
    } else if (e.scheduledNext) {
      const schedDate = _gicaParseDate(e.scheduledNext);
      if (schedDate) {
        if (_gicaSchedBucketIdx(e.scheduledNext, buckets) === currentIdx) inCohort = true;
        else if (schedDate <= cutoff) inCohort = true;
      }
    }
    if (!inCohort) return;

    const c = ensure(e.bu);
    c.total++;
    c.employees.push(e);
    if (attendedThisWeek) {
      c.attended++;
      const attemptPassed = thisWeekEntry.grade1 && thisWeekEntry.grade2 && e.exp1 && e.exp2 &&
        (GICA_GRADE_RANK[thisWeekEntry.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
        (GICA_GRADE_RANK[thisWeekEntry.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
      if (attemptPassed) c.attendedPass++; else c.attendedFail++;
    } else {
      c.overdue++;
    }

    if (e.nextType === 'Retest') { c.retestReq++; if (attendedThisWeek) c.retestAttended++; }
    else                          { c.reviewReq++; if (attendedThisWeek) c.reviewAttended++; }
  });

  return BU_ORDER.map(bu => buMap[bu] || { bu, empty: true, earlyN: 0 });
}

function _computeGicaSchedule(emps, today, timelineMode, schedMode = 'all', buFilter = new Set(), deptFilter = new Set()) {
  const allSchedable = emps.filter(e => e.scheduledNext || e.startDate);
  const availBus   = sortBus([...new Set(allSchedable.map(e => e.bu).filter(Boolean))]);
  const availDepts = [...new Set(allSchedable.map(e => e.deptname).filter(Boolean))].sort();
  // BU/dept filter affects only the Assessment Schedule Timeline chart below — KPI cards,
  // BU cards, donut and the schedule table all stay computed from the unfiltered list.
  const schedable = allSchedable.filter(e => {
    if (buFilter.size > 0 && !buFilter.has(e.bu)) return false;
    if (deptFilter.size > 0 && !deptFilter.has(e.deptname)) return false;
    return true;
  });
  const total    = allSchedable.length;
  const dueWeekN = allSchedable.filter(e => e.daysOverdue != null
                                      && e.daysOverdue >= -7 && e.daysOverdue <= 0).length;
  const dueMonthN = allSchedable.filter(e => e.daysOverdue != null
                                       && e.daysOverdue >= -30 && e.daysOverdue <= 0).length;

  const retestN = allSchedable.filter(e => e.passed === false).length;
  const pendingN = allSchedable.filter(e => e.passed !== true && e.passed !== false).length;

  const statusCounts = { upcoming: 0, due_soon: 0, overdue: 0, unknown: 0 };
  allSchedable.forEach(e => { statusCounts[e.schedStatus] = (statusCounts[e.schedStatus] || 0) + 1; });

  const buMap = {};
  allSchedable.forEach(e => {
    if (!e.bu) return;
    if (!buMap[e.bu]) buMap[e.bu] = { bu: e.bu, total: 0, overdue: 0, dueSoon: 0, failed: 0, awaiting: 0 };
    const c = buMap[e.bu];
    c.total++;
    if (e.schedStatus === 'overdue')  c.overdue++;
    if (e.schedStatus === 'due_soon') c.dueSoon++;
    if (e.passed === false)           c.failed++;
    if (e.passed !== true && e.passed !== false) c.awaiting++;
  });
  const buCards = BU_ORDER.map(bu => buMap[bu] || { bu, empty: true });

  const buckets = _gicaSchedBuckets(today, timelineMode);
  const currentIdx = buckets.findIndex(b => today >= b.start && today <= b.end);
  const timeline = buckets.map(b => ({
    label: b.label, isFuture: b.isFuture, start: b.start, end: b.end,
    onTimePassed: 0, onTimeFailed: 0, upcoming: 0, overdue: 0,
    // Parallel employee lists collected at each count increment below — powers the
    // click-to-drill list (click a bar → see the people behind that number).
    passEmps: [], failEmps: [], upcomingEmps: [], overdueEmps: [],
  }));
  schedable.forEach(e => {
    // Track buckets where this person already has an actual test recorded (from history).
    // Used to prevent double-counting in monthly mode when scheduledNext falls in the
    // same monthly bucket as a history entry.
    const testedBuckets = new Set();
    (e.history || []).forEach(h => {
      if (!h.date) return;
      const actualIdx  = _gicaSchedBucketIdx(h.date, buckets);
      const schedIdx   = h.scheduledDate ? _gicaSchedBucketIdx(h.scheduledDate, buckets) : -1;
      const actualDate = _gicaParseDate(h.date);
      const schedDate  = h.scheduledDate ? _gicaParseDate(h.scheduledDate) : null;
      if (actualIdx >= 0) {
        testedBuckets.add(actualIdx);
        const attemptPassed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
          (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
          (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
        if (attemptPassed) { timeline[actualIdx].onTimePassed++; timeline[actualIdx].passEmps.push(e); }
        else               { timeline[actualIdx].onTimeFailed++; timeline[actualIdx].failEmps.push(e); }
      }
      // Late test → past is immutable: mark every missed bucket as overdue.
      // GUARD: only cascade when person actually tested LATE (actualDate > schedDate).
      // Without this guard, an initial test done EARLIER than the auto-scheduled date
      // (e.g. startDate+1mo default) wrongly flags the intervening weeks as overdue.
      // Weekly: cascade from scheduled bucket through bucket-before-actual so a person who
      //         eventually tests still shows overdue for each week they skipped (matches the
      //         scheduledNext cascade above for still-overdue people).
      // Monthly: single-bucket mark to keep monthly's "count once" policy consistent.
      const wasLate = schedDate && actualDate && actualDate > schedDate;
      if (wasLate && schedIdx >= 0 && schedIdx !== actualIdx) {
        if (timelineMode === 'week') {
          for (let bi = schedIdx; bi < buckets.length; bi++) {
            if (actualIdx >= 0 && bi >= actualIdx) break;
            if (buckets[bi].isFuture) break;
            timeline[bi].overdue++;
            timeline[bi].overdueEmps.push(e);
          }
        } else {
          timeline[schedIdx].overdue++;
          timeline[schedIdx].overdueEmps.push(e);
        }
      }
    });
    if (e.scheduledNext) {
      if (e.schedStatus === 'overdue') {
        // Weekly: cascade overdue forward through past/current buckets to show carry-over.
        //         lastTestDate guard suppresses double-count with history fail in the same week.
        // Monthly: count each overdue person ONCE at the bucket containing scheduledNext so the
        //          red overdue segment stays visible. The lastTestDate guard is intentionally NOT
        //          applied here — accepts mild Total double-count (a fail-then-overdue person can
        //          appear in both onTimeFailed and overdue for the same month) as the trade-off
        //          for keeping overdue visible in monthly mode.
        if (timelineMode === 'month') {
          const idx = _gicaSchedBucketIdx(e.scheduledNext, buckets);
          if (idx >= 0 && !buckets[idx].isFuture) { timeline[idx].overdue++; timeline[idx].overdueEmps.push(e); }
        } else {
          const startDate    = _gicaParseDate(e.scheduledNext);
          const lastTestDate = _gicaParseDate(e.lastDate);
          for (let bi = 0; bi < buckets.length; bi++) {
            if (startDate > buckets[bi].end) continue;
            if (buckets[bi].isFuture) break;
            if (lastTestDate && lastTestDate >= buckets[bi].start && lastTestDate <= buckets[bi].end) continue;
            if (buckets[bi].end < today) { timeline[bi].overdue++;  timeline[bi].overdueEmps.push(e); }
            else                         { timeline[bi].upcoming++; timeline[bi].upcomingEmps.push(e); }
          }
        }
      } else {
        const idx = _gicaSchedBucketIdx(e.scheduledNext, buckets);
        // Skip if person already counted in this bucket via a history entry (monthly double-count guard)
        if (idx >= 0 && !testedBuckets.has(idx)) { timeline[idx].upcoming++; timeline[idx].upcomingEmps.push(e); }
      }
    }
  });

  // Compute unique person count per bucket (union of the 4 lists de-duped).
  // The Total bar shows this — not the naive sum of segment counts, which
  // double-counts anyone appearing in multiple categories (e.g. overdue-cascaded
  // through week X then also upcoming in a later week).
  timeline.forEach(b => {
    const seen = new Set();
    [...b.passEmps, ...b.failEmps, ...b.overdueEmps, ...b.upcomingEmps].forEach(e => {
      const k = `${e.bu}|${e.empid}`;
      seen.add(k);
    });
    b.totalUnique = seen.size;
  });

  const weeklyBuCards = _computeGicaWeeklyBuCards(emps, today);

  return {
    total, dueWeekN, dueMonthN,
    retestN, pendingN,
    statusCounts, buCards, weeklyBuCards, timeline, timelineMode, schedMode, currentIdx,
    employees: allSchedable,
    availBus, availDepts, buFilter, deptFilter,
  };
}

function _gicaScheduleHtml(vm) {
  const legendItem = (color, text) => `
    <span><span style="display:inline-block;width:10px;height:10px;background:${color};border-radius:2px;margin-right:4px;vertical-align:middle;"></span>${text}</span>`;
  const buLabel   = vm.buFilter.size === 0   ? t('gicaColBu')   : vm.buFilter.size   <= 2 ? [...vm.buFilter].join(', ')   : `${t('gicaColBu')} (${vm.buFilter.size})`;
  const deptLabel = vm.deptFilter.size === 0 ? t('gicaColDept') : vm.deptFilter.size <= 2 ? [...vm.deptFilter].join(', ') : `${t('gicaColDept')} (${vm.deptFilter.size})`;
  const timelineCard = `
    <div class="card card--section">
      <div class="card-head u-between">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">${t('gicaSchedTimeline')}</h3>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <div class="quad-dropdown">
            <button class="quad-dd-btn${vm.buFilter.size > 0 ? ' quad-dd-btn--active' : ''}" id="gica-sched-bu-trigger" type="button"><span class="quad-dd-label">${buLabel}</span> ▾</button>
            <div class="quad-dd-panel" id="gica-sched-bu-panel" hidden>
              <button class="quad-btn${vm.buFilter.size === 0 ? ' quad-btn--active' : ''}" data-bu="all" type="button">${t('gicaAllBu')}</button>
              ${vm.availBus.map(bu => `<button class="quad-btn${vm.buFilter.has(bu) ? ' quad-btn--active' : ''}" data-bu="${escapeHtml(bu)}" type="button">${escapeHtml(bu)}</button>`).join('')}
            </div>
          </div>
          <div class="quad-dropdown">
            <button class="quad-dd-btn${vm.deptFilter.size > 0 ? ' quad-dd-btn--active' : ''}" id="gica-sched-dept-trigger" type="button"><span class="quad-dd-label">${deptLabel}</span> ▾</button>
            <div class="quad-dd-panel" id="gica-sched-dept-panel" hidden>
              <button class="quad-btn${vm.deptFilter.size === 0 ? ' quad-btn--active' : ''}" data-dept="all" type="button">${t('gicaAllDepts')}</button>
              ${vm.availDepts.map(d => `<button class="quad-btn${vm.deptFilter.has(d) ? ' quad-btn--active' : ''}" data-dept="${escapeHtml(d)}" type="button">${escapeHtml(d)}</button>`).join('')}
            </div>
          </div>
          <div class="toggle-group" id="gica-schedTimelineToggle">
            <button class="toggle-btn ${vm.timelineMode === 'day'   ? 'active' : ''}" data-mode="day"   type="button">${t('gicaDay')}</button>
            <button class="toggle-btn ${vm.timelineMode === 'week'  ? 'active' : ''}" data-mode="week"  type="button">${t('gicaWeek')}</button>
            <button class="toggle-btn ${vm.timelineMode === 'month' ? 'active' : ''}" data-mode="month" type="button">${t('gicaMonth')}</button>
          </div>
        </div>
      </div>
      <div class="chart-canvas-wrap" style="height:300px;"><canvas id="gica-schedTimelineChart"></canvas></div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:0.74rem;color:var(--text-muted);flex-wrap:wrap;">
        ${legendItem('#64748b', t('gicaLegendTotal'))}
        ${legendItem('#16a34a', t('gicaLegendOnTimePass'))}
        ${legendItem('#8def86', t('gicaLegendOnTimeFail'))}
        ${legendItem('#dc4e4e', t('gicaLegendOverdue'))}
      </div>
    </div>`;

  const buCardsHtml = vm.weeklyBuCards.map(c => {
    if (c.empty) return `<div class="stat-card stat-card--empty" style="min-width:0;">
      <div class="bu-name u-muted">${escapeHtml(c.bu)}</div>
      <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">${t('gicaNoData')}</div>
    </div>`;
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    const passPct = c.total > 0 ? Math.min(100, Math.round(c.attendedPass / c.total * 100)) : 0;
    const failPct = c.total > 0 ? Math.min(100, Math.round(c.attendedFail / c.total * 100)) : 0;
    return `
      <div class="stat-card gica-bu-cohort-card" data-bu="${escapeHtml(c.bu)}" style="min-width:0;cursor:pointer;" title="${escapeHtml(t('gicaClickBuCohort'))}">
        <div class="bu-head">
          <span class="bu-name" style="color:${buColor};">${escapeHtml(c.bu)}</span>
          <span class="u-muted bu-count">${c.total} ${t('gicaPeople')}</span>
        </div>
        <div style="margin-bottom:8px;">
          <div class="u-between u-muted" style="font-size:0.7rem;margin-bottom:2px;">
            <span>${t('gicaAssessmentStatus')}</span>
            <span class="u-text" style="font-weight:600;">${c.attended}/${c.total}</span>
          </div>
          <div class="pbar pbar--6" style="display:flex;" title="${t('pass')}: ${c.attendedPass}, ${t('fail')}: ${c.attendedFail}">
            ${passPct > 0 ? `<div class="pbar__fill" style="background:#16a34a;width:${passPct}%;border-radius:0;"></div>` : ''}
            ${failPct > 0 ? `<div class="pbar__fill" style="background:#86efac;width:${failPct}%;border-radius:0;"></div>` : ''}
          </div>
        </div>
        <div class="u-muted stat-card__footer">
          <div class="u-between" style="margin-bottom:2px;">
            <span>${t('gicaAttended')}</span><strong class="u-text">${c.attended}</strong>
          </div>
          <div class="u-between">
            <span>${t('gicaNotYetAttended')}</span><strong style="${c.overdue > 0 ? 'color:#dc2626;' : 'color:var(--text);'}">${c.overdue}</strong>
          </div>
        </div>
      </div>`;
  }).join('') || `<div class="u-muted" style="grid-column:1/-1;text-align:center;padding:20px;">${t('gicaNoBuData')}</div>`;
  const upcomingCard = `
    <div class="card card--section">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;flex-wrap:wrap;">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">${t('gicaUpcoming')}</h3>
        <div id="gica-schedToggle" class="toggle-group">
          <button class="toggle-btn${vm.schedMode === 'all'    ? ' active' : ''}" data-mode="all"    type="button">${t('gicaAll')}</button>
          <button class="toggle-btn${vm.schedMode === 'Retest' ? ' active' : ''}" data-mode="Retest" type="button">${t('gicaRetest')}</button>
          <button class="toggle-btn${vm.schedMode === 'Review' ? ' active' : ''}" data-mode="Review" type="button">${t('gicaReview')}</button>
        </div>
      </div>
      <div id="gica-schedSummary"></div>
      <div id="gica-schedChartWrap" style="display:grid;gap:12px;">
        <div>
          
          <div class="chart-canvas-wrap"><canvas id="gica-scheduleChart"></canvas></div>
        </div>
        <div id="gica-schedRightWrap" style="display:none;">
          
          <div class="chart-canvas-wrap"><canvas id="gica-scheduleChartRight"></canvas></div>
        </div>
      </div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:0.72rem;color:var(--text-muted);flex-wrap:wrap;">
        <div id="gica-schedBuLegend" style="display:flex;flex-wrap:wrap;gap:12px;"></div>
      </div>
    </div>`;

  const buSection = `<div class="stat-grid stat-grid--6">${buCardsHtml}</div>`;

  // Proportion of failed employees (passed === false, same population as the "Total
  // employees" card) broken down by how many consecutive attempts they've failed.
  const failStreakColors = { fail1: '#f59e0b', fail2: '#ea580c', fail3: '#dc2626' };
  const failStreakLabels = { fail1: t('gicaFail1'), fail2: t('gicaFail2'), fail3: t('gicaFail3') };
  const failStreakCounts = { fail1: 0, fail2: 0, fail3: 0 };
  vm.employees.filter(e => e.passed === false).forEach(e => {
    const s = _gicaFailStreak(e);
    if (s === 1) failStreakCounts.fail1++;
    else if (s === 2) failStreakCounts.fail2++;
    else if (s >= 3) failStreakCounts.fail3++;
  });
  const failStreakTotal = failStreakCounts.fail1 + failStreakCounts.fail2 + failStreakCounts.fail3;
  const donutFailStreakLg = (counts, tot) => {
    const CX = 145, CY = 102, R = 50, sw = 20;
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.2 : 0;
    let acc = 0;
    const segs = [], labelData = [];
    ['fail1', 'fail2', 'fail3'].forEach(k => {
      const v = counts[k] || 0;
      if (!tot || !v) return;
      const color = failStreakColors[k];
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx = CX + outerR * Math.cos(mid),        my = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + 12) * Math.cos(mid), ey = CY + (outerR + 12) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? 18 : -18);
      const pct = Math.round(v / tot * 100);
      labelData.push({ k, v, pct, color, mx, my, ex, ey, hx, hy: ey, isRight });
      acc += len;
    });

    // Small adjacent segments can place their label leader-lines too close together —
    // push labels apart vertically (per side) so the text never overlaps.
    const MIN_GAP = 24;
    [true, false].forEach(isRight => {
      const group = labelData.filter(d => d.isRight === isRight).sort((a, b) => a.hy - b.hy);
      for (let i = 1; i < group.length; i++) {
        const minHy = group[i - 1].hy + MIN_GAP;
        if (group[i].hy < minHy) group[i].hy = minHy;
      }
    });

    const lines = labelData.map(({ mx, my, ex, ey, hx, hy, isRight, color, k, v, pct }) => {
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      return `
        <line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${color}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${color}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${color}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="9.5" font-weight="600" fill="var(--text)">${failStreakLabels[k]}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + 9.5).toFixed(1)}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-muted)">(${pct}%)</text>`;
    });
    return `
      <svg viewBox="0 0 300 205" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + 8}" text-anchor="middle" font-size="22" font-weight="800" fill="${failStreakColors.fail3}">${tot}</text>
        <text x="${CX}" y="${CY + 20}" text-anchor="middle" font-size="8.5" fill="var(--text-muted)" letter-spacing="0.5">${escapeHtml(t('gicaFailCases'))}</text>
      </svg>`;
  };

  const failedBuBarChart = buCards => {
    if (!buCards.length) return `<div class="u-muted" style="font-size:0.75rem;margin-top:10px;">${t('gicaMatrixEmpty')}</div>`;
    const active = buCards.filter(c => !c.empty);
    const maxN = Math.max(...active.map(c => (c.failed || 0) + (c.awaiting || 0)), 1);
    const W = 220, CH = 70, PAD = 8, LH = 16, TPAD = 14;
    const n = buCards.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.62);
    const bo = (slot - bw) / 2;
    const bars = buCards.map((c, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      if (c.empty) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="6.5" fill="var(--text-muted)">${escapeHtml(t('gicaNoData'))}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>`;
      }
      const failed  = c.failed   || 0;
      const pending = c.awaiting || 0;
      const sum = failed + pending;
      const totalH = Math.max(Math.round(sum / maxN * CH), sum > 0 ? 3 : 0);
      const scale   = sum ? totalH / sum : 0;
      const failH    = failed  > 0 ? Math.max(Math.round(failed  * scale), 2) : 0;
      const pendingH = pending > 0 ? Math.max(Math.round(pending * scale), 2) : 0;
      const color    = GICA_BU_COLORS[c.bu] || '#6b7280';
      const topY     = TPAD + CH - totalH;
      const failY    = TPAD + CH - failH;
      const pendingY = failY - pendingH;
      const clipId = `gica-sched-bar-clip-${c.bu}`;
      return `<g>
        <title>${escapeHtml(c.bu)} — Fail: ${failed}, Pending: ${pending} (Total ${sum})</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${totalH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">
          ${failH    > 0 ? `<rect x="${x}" y="${failY}"    width="${bw}" height="${failH}"    fill="${color}" opacity="0.25"></rect>` : ''}
          ${pendingH > 0 ? `<rect x="${x}" y="${pendingY}" width="${bw}" height="${pendingH}" fill="var(--border-light)"></rect>` : ''}
        </g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="8" font-weight="700" fill="${color}">${sum}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" width="100%" style="display:block;margin-top:10px;overflow:visible;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  const gaugeStatCard = `
    <div class="stat-card">
      <div class="u-between">
        <div>
          <div class="stat-card__label">${t('gicaAssessmentRequired')}</div>
          <div class="stat-card__value"${vm.retestN > 0 ? ' style="color:#dc2626;"' : ''}>${vm.retestN}</div>
        </div>
        <div style="text-align:right;">

          <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
            <span class="u-muted">${t('pending')}</span><strong class="u-muted">${vm.pendingN}</strong>
          </div>
        </div>
      </div>
      ${failedBuBarChart(vm.buCards)}
    </div>`;

  const donutStatCard = `
    <div class="stat-card">
      <div class="stat-card__label">${t('gicaFailStatusStreak')}</div>
      ${donutFailStreakLg(failStreakCounts, failStreakTotal)}
    </div>`;

  // Failure Status card — per-BU 5-category breakdown (locked 2026-08-06):
  //   Not tested • Passed • Fail 1 • Fail 2 • Fail 3+
  // Front  = vertical stacked SVG bar chart (counts)  — mirrors dueWeekBarChart
  // Back   = horizontal ratio bars per BU              — mirrors combinedBuRows
  // Header keeps `failStreakTotal` (failing count) as the summary metric —
  // the card's headline story is "how many are failing"; the bar breaks it
  // down. Denominator for ratios is per-BU population INCLUDING untested.
  const failCatColors = {
    pass:      '#16a34a',
    fail1:     failStreakColors.fail1,
    fail2:     failStreakColors.fail2,
    fail3:     failStreakColors.fail3,
    notTested: 'var(--gica-untested-fill)',
  };
  const failCatLabels = {
    pass:      t('gicaPassed'),
    fail1:     failStreakLabels.fail1,
    fail2:     failStreakLabels.fail2,
    fail3:     failStreakLabels.fail3,
    notTested: t('gicaNotTested'),
  };
  const failStreakStackOrder = ['pass', 'fail1', 'fail2', 'fail3', 'notTested'];
  const failStreakBuBreakdown = BU_ORDER.map(bu => {
    const inBu = vm.employees.filter(e => e.bu === bu);
    if (!inBu.length) return { bu, empty: true, total: 0, notTested: 0, pass: 0, fail1: 0, fail2: 0, fail3: 0 };
    let notTested = 0, pass = 0, fail1 = 0, fail2 = 0, fail3 = 0;
    inBu.forEach(e => {
      if (e.passed === true) { pass++; return; }
      if (e.passed === false) {
        const s = _gicaFailStreak(e);
        if (s >= 3) fail3++;
        else if (s === 2) fail2++;
        else fail1++;
        return;
      }
      notTested++;
    });
    const total = notTested + pass + fail1 + fail2 + fail3;
    return { bu, empty: total === 0, total, notTested, pass, fail1, fail2, fail3 };
  });

  const failStreakTooltip = c =>
    `${c.bu} — ${failCatLabels.pass}: ${c.pass}, ${failCatLabels.fail1}: ${c.fail1}, ${failCatLabels.fail2}: ${c.fail2}, ${failCatLabels.fail3}: ${c.fail3}, ${failCatLabels.notTested}: ${c.notTested} (Total ${c.total})`;

  // Vertical stacked bar per BU — bottom→top: pass, fail1, fail2, fail3,
  // notTested. Matches the Performance-tab "Total employees" card convention
  // (positive at bottom, untested at top). Each visible segment claims min
  // 2px so tiny cohorts don't disappear from rounding (stackH may exceed
  // proportional totalH by 1-2px — acceptable, mirrors buBarChart).
  const failStreakBarChart = cards => {
    const totals = cards.map(c => c.total || 0);
    const maxN = Math.max(...totals, 1);
    const W = 300, CH = 70, PAD = 4, LH = 16, TPAD = 14;
    const n = cards.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.72);
    const bo = (slot - bw) / 2;
    const bars = cards.map((c, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      if (!c.total) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="5" fill="var(--text-muted)">${escapeHtml(t('gicaNoData'))}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="5.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>`;
      }
      const totalH = Math.max(Math.round(c.total / maxN * CH), 3);
      const scale  = totalH / c.total;
      const heights = {};
      failStreakStackOrder.forEach(k => { heights[k] = c[k] > 0 ? Math.max(Math.round(c[k] * scale), 2) : 0; });
      const stackH = failStreakStackOrder.reduce((s, k) => s + heights[k], 0);
      const topY = TPAD + CH - stackH;
      let cursorY = TPAD + CH;
      const segs = failStreakStackOrder.map(k => {
        const h = heights[k];
        if (!h) return '';
        cursorY -= h;
        return `<rect x="${x}" y="${cursorY}" width="${bw}" height="${h}" fill="${failCatColors[k]}"></rect>`;
      }).join('');
      const buColor = GICA_BU_COLORS[c.bu] || 'var(--text)';
      const clipId = `gica-failstreak-bar-clip-${c.bu}`;
      return `<g>
        <title>${escapeHtml(failStreakTooltip(c))}</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${stackH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">${segs}</g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="6" font-weight="700" fill="${buColor}">${c.total}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="5.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" preserveAspectRatio="xMidYMid meet"
      style="display:block;width:100%;height:100%;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  // Horizontal ratio bars per BU — same 5 segments as the vertical bar.
  // Largest-remainder rounding so segment widths sum to exactly 100%.
  const failStreakRatioBuRows = failStreakBuBreakdown.map(c => {
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    if (c.empty) {
      return `<div class="mini-bar__row mini-bar__row--lg">
        <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
        <span class="u-muted" style="font-size:0.68rem;">${escapeHtml(t('gicaNoData'))}</span>
      </div>`;
    }
    const raw = failStreakStackOrder.map(k => (c[k] / c.total) * 100);
    const floor = raw.map(v => Math.floor(v));
    const remainder = 100 - floor.reduce((s, v) => s + v, 0);
    const ordered = raw.map((v, i) => ({ i, r: v - floor[i] })).sort((a, b) => b.r - a.r);
    for (let j = 0; j < remainder && j < ordered.length; j++) floor[ordered[j].i]++;
    const segs = failStreakStackOrder.map((k, i) => floor[i] > 0
      ? `<div style="width:${floor[i]}%;background:${failCatColors[k]};height:100%;" title="${failCatLabels[k]}: ${c[k]} (${floor[i]}%)"></div>`
      : ''
    ).join('');
    return `<div class="mini-bar__row mini-bar__row--lg" title="${escapeHtml(failStreakTooltip(c))}">
      <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      <div class="mini-bar__track mini-bar__track--lg" style="display:flex;">${segs}</div>
      <span class="mini-bar__count mini-bar__count--lg">${c.total}</span>
    </div>`;
  }).join('');

  const failStreakLegend = `
    <div class="row1-legend" style="display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-start;">
      <span><span class="row1-legend__dot" style="background:${failCatColors.pass};"></span>${failCatLabels.pass}</span>
      <span><span class="row1-legend__dot" style="background:${failCatColors.fail1};"></span>${failCatLabels.fail1}</span>
      <span><span class="row1-legend__dot" style="background:${failCatColors.fail2};"></span>${failCatLabels.fail2}</span>
      <span><span class="row1-legend__dot" style="background:${failCatColors.fail3};"></span>${failCatLabels.fail3}</span>
      <span><span class="row1-legend__dot" style="background:${failCatColors.notTested};"></span>${failCatLabels.notTested}</span>
    </div>`;
  const failStreakHeader = `
    <div class="row1-head">
      <div class="stat-card__label">${t('gicaFailStatusStreak')}</div>
      <div class="stat-card__value" style="color:${failStreakTotal > 0 ? failCatColors.fail3 : 'var(--text)'};">${failStreakTotal}</div>
    </div>`;
  const failStreakStatCard = `
    <div class="stat-card row1-card flip-card-wrap" id="gica-failstreak-flip" style="perspective:1200px;cursor:pointer;">
      <div class="flip-card-inner" style="height:100%;">
        <div class="flip-card-front" style="display:flex;flex-direction:column;height:100%;">
          ${failStreakHeader}
          <div class="row1-body" style="flex:1;min-height:0;overflow:hidden;">
            ${failStreakBarChart(failStreakBuBreakdown)}
          </div>
          ${failStreakLegend}
        </div>
        <div class="flip-card-back" style="display:flex;flex-direction:column;background:var(--surface);overflow:hidden;">
          ${failStreakHeader}
          <div class="row1-body row1-body--divided" style="flex:1;">${failStreakRatioBuRows}</div>
          ${failStreakLegend}
        </div>
      </div>
    </div>`;

  const weekCards    = vm.weeklyBuCards.filter(c => !c.empty);
  const weekTotal    = weekCards.reduce((s, c) => s + c.total, 0);
  const weekAttended = weekCards.reduce((s, c) => s + c.attended, 0);
  const earlyTotal   = vm.weeklyBuCards.reduce((s, c) => s + (c.earlyN || 0), 0);
  const dueWeekRows = vm.weeklyBuCards.map(c => {
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    if (c.empty) {
      return `<div class="mini-bar__row mini-bar__row--lg">
        <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
        <span class="u-muted" style="font-size:0.68rem;">${escapeHtml(t('gicaNoData'))}</span>
      </div>`;
    }
    const passPct  = c.total ? Math.round(c.attendedPass  / c.total * 100) : 0;
    const failPct  = c.total ? Math.round(c.attendedFail  / c.total * 100) : 0;
    const awaitPct = Math.max(100 - passPct - failPct, 0);
    return `<div class="mini-bar__row mini-bar__row--lg" title="${escapeHtml(c.bu)} — Pass: ${c.attendedPass}, Fail: ${c.attendedFail}, Awaiting: ${c.overdue} (Total ${c.total})">
      <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      <div class="mini-bar__track mini-bar__track--lg" style="display:flex;">
        ${passPct  > 0 ? `<div style="width:${passPct}%;background:#16a34a;height:100%;"></div>`  : ''}
        ${failPct  > 0 ? `<div style="width:${failPct}%;background:#dc2626;height:100%;"></div>`  : ''}
        ${awaitPct > 0 ? `<div style="width:${awaitPct}%;background:var(--border-light);height:100%;"></div>` : ''}
      </div>
      <span class="mini-bar__count mini-bar__count--lg">${c.attended}/${c.total}</span>
    </div>`;
  }).join('');
  const earlyBuRows = vm.weeklyBuCards.map(c => {
    if (!c.earlyN) return '';
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    return `<div class="u-between" style="font-size:0.74rem;line-height:1.6;">
      <span style="color:${buColor};font-weight:600;">${escapeHtml(c.bu)}</span>
      <strong>${c.earlyN}</strong>
    </div>`;
  }).filter(Boolean).join('');

  // Combined gauge (Due + Early): green=passed, light green=failed, gray=not yet attended
  const combinedBuRows = vm.weeklyBuCards.map(c => {
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    if (c.empty && !c.earlyN) {
      return `<div class="mini-bar__row mini-bar__row--lg">
        <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
        <span class="u-muted" style="font-size:0.68rem;">${escapeHtml(t('gicaNoData'))}</span>
      </div>`;
    }
    const totalPass  = (c.attendedPass || 0) + (c.earlyPass || 0);
    const totalFail  = (c.attendedFail || 0) + (c.earlyFail || 0);
    const totalDone  = (c.attended || 0) + (c.earlyN || 0);
    const notYet     = c.overdue || 0;
    const grandTotal = totalDone + notYet;
    const passPct  = grandTotal ? Math.round(totalPass / grandTotal * 100) : 0;
    const failPct  = grandTotal ? Math.round(totalFail / grandTotal * 100) : 0;
    const awaitPct = Math.max(100 - passPct - failPct, 0);
    return `<div class="mini-bar__row mini-bar__row--lg" title="${escapeHtml(c.bu)} — Pass: ${totalPass}, Fail: ${totalFail}, Awaiting: ${notYet} (Total ${grandTotal})">
      <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      <div class="mini-bar__track mini-bar__track--lg" style="display:flex;">
        ${passPct  > 0 ? `<div style="width:${passPct}%;background:#16a34a;height:100%;"></div>`  : ''}
        ${failPct  > 0 ? `<div style="width:${failPct}%;background:#86efac;height:100%;"></div>`  : ''}
        ${awaitPct > 0 ? `<div style="width:${awaitPct}%;background:var(--border-light);height:100%;"></div>` : ''}
      </div>
      <span class="mini-bar__count mini-bar__count--lg">${totalDone}/${grandTotal}</span>
    </div>`;
  }).join('');

  const dueWeekHeader = `
      <div class="row1-head">
        <div style="display:flex;gap:0;">
          <div style="flex:1;min-width:0;padding-right:12px;">
            <div class="stat-card__label">${t('gicaDueThisWeek')}</div>
            <div class="stat-card__value">${weekAttended}/${weekTotal}</div>
          </div>
          <div style="width:1px;background:var(--border-light);flex-shrink:0;"></div>
          <div style="flex:1;min-width:0;padding-left:12px;">
            <div class="stat-card__label">${t('gicaEarlyAssessment')}</div>
            <div class="stat-card__value" style="color:${earlyTotal > 0 ? '#2563eb' : 'var(--text)'};">${earlyTotal}</div>
          </div>
        </div>
      </div>`;

  // Vertical bar per BU — total height = grandTotal, dark segment (bottom) = attended
  // (attendedPass + attendedFail + earlyN), light segment (top) = overdue. Mirrors the
  // Performance-tab "Total employees" SVG bar style (see buBarChart at ~line 6488).
  const dueWeekBarChart = cards => {
    const totals = cards.map(c => (c.attended || 0) + (c.earlyN || 0) + (c.overdue || 0));
    const maxN = Math.max(...totals, 1);
    // Wider viewBox (300 vs 220) → aspect 3:1 which is closer to the actual body
    // aspect on wide cards, so preserveAspectRatio="meet" leaves less empty side
    // space and the chart appears to fill the card. Smaller font-sizes keep text
    // readable — not oversized — after the SVG scales up on large screens.
    const W = 300, CH = 70, PAD = 4, LH = 16, TPAD = 14;
    const n = cards.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.72);
    const bo = (slot - bw) / 2;
    const bars = cards.map((c, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      const total = (c.attended || 0) + (c.earlyN || 0) + (c.overdue || 0);
      if (!total) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="5" fill="var(--text-muted)">${escapeHtml(t('gicaNoData'))}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="5.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>`;
      }
      const totalH = Math.max(Math.round(total / maxN * CH), 3);
      const scale  = totalH / total;
      const done   = (c.attended || 0) + (c.earlyN || 0);
      const doneH  = done > 0 ? Math.max(Math.round(done * scale), 2) : 0;
      const waitH  = Math.max(totalH - doneH, 0);
      const color  = GICA_BU_COLORS[c.bu] || '#6b7280';
      const topY   = TPAD + CH - totalH;
      const doneY  = TPAD + CH - doneH;
      const waitY  = doneY - waitH;
      const clipId = `gica-dueweek-bar-clip-${c.bu}`;
      return `<g>
        <title>${escapeHtml(c.bu)} — Attended: ${done}, Awaiting: ${c.overdue || 0} (Total ${total})</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${totalH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">
          ${waitH > 0 ? `<rect x="${x}" y="${waitY}" width="${bw}" height="${waitH}" fill="${color}" opacity="0.25"></rect>` : ''}
          ${doneH > 0 ? `<rect x="${x}" y="${doneY}" width="${bw}" height="${doneH}" fill="${color}"></rect>` : ''}
        </g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="6" font-weight="700" fill="${color}">${done}/${total}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="5.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>
      </g>`;
    }).join('');
    // SVG fills the flex body via width/height 100% + preserveAspectRatio meet.
    // "meet" scales content to fit the box while preserving aspect ratio, centered —
    // so on wide cards content grows to fill nicely, on narrow cards it shrinks;
    // it never overflows the box, so nothing bleeds into the header.
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" preserveAspectRatio="xMidYMid meet"
      style="display:block;width:100%;height:100%;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  const dueWeekCard = `
    <div class="stat-card row1-card flip-card-wrap" id="gica-dueweek-flip" style="perspective:1200px;cursor:pointer;">
      <div class="flip-card-inner" style="height:100%;">
        <div class="flip-card-front" style="display:flex;flex-direction:column;height:100%;">
          ${dueWeekHeader}
          <div class="row1-body" style="flex:1;min-height:0;overflow:hidden;">
            ${dueWeekBarChart(vm.weeklyBuCards)}
          </div>
        </div>
        <div class="flip-card-back" style="display:flex;flex-direction:column;background:var(--surface);overflow:hidden;">
          ${dueWeekHeader}
          <div class="row1-body row1-body--divided" style="flex:1;">${combinedBuRows || `<span class="u-muted" style="font-size:0.74rem;">${t('gicaMatrixEmpty')}</span>`}</div>
        </div>
      </div>
    </div>`;

  // On-time Rate = attended this week / required this week — pass/fail doesn't matter
  // here, only whether they showed up by their scheduled date (see weeklyBuCards above).
  const onTimePctColor = pct => pct == null ? 'var(--text)' : pct >= 80 ? '#3e9f61' : pct >= 60 ? '#f1ba5a' : '#d54949';
  const overallOnTimePct = weekTotal ? Math.round(weekAttended / weekTotal * 100) : null;
  const onTimeBuRows = vm.weeklyBuCards.map(c => {
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    if (c.empty) {
      return `<div class="mini-bar__row mini-bar__row--lg">
        <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
        <span class="u-muted" style="font-size:0.68rem;">${escapeHtml(t('gicaNoData'))}</span>
      </div>`;
    }
    const pct = c.total ? Math.round(c.attended / c.total * 100) : 0;
    const fillColor = onTimePctColor(pct);
    return `<div class="mini-bar__row mini-bar__row--lg" title="${escapeHtml(c.bu)} — Attended: ${c.attended}/${c.total} (${pct}%)">
      <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      <div class="mini-bar__track mini-bar__track--lg">
        <div class="mini-bar__fill" style="width:${pct}%;background:${fillColor};"></div>
      </div>
      <span class="mini-bar__count mini-bar__count--lg" style="color:${fillColor};font-weight:700;">${pct}%</span>
    </div>`;
  }).join('');
  const onTimeRateCard = `
    <div class="stat-card row1-card">
      <div class="row1-head">
        <div class="stat-card__label">${t('gicaOverallOnTime')}</div>
        <div class="stat-card__value" style="color:${onTimePctColor(overallOnTimePct)};">${overallOnTimePct != null ? overallOnTimePct + '%' : '—'}</div>
      </div>
      <div class="row1-body row1-body--divided">${onTimeBuRows}</div>
    </div>`;

  const row1 = `
    <div class="stat-grid stat-grid--3">
      ${dueWeekCard}
      ${onTimeRateCard}
      ${failStreakStatCard}
    </div>`;

  const calendarCard = `
    <div class="card card--section">
      <div class="card-head u-between">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">${t('gicaSchedCalendar')}</h3>
      </div>
      <div id="gica-cal-summary"></div>
    </div>`;

  const buCohortModal = `
    <div id="gica-buCohort-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" data-buclose="1"></div>
      <div class="gica-modal__panel">
        <div class="gica-modal__head">
          <h4 id="gica-buCohort-title" style="margin:0;font-size:1rem;"></h4>
          <div style="display:flex;gap:8px;align-items:center;">
            <button onclick="_gicaBuCohortPrint();" style="font-size:0.72rem;padding:4px 12px;background:#2563eb;color:#fff;border:none;border-radius:4px;cursor:pointer;">${escapeHtml(t('gicaPrint'))}</button>
            <button class="gica-modal__close" data-buclose="1" aria-label="${escapeHtml(t('gicaClose'))}">✕</button>
          </div>
        </div>
        <div id="gica-buCohort-body" class="gica-modal__body"></div>
      </div>
    </div>`;

  return `${row1}${buSection}${calendarCard}${timelineCard}${upcomingCard}${buCohortModal}`;
}

function _mountGicaSchedule(html, vm) {
  const container = $('gica-sched-summary');
  if (!container) return;
  if (_gicaSchedTimelineChart) { try { _gicaSchedTimelineChart.destroy(); } catch (_) {} _gicaSchedTimelineChart = null; }
  ['gica-scheduleChart', 'gica-scheduleChartRight'].forEach(id => {
    if (_gicaCharts[id]) { try { _gicaCharts[id].destroy(); } catch (_) {} _gicaCharts[id] = null; }
  });
  container.innerHTML = html;

  // Due-week card: click anywhere on the card to flip between horizontal mini-bars
  // (front) and the vertical SVG bar chart (back). No button — the card itself is
  // the target.
  const dueFlip = container.querySelector('#gica-dueweek-flip');
  if (dueFlip) {
    dueFlip.addEventListener('click', () => {
      dueFlip.classList.toggle('is-flipped');
    });
  }

  // Failure Status card — click to flip between vertical stacked bar (front)
  // and horizontal 5-segment ratio bars (back). Same pattern as dueweek-flip.
  const failStreakFlip = container.querySelector('#gica-failstreak-flip');
  if (failStreakFlip) {
    failStreakFlip.addEventListener('click', () => {
      failStreakFlip.classList.toggle('is-flipped');
    });
  }

  container.querySelectorAll('.gica-bu-cohort-card[data-bu]').forEach(card => {
    card.addEventListener('click', () => {
      const c = vm.weeklyBuCards.find(x => x.bu === card.dataset.bu);
      if (c) _gicaShowBuCohortModal(c.bu, c.employees);
    });
  });
  const cohortModal = $('gica-buCohort-modal');
  if (cohortModal) {
    // Closing the shared cohort modal also resets the Upcoming Assessments drill
    // state so a stale _gicaSchedDate doesn't re-open the modal on the next
    // renderGicaScheduleChart() call (e.g., after switching all/Retest/Review).
    const closeCohortModal = () => {
      cohortModal.classList.add('hidden');
      _gicaSchedDate = '';
      _gicaSchedBu   = '';
    };
    cohortModal.querySelectorAll('[data-buclose="1"]').forEach(el => el.addEventListener('click', closeCohortModal));
    if (window._gicaCohortEscHandler) document.removeEventListener('keydown', window._gicaCohortEscHandler);
    window._gicaCohortEscHandler = e => { if (e.key === 'Escape') closeCohortModal(); };
    document.addEventListener('keydown', window._gicaCohortEscHandler);
  }

  const toggle = $('gica-schedTimelineToggle');
  if (toggle) {
    toggle.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _gicaSchedTimelineMode = btn.dataset.mode;
        renderGicaSchedule();
      });
    });
  }

  const _wireSchedFilter = (panelId, dataKey, targetSet) => {
    const panel = container.querySelector(`#${panelId}`);
    if (!panel) return;
    panel.addEventListener('click', e => {
      const btn = e.target.closest(`.quad-btn[data-${dataKey}]`);
      if (!btn) return;
      const val = btn.dataset[dataKey];
      if (val === 'all') targetSet.clear();
      else targetSet.has(val) ? targetSet.delete(val) : targetSet.add(val);
      renderGicaSchedule();
    });
  };
  const _toggleSchedPanel = (panelId, e) => {
    e.stopPropagation();
    const panel = container.querySelector(`#${panelId}`);
    if (!panel) return;
    const wasHidden = panel.hidden;
    container.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
    panel.hidden = !wasHidden;
  };
  container.querySelector('#gica-sched-bu-trigger')  ?.addEventListener('click', e => _toggleSchedPanel('gica-sched-bu-panel', e));
  container.querySelector('#gica-sched-dept-trigger')?.addEventListener('click', e => _toggleSchedPanel('gica-sched-dept-panel', e));
  if (container._onDocClick) document.removeEventListener('click', container._onDocClick);
  container._onDocClick = () => container.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
  document.addEventListener('click', container._onDocClick);
  _wireSchedFilter('gica-sched-bu-panel',   'bu',   _gicaSchedBuFilter);
  _wireSchedFilter('gica-sched-dept-panel', 'dept', _gicaSchedDeptFilter);

  const cvs = $('gica-schedTimelineChart');
  if (cvs && typeof Chart !== 'undefined') {
    // Captured here because inside the tooltip callback `t` is shadowed by the bucket object.
    const _clickHint = t('gicaClickBuCohort');
    const _dlOntime = (showWhen) => ({
      anchor: 'end', align: 'top',
      font: { size: 10, weight: '600' }, color: '#15803d',
      display: ctx => showWhen(vm.timeline[ctx.dataIndex]),
      formatter: (v, ctx) => { const t = vm.timeline[ctx.dataIndex]; return t.onTimePassed + t.onTimeFailed; },
    });
    const _currentBucketHighlight = {
      id: 'gicaCurrentBucketHighlight',
      beforeDatasetsDraw(chart) {
        const idx = vm.currentIdx;
        if (idx == null || idx < 0) return;
        const { ctx, chartArea, scales: { x } } = chart;
        const center = x.getPixelForTick(idx);
        const band   = x.width / x.ticks.length;
        ctx.save();
        ctx.fillStyle = 'rgba(37,99,235,0.10)';
        ctx.fillRect(center - band / 2, chartArea.top, band, chartArea.bottom - chartArea.top);
        ctx.restore();
      },
    };
    _gicaSchedTimelineChart = new Chart(cvs, {
      type: 'bar',
      plugins: [_currentBucketHighlight, ...(typeof ChartDataLabels !== 'undefined' ? [ChartDataLabels] : [])],
      data: {
        labels: vm.timeline.map(t => t.label),
        datasets: [
          {
            label: t('gicaLegendTotal'), stack: 'total',
            data: vm.timeline.map(t => t.totalUnique),
            backgroundColor: '#64748b', borderRadius: 4,
            datalabels: { anchor: 'end', align: 'top', font: { size: 10, weight: '600' }, color: '#475569', formatter: v => v > 0 ? v : null, display: ctx => ctx.dataset.data[ctx.dataIndex] > 0 },
          },
          {
            label: t('gicaLegendOnTimePass'), stack: 'ontime',
            data: vm.timeline.map(t => t.onTimePassed),
            backgroundColor: '#16a34a', borderRadius: 4,
            datalabels: _dlOntime(t => t.onTimeFailed === 0 && t.onTimePassed > 0),
          },
          {
            label: t('gicaLegendOnTimeFail'), stack: 'ontime',
            data: vm.timeline.map(t => t.onTimeFailed),
            backgroundColor: '#86efac', borderRadius: 4,
            datalabels: _dlOntime(t => t.onTimeFailed > 0),
          },
          {
            label: t('gicaLegendOverdue'), stack: 'overdue',
            data: vm.timeline.map(t => t.overdue),
            backgroundColor: '#dc2626', borderRadius: 4,
            datalabels: { anchor: 'end', align: 'top', font: { size: 10, weight: '600' }, color: '#b91c1c', formatter: v => v > 0 ? v : null, display: ctx => ctx.dataset.data[ctx.dataIndex] > 0 },
          },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        onHover: (evt, els) => { const c = evt?.native?.target; if (c) c.style.cursor = els.length ? 'pointer' : 'default'; },
        onClick: (evt, _els, chart) => {
          const pts = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
          if (!pts.length) return;
          const { datasetIndex, index } = pts[0];
          _gicaShowSchedTimelineDrill(vm.timeline[index], datasetIndex);
        },
        plugins: {
          legend: { display: false },
          datalabels: { display: false },
          tooltip: {
            callbacks: {
              title: ctx => vm.timeline[ctx[0].dataIndex].label,
              afterBody: ctx => {
                const t = vm.timeline[ctx[0].dataIndex];
                return [`รวมทั้งหมด: ${t.totalUnique} คน`, _clickHint];
              },
            },
          },
        },
        scales: {
          x: { stacked: true, ticks: { font: { size: 10 }, maxRotation: 0 } },
          y: { stacked: true, beginAtZero: true, ticks: { precision: 0 }, grace: '25%' },
        },
      },
    });
  }

  const schedTg = $('gica-schedToggle');
  if (schedTg) schedTg.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _gicaSchedMode = btn.dataset.mode;
      schedTg.querySelectorAll('.toggle-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === _gicaSchedMode));
      _gicaSchedDate = '';
      _gicaSchedBu   = '';
      renderGicaScheduleChart();
    });
  });
  renderGicaScheduleChart();
}

function renderGicaSchedule() {
  const today = _gicaToday();
  const vm = _computeGicaSchedule(_gicaData.employees || [], today, _gicaSchedTimelineMode, _gicaSchedMode, _gicaSchedBuFilter, _gicaSchedDeptFilter);
  _mountGicaSchedule(_gicaScheduleHtml(vm), vm);
  renderGicaCalendar();
}

// ── Assessment Schedule (Calendar View) — month grid keyed by scheduledNext ───
const GICA_CAL_TYPE = {
  Missed:  { color: '#dc2626', bg: 'rgba(220,38,38,0.14)', label: 'Missed assessment' },
  Initial: { color: '#2563eb', bg: 'rgba(37,99,235,0.14)', label: 'Initial assessment' },
  Retest:  { color: '#fdf400', bg: 'rgba(180,83,9,0.14)',  label: 'Re-assessment' },
  Review:  { color: '#16a34a', bg: 'rgba(22,163,74,0.14)', label: 'Review assessment' },
};
function _gicaCalendarHtml(vm) {
  // Resolve calendar type labels from i18n at render time so language changes take effect.
  const calTypeLabel = key => {
    if (key === 'Missed')  return t('gicaCalTypeMissed');
    if (key === 'Initial') return t('gicaCalTypeInitial');
    if (key === 'Retest')  return t('gicaCalTypeRetest');
    if (key === 'Review')  return t('gicaCalTypeReview');
    return key;
  };
  const buChips = `
    <button class="quad-btn${vm.buFilter.size === 0 ? ' quad-btn--active' : ''}" data-bu="all" type="button">${t('gicaAllBu')}</button>
    ${vm.availBus.map(bu => `<button class="quad-btn${vm.buFilter.has(bu) ? ' quad-btn--active' : ''}" data-bu="${escapeHtml(bu)}" type="button">${escapeHtml(bu)}</button>`).join('')}`;
  // NB: the outer `t()` (i18n) is shadowed by the `t` map-parameter (calendar-type key)
  // inside the map body — calTypeLabel above closes over the outer `t`, so use it here.
  const typeRows = Object.keys(GICA_CAL_TYPE).map(t => {
    const info = GICA_CAL_TYPE[t];
    const checked = vm.typeFilter.size === 0 || vm.typeFilter.has(t);
    return `
      <label class="gica-cal-type-row">
        <input type="checkbox" data-type="${t}" ${checked ? 'checked' : ''}>
        <span class="gica-cal-type-dot" style="background:${info.color};"></span>${escapeHtml(calTypeLabel(t))}
      </label>`;
  }).join('');

  const weekdayNames = [t('gicaWeekMon'), t('gicaWeekTue'), t('gicaWeekWed'), t('gicaWeekThu'), t('gicaWeekFri'), t('gicaWeekSat'), t('gicaWeekSun')];
  const cellHtml = day => {
    const evtHtml = day.buGroups.map(g => {
      const color = GICA_BU_COLORS[g.bu] || '#6b7280';
      // Same shadowing avoidance as above — `t` here is the calendar-type key, use `tr` for i18n.
      const typeDots = g.types.map(t => `<span class="gica-cal-evt-type-dot" style="background:${GICA_CAL_TYPE[t].color};" title="${escapeHtml(calTypeLabel(t))}"></span>`).join('');
      return `<div class="gica-cal-evt" data-day-key="${day.key}" data-bu="${escapeHtml(g.bu)}" style="background:${hexToRgba(color, 0.16)};color:${color};">${escapeHtml(g.bu)} (${g.count})<span class="gica-cal-evt-types">${typeDots}</span>${g.overdue ? '<span class="gica-cal-evt__dot"></span>' : ''}</div>`;
    }).join('');
    const cls = ['gica-cal-cell', !day.inMonth ? 'gica-cal-cell--out' : '', day.isPast ? 'gica-cal-cell--past' : '', day.isToday ? 'gica-cal-cell--today' : ''].filter(Boolean).join(' ');
    return `<div class="${cls}"><div class="gica-cal-daynum">${day.dayNum}</div><div class="gica-cal-evt-list">${evtHtml}</div></div>`;
  };

  const sidebarHtml = vm.sidebarOpen ? `
      <div class="gica-cal-sidebar">
        <div class="gica-cal-sidebar-label">${t('gicaColBu')}</div>
        <div id="gica-cal-bu-chips" class="gica-cal-bu-grid">${buChips}</div>
        <div class="gica-cal-sidebar-label" style="margin-top:12px;">${t('gicaCalType')}</div>
        <div id="gica-cal-type-chips" class="gica-cal-type-list">${typeRows}</div>
      </div>` : '';

  return `
    <div class="gica-cal-toolbar">
      <button class="gica-cal-nav-btn" id="gica-cal-today" type="button">${t('gicaCalToday')}</button>
      <button class="gica-cal-nav-btn" id="gica-cal-prev" type="button">‹</button>
      <span class="gica-cal-month-label">${escapeHtml(vm.monthLabel)}</span>
      <button class="gica-cal-nav-btn" id="gica-cal-next" type="button">›</button>
      <button class="gica-cal-nav-btn${vm.sidebarOpen ? ' gica-cal-nav-btn--active' : ''}" id="gica-cal-filter-toggle" type="button" title="${escapeHtml(t('gicaCalFilters'))}" style="margin-left:auto;">
        <i class="ti ti-filter" aria-hidden="true"></i> ${t('gicaCalFilters')}
      </button>
    </div>
    <div class="gica-cal-body">
      ${sidebarHtml}
      <div class="gica-cal-main">
        <div class="gica-cal-weekdays"><div class="gica-cal-weeknum-head"></div>${weekdayNames.map(n => `<div class="gica-cal-weekday">${escapeHtml(n)}</div>`).join('')}</div>
        <div class="gica-cal-grid" id="gica-cal-grid">${vm.weeks.map(week => `<div class="gica-cal-weeknum"><span>${escapeHtml(t('gicaCalWeekPrefix'))} ${week.weekNumber}</span></div>${week.days.map(cellHtml).join('')}`).join('')}</div>
      </div>
    </div>
  `;
}

// Calendar cell click → delegate to the shared cohort/drill modal
// (_gicaShowEmpListModal). Passes ALL employees scheduled on that day (all BUs)
// with the clicked BU preselected — so users can switch BU inside the modal.
function _gicaCalShowDayDrill(dayKey, initialBu, dayEvents) {
  const seen = new Set();
  const rows = [];
  (dayEvents || []).forEach(entry => {
    const e = entry.emp;
    if (!e) return;
    const key = `${e.bu || ''}|${e.empid || e.name || ''}`;
    if (seen.has(key)) return;
    seen.add(key);
    rows.push(e);
  });
  if (!rows.length) return;
  _gicaShowEmpListModal(
    _gicaFmtDate(dayKey),
    {
      printTitle: t('gicaEmpListForAssessmentSchedule'),
      printSub:   `${t('gicaAssessmentDateLbl')}: ${_gicaFmtDate(dayKey)}`,
    },
    rows,
    '',
    initialBu || '',
  );
}

function _mountGicaCalendar(html, vm) {
  const container = $('gica-cal-summary');
  if (!container) return;
  container.innerHTML = html;

  $('gica-cal-prev') ?.addEventListener('click', () => { _gicaCalMonthOffset--; renderGicaCalendar(); });
  $('gica-cal-next') ?.addEventListener('click', () => { _gicaCalMonthOffset++; renderGicaCalendar(); });
  $('gica-cal-today')?.addEventListener('click', () => { _gicaCalMonthOffset = 0; renderGicaCalendar(); });
  $('gica-cal-filter-toggle')?.addEventListener('click', () => { _gicaCalSidebarOpen = !_gicaCalSidebarOpen; renderGicaCalendar(); });

  $('gica-cal-bu-chips')?.addEventListener('click', e => {
    const btn = e.target.closest('.quad-btn[data-bu]');
    if (!btn) return;
    const val = btn.dataset.bu;
    if (val === 'all') _gicaCalBuFilter.clear();
    else _gicaCalBuFilter.has(val) ? _gicaCalBuFilter.delete(val) : _gicaCalBuFilter.add(val);
    renderGicaCalendar();
  });
  $('gica-cal-type-chips')?.addEventListener('change', e => {
    const input = e.target.closest('input[data-type]');
    if (!input) return;
    const allTypes = Object.keys(GICA_CAL_TYPE);
    if (_gicaCalTypeFilter.size === 0) allTypes.forEach(t => { if (t !== input.dataset.type) _gicaCalTypeFilter.add(t); });
    else input.checked ? _gicaCalTypeFilter.add(input.dataset.type) : _gicaCalTypeFilter.delete(input.dataset.type);
    if (_gicaCalTypeFilter.size === allTypes.length) _gicaCalTypeFilter.clear();
    renderGicaCalendar();
  });

  const grid = $('gica-cal-grid');
  const dayByKey = {};
  vm.weeks.forEach(week => week.days.forEach(d => { dayByKey[d.key] = d; }));
  grid?.addEventListener('click', e => {
    const chip = e.target.closest('.gica-cal-evt[data-bu]');
    if (!chip) return;
    const day = dayByKey[chip.dataset.dayKey];
    _gicaCalShowDayDrill(chip.dataset.dayKey, chip.dataset.bu, day ? day.events : []);
  });
}

function renderGicaCalendar() {
  const monthDate = new Date();
  monthDate.setDate(1);
  monthDate.setMonth(monthDate.getMonth() + _gicaCalMonthOffset);
  const vm = _computeGicaCalendar(_gicaData.employees || [], monthDate, _gicaCalBuFilter, _gicaCalTypeFilter, _gicaCalSidebarOpen);
  _mountGicaCalendar(_gicaCalendarHtml(vm), vm);
}

// ── Chart: upcoming test schedule (clickable) ─────────────────────────────────
function _gicaSchedRows() {
  let rows = (_gicaData.employees || []).filter(e => e.nextDate);
  if (_gicaSchedMode !== 'all') rows = rows.filter(e => e.nextType === _gicaSchedMode);
  return rows;
}
const GICA_BU_COLORS = Object.fromEntries(
  BU_ORDER.map(bu => [bu, getComputedStyle(document.documentElement).getPropertyValue(`--bu-${bu}`).trim() || '#6b7280'])
);
function renderGicaScheduleChart() {
  const emps    = _gicaData.employees || [];
  const retestEmps = emps.filter(e => e.passed === false && e.nextDate);
  const reviewEmps = emps.filter(e => e.passed === true  && e.nextDate);
  const retestN = retestEmps.length;
  const reviewN = reviewEmps.length;
  const sumEl = $('gica-schedSummary');
  if (sumEl) {
    // Both cards are clickable — open the shared cohort modal with the matching cohort.
    sumEl.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div id="gica-sched-sum-retest" role="button" tabindex="0"
             style="background:var(--surface2);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:background 0.15s;"
             onmouseover="this.style.background='var(--border-light)';"
             onmouseout="this.style.background='var(--surface2)';">
          <span style="font-size:1.5rem;font-weight:700;color:#b91c1c;">${retestN}</span>
          <span style="font-size:0.8rem;color:var(--text-muted);">Failed – Reassessment Required</span>
        </div>
        <div id="gica-sched-sum-review" role="button" tabindex="0"
             style="background:var(--surface2);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:background 0.15s;"
             onmouseover="this.style.background='var(--border-light)';"
             onmouseout="this.style.background='var(--surface2)';">
          <span style="font-size:1.5rem;font-weight:700;color:#2563eb;">${reviewN}</span>
          <span style="font-size:0.8rem;color:var(--text-muted);">Passed – Awaiting Next Assessment</span>
        </div>
      </div>`;
    const openRetest = () => _gicaShowEmpListModal(
      'Failed – Reassessment Required',
      { printTitle: t('gicaEmpListForAssessment'), printSub: 'Failed – Reassessment Required' },
      retestEmps,
    );
    const openReview = () => _gicaShowEmpListModal(
      'Passed – Awaiting Next Assessment',
      { printTitle: t('gicaEmpListForAssessment'), printSub: 'Passed – Awaiting Next Assessment' },
      reviewEmps,
    );
    const wireCard = (el, open) => {
      if (!el) return;
      el.addEventListener('click', open);
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    };
    wireCard($('gica-sched-sum-retest'), openRetest);
    wireCard($('gica-sched-sum-review'), openReview);
  }
  const all = emps.filter(e => e.nextDate);

  const id  = 'gica-scheduleChart';
  const idR = 'gica-scheduleChartRight';
  if (_gicaCharts[id])  { _gicaCharts[id].destroy();  _gicaCharts[id]  = null; }
  if (_gicaCharts[idR]) { _gicaCharts[idR].destroy(); _gicaCharts[idR] = null; }

  const wrapEl    = $('gica-schedChartWrap');
  const rightWrap = $('gica-schedRightWrap');
  const leftLabel = $('gica-schedLabelLeft');
  const legendEl  = $('gica-schedBuLegend');

  if (!$(id) || typeof Chart === 'undefined') return;

  const _buildPairs = (src) => {
    const dates = [...new Set(src.map(e => e.nextDate))].sort();
    const bus   = sortBus([...new Set(src.map(e => e.bu).filter(Boolean))]);
    const pairs = [];
    dates.forEach(d => bus.forEach(bu => {
      const n = src.filter(e => e.nextDate === d && e.bu === bu).length;
      if (n > 0) pairs.push({ date: d, bu, count: n });
    }));
    return pairs;
  };

  // Retest bars use a lighter tint of the BU colour (failed cohort — softer emphasis);
  // Review bars use the solid BU colour (passed cohort — normal emphasis).
  const _lightBu = bu => {
    const hex = (GICA_BU_COLORS[bu] || '#6b7280').replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r},${g},${b},0.4)`;
  };
  const _barColor = (bu, variant) => variant === 'retest'
    ? _lightBu(bu)
    : (GICA_BU_COLORS[bu] || '#6b7280');

  const _makeChart = (canvasId, pairs, onPick, variant) => {
    const cvs = $(canvasId);
    if (!cvs) return null;
    return new Chart(cvs, {
      type: 'bar',
      plugins: typeof ChartDataLabels !== 'undefined' ? [ChartDataLabels] : [],
      data: {
        labels: pairs.map(p => [_gicaFmtDate(p.date), p.bu]),
        datasets: [{ data: pairs.map(p => p.count), backgroundColor: pairs.map(p => _barColor(p.bu, variant)), borderRadius: 3 }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        onClick: (evt, els) => { if (!els.length) return; onPick(pairs[els[0].index]); },
        plugins: {
          legend: { display: false },
          datalabels: {
            color: () => document.documentElement.dataset.theme === 'dark' ? '#ffffff' : '#000000',
            font: { size: 10, weight: '700' },
            anchor: 'end',
            align: 'end',
            formatter: v => v > 0 ? v : null,
          },
        },
        scales: {
          x: { ticks: { font: { size: 10 }, maxRotation: 0, minRotation: 0 } },
          y: { beginAtZero: true, grace: '10%', ticks: { precision: 0 } },
        },
      },
    });
  };

  const onPick = p => { _gicaSchedDate = p.date; _gicaSchedBu = p.bu; renderGicaScheduleDrill(); };
  const rows   = _gicaSchedRows();

  // Merged chart for 'all' mode — same x-axis (date · BU), grouped bars:
  // light-tint = failed retest, solid = passed review. Right canvas stays hidden.
  const _makeMergedChart = (canvasId, retestPairs, reviewPairs) => {
    const cvs = $(canvasId);
    if (!cvs) return null;
    const buRank = Object.fromEntries(BU_ORDER.map((bu, i) => [bu, i]));
    const keySet = new Set();
    retestPairs.forEach(p => keySet.add(`${p.date}|${p.bu}`));
    reviewPairs.forEach(p => keySet.add(`${p.date}|${p.bu}`));
    const keys = [...keySet].sort((a, b) => {
      const [da, ba] = a.split('|');
      const [db, bb] = b.split('|');
      if (da !== db) return da < db ? -1 : 1;
      return (buRank[ba] ?? 99) - (buRank[bb] ?? 99);
    });
    const retestMap = new Map(retestPairs.map(p => [`${p.date}|${p.bu}`, p.count]));
    const reviewMap = new Map(reviewPairs.map(p => [`${p.date}|${p.bu}`, p.count]));
    const labels     = keys.map(k => { const [d, bu] = k.split('|'); return [_gicaFmtDate(d), bu]; });
    const retestData = keys.map(k => retestMap.get(k) || 0);
    const reviewData = keys.map(k => reviewMap.get(k) || 0);
    const bus        = keys.map(k => k.split('|')[1]);
    return new Chart(cvs, {
      type: 'bar',
      plugins: typeof ChartDataLabels !== 'undefined' ? [ChartDataLabels] : [],
      data: {
        labels,
        datasets: [
          {
            label: 'Failed – Reassessment',
            data: retestData,
            backgroundColor: bus.map(bu => _barColor(bu, 'retest')),
            borderRadius: 3,
          },
          {
            label: 'Passed – Awaiting',
            data: reviewData,
            backgroundColor: bus.map(bu => _barColor(bu, 'review')),
            borderRadius: 3,
          },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        onClick: (evt, els) => {
          if (!els.length) return;
          const [d, bu] = keys[els[0].index].split('|');
          onPick({ date: d, bu });
        },
        plugins: {
          legend: { display: false },
          datalabels: {
            color: () => document.documentElement.dataset.theme === 'dark' ? '#ffffff' : '#000000',
            font: { size: 10, weight: '700' },
            anchor: 'end',
            align: 'end',
            formatter: v => v > 0 ? v : null,
          },
        },
        scales: {
          x: { ticks: { font: { size: 10 }, maxRotation: 0, minRotation: 0 } },
          y: { beginAtZero: true, grace: '10%', ticks: { precision: 0 } },
        },
      },
    });
  };

  if (_gicaSchedMode === 'all') {
    if (wrapEl)    wrapEl.style.gridTemplateColumns = '1fr';
    if (rightWrap) rightWrap.style.display = 'none';
    if (leftLabel) leftLabel.style.display  = 'none';
    _gicaCharts[id] = _makeMergedChart(
      id,
      _buildPairs(rows.filter(e => e.nextType === 'Retest')),
      _buildPairs(rows.filter(e => e.nextType === 'Review')),
    );
  } else {
    if (wrapEl)    wrapEl.style.gridTemplateColumns = '1fr';
    if (rightWrap) rightWrap.style.display = 'none';
    if (leftLabel) leftLabel.style.display  = 'none';
    _gicaCharts[id] = _makeChart(id, _buildPairs(rows), onPick, _gicaSchedMode === 'Retest' ? 'retest' : 'review');
  }

  if (legendEl) {
    const buKeys = sortBus(Object.keys(GICA_BU_COLORS));
    legendEl.innerHTML = buKeys.map(bu =>
      `<span><span style="display:inline-block;width:10px;height:10px;background:${GICA_BU_COLORS[bu]};border-radius:2px;margin-right:4px;vertical-align:middle;"></span>${escapeHtml(bu)}</span>`
    ).join('');
  }

  renderGicaScheduleDrill();
}
function _gicaPrint(sourceId) {
  const src = $(sourceId);
  if (!src) return;
  let overlay = document.getElementById('gica-print-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'gica-print-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = src.innerHTML;
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
  overlay.innerHTML = '';
}
window._gicaEmpListPrint = function () {
  const rows = _gicaFilteredEmployees();
  const printDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  const f = _gicaTableState.filters;
  const filterParts = [];
  if (f.bu) filterParts.push('BU ' + f.bu);
  if (f.grade) filterParts.push('Grade ' + f.grade);
  if (f.dept) filterParts.push(f.dept);
  if (f.level) filterParts.push('Level: ' + f.level);
  if (f.type) filterParts.push(f.type);
  if (f.search) filterParts.push('"' + f.search + '"');
  const filterLabel = filterParts.length ? ' · Filter: ' + filterParts.join(', ') : '';

  const gradeCell = (g, s) => g
    ? `${_gicaGradeBadge(g)}<span style="font-size:0.68rem;color:var(--text-muted);margin-left:3px;">${s != null ? Math.round(s * 100) + '%' : ''}</span>`
    : '<span style="color:var(--text-muted);">—</span>';
  const passBadge = p => p === true
    ? `<span class="exp-badge" style="background:#16a34a;color:#fff;font-size:0.68rem;">Pass</span>`
    : p === false
      ? `<span class="exp-badge" style="background:#dc2626;color:#fff;font-size:0.68rem;">Fail</span>`
      : `<span style="color:var(--text-muted);">—</span>`;

  let overlay = document.getElementById('gica-print-overlay');
  if (!overlay) { overlay = document.createElement('div'); overlay.id = 'gica-print-overlay'; document.body.appendChild(overlay); }
  overlay.innerHTML = `
    <div class="gica-print-header">
      <div style="font-size:1rem;font-weight:700;">GICA Employee List</div>
      <div style="font-size:0.78rem;color:#555;margin-top:3px;">Total: ${rows.length} employees${filterLabel} · Report Date: ${printDate}</div>
    </div>
    ${_gicaFailStatsHtml(rows)}
    <div class="gica-drill-table-wrap">
      <table class="gica-drill-table">
        <thead><tr>
          <th class="drill-th" style="text-align:center;">BU</th>
          <th class="drill-th">Employee ID</th>
          <th class="drill-th">Employee Name</th>
          <th class="drill-th">Department</th>
          <th class="drill-th" style="text-align:center;">Level</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Measurement</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Inspection</th>
          <th class="drill-th" style="text-align:center;">Attempt</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Assessment Date</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Result</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Next Date</th>
          <th class="drill-th" style="text-align:center;">Status</th>
        </tr></thead>
        <tbody>${rows.map(e => `<tr>
          <td class="drill-td" style="text-align:center;">${escapeHtml(e.bu)}</td>
          <td class="drill-td" style="font-size:0.72rem;color:var(--text-muted);">${escapeHtml(e.empid || '')}</td>
          <td class="drill-td" style="font-weight:600;">${escapeHtml(e.name)}</td>
          <td class="drill-td" style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(e.deptname)}</td>
          <td class="drill-td" style="text-align:center;font-size:0.75rem;">${escapeHtml(e.level || '')}</td>
          <td class="drill-td" style="text-align:center;">${gradeCell(e.grade1, e.score1)}</td>
          <td class="drill-td" style="text-align:center;">${gradeCell(e.grade2, e.score2)}</td>
          <td class="drill-td" style="text-align:center;">${e.attempt}</td>
          <td class="drill-td" style="text-align:center;font-size:0.72rem;">${_gicaFmtDate(e.lastDate)}</td>
          <td class="drill-td" style="text-align:center;">${passBadge(e.passed)}</td>
          <td class="drill-td" style="text-align:center;font-size:0.72rem;">${_gicaFmtDate(e.nextDate)}</td>
          <td class="drill-td" style="text-align:center;">${_gicaTypeBadge(e.nextType)}</td>
        </tr>`).join('')}</tbody>
      </table>
    </div>`;
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
  overlay.innerHTML = '';
};
function _gicaSchedBuCardsHtml(allRows, activeBu, barId) {
  if (activeBu === undefined) activeBu = _gicaSchedBu;
  if (!barId) barId = 'gica-sched-bu-bar';
  const buCounts = {};
  BU_ORDER.forEach(bu => { buCounts[bu] = 0; });
  allRows.forEach(e => { if (e.bu in buCounts) buCounts[e.bu]++; });
  return `<div class="gica-sched-bu-bar no-print" id="${barId}">`
    + BU_ORDER.map(bu => {
        const count   = buCounts[bu];
        const hasData = count > 0;
        const active  = activeBu === bu;
        return `<div class="gica-sched-bu-card${active ? ' is-active' : ''}${!hasData ? ' is-empty' : ''}" data-bu="${escapeHtml(bu)}">`
          + `<div class="gica-sched-bu-card__name">${escapeHtml(bu)}</div>`
          + `<div class="gica-sched-bu-card__count">${hasData ? count : '—'}</div>`
          + `<div class="gica-sched-bu-card__label">${hasData ? escapeHtml(t('gicaEmpsWord')) : escapeHtml(t('gicaNoData') || 'ไม่มีข้อมูล')}</div>`
          + `</div>`;
      }).join('')
    + `</div>`;
}

// Thin delegator — the Upcoming Assessments chart's per-bar drill now shares the
// same modal + header + filter toolbar as the Timeline drill (see _gicaShowEmpListModal).
// _gicaSchedDate empty = "nothing selected" → just hide the shared modal if it was open.
function renderGicaScheduleDrill() {
  const modal = $('gica-buCohort-modal');
  if (!_gicaSchedDate) {
    if (modal) modal.classList.add('hidden');
    return;
  }
  const allRows = _gicaSchedRows().filter(e => e.nextDate === _gicaSchedDate);
  const typeLabel = _gicaSchedMode !== 'all' ? ` (${_gicaSchedMode})` : '';
  const heading = `${t('gicaSchedTimeline')}${typeLabel} · ${_gicaFmtDate(_gicaSchedDate)}`;
  _gicaShowEmpListModal(
    heading,
    {
      printTitle: `${t('gicaEmpListForAssessment')}${typeLabel}`,
      printSub:   `${t('gicaAssessmentDateLbl')}: ${_gicaFmtDate(_gicaSchedDate)}`,
    },
    allRows,
    '',
    _gicaSchedBu || '',
  );
}

// ── Employee table ────────────────────────────────────────────────────────────
function _gicaFailStreak(e) {
  const hist = e.history || [];
  if (hist.length === 0) return 0;
  let streak = 0;
  for (let i = hist.length - 1; i >= 0; i--) {
    const h = hist[i];
    const passed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
    if (passed) break;
    streak++;
  }
  return streak;
}

function _gicaFailStatsHtml(rows) {
  let fail1 = 0, fail2 = 0, fail3 = 0;
  rows.forEach(e => { const s = _gicaFailStreak(e); if (s === 1) fail1++; else if (s === 2) fail2++; else if (s >= 3) fail3++; });
  const chip = (label, count, color) =>
    `<span class="gica-fail-chip">` +
    `<span class="gica-fail-chip__count" style="color:${color};">${count}</span>` +
    `<span class="gica-fail-chip__label">${label}</span>` +
    `</span>`;
  return chip('Initial fail', fail1, '#f59e0b')
    + chip('2× consec. fail', fail2, '#ea580c')
    + chip('3×+ consec. fail', fail3, '#dc2626');
}

// Front-facing "Assessment Result" cell — one dot per expected testing checkpoint in a
// year (12 / freqMonths, e.g. freq=3 → 4 dots, freq=1 → 12 dots), each dot representing
// a calendar month (month-of-year) rather than an attempt index. When this person has
// tested more than once in the same month, the dot shows that month's LATEST result.
// Clicking opens the full per-attempt history charts (_gicaShowAttemptDotsModal).
const GICA_MONTH_ABBR_TH = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
function _gicaEmpTableMonthDots(e) {
  const freq    = e.freqMonths || 12;
  const numDots = Math.max(1, Math.min(12, Math.round(12 / freq)));

  // Group history by calendar month-of-year (1-12); keep only the latest attempt per month.
  const byMonth = {};
  (e.history || []).forEach(h => {
    if (!h.date) return;
    const m = parseInt(h.date.slice(5, 7), 10);
    if (!byMonth[m] || h.date > byMonth[m].date) byMonth[m] = h;
  });
  const monthEntries = Object.values(byMonth).sort((a, b) => a.date.localeCompare(b.date));
  const recent = monthEntries.slice(-numDots);
  const padCount = numDots - recent.length;

  const dot = (color, title) => `<span title="${escapeHtml(title)}" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${color};"></span>`;
  const dots = [];
  recent.forEach(h => {
    const passed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
    const m = parseInt(h.date.slice(5, 7), 10);
    const title = `${GICA_MONTH_ABBR_TH[m - 1]} · ${_gicaFmtDate(h.date)} — ${passed ? 'Pass' : 'Fail'}`;
    dots.push(dot(passed ? '#16a34a' : '#dc2626', title));
  });
  // Pad after the real dots (not before) so colored dots always start at the left edge.
  for (let i = 0; i < padCount; i++) dots.push(dot('var(--border-light)', 'Not yet assessed'));

  const row1 = dots.slice(0, 6).join('');
  const row2 = dots.slice(6).join('');
  const rowHtml = row2
    ? `<div style="display:flex;gap:3px;">${row1}</div><div style="display:flex;gap:3px;margin-top:3px;">${row2}</div>`
    : `<div style="display:flex;gap:3px;">${row1}</div>`;
  return `<div class="gica-month-dots" data-empid="${escapeHtml(e.empid || '')}" title="Click to view assessment history" style="display:inline-flex;flex-direction:column;align-items:flex-start;cursor:pointer;">${rowHtml}</div>`;
}

// Standard stats block for the Assessment History modal — total attempts,
// pass/fail count+%, current fail streak, and avg/min/max per sub-test.
function _gicaAttemptStats(e) {
  const hist = e.history || [];
  let passN = 0, failN = 0;
  const meas = [], insp = [], avg = [];
  hist.forEach(h => {
    if (h.score1 != null) meas.push(h.score1);
    if (h.score2 != null) insp.push(h.score2);
    if (h.score  != null) avg.push(h.score);
    const passed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
    if (passed) passN++;
    else if (h.grade1 && h.grade2) failN++;
  });
  const total   = hist.length;
  const avgOf   = arr => arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : null;
  const last = hist[hist.length - 1] || null;
  const prev = hist.length >= 2 ? hist[hist.length - 2] : null;
  return {
    total, passN, failN,
    passPct: total ? Math.round(passN / total * 100) : 0,
    failStreak: _gicaFailStreak(e),
    lastMeas: e.score1, lastInsp: e.score2,
    prevMeas: prev ? prev.score1 : null, prevInsp: prev ? prev.score2 : null,
    avgMeas: avgOf(meas), avgInsp: avgOf(insp), avgOverall: avgOf(avg),
    minMeas: meas.length ? Math.min(...meas) : null, maxMeas: meas.length ? Math.max(...meas) : null,
    minInsp: insp.length ? Math.min(...insp) : null, maxInsp: insp.length ? Math.max(...insp) : null,
  };
}

// "%": rounds to 1 decimal place but drops a trailing ".0" (e.g. 76% not 76.0%,
// but 65.5% kept) — matches how the Previous/Last/Diff comparison is displayed.
function _gicaFmtPct1(v) {
  const p = Math.round(v * 1000) / 10;
  return p % 1 === 0 ? String(Math.round(p)) : String(p);
}

// Div/grid layout, not a <table> — this app has a global unscoped
// `table { min-width:1050px; } th { background:var(--blue); position:sticky; }`
// rule (styles.css, written for the main data tables) that leaks into ANY
// <table> with no class to override it, blowing out narrow containers like
// this stat card. Grid avoids that entirely.
function _gicaCompareTableHtml(s) {
  const cell = v => v == null ? '—' : `${_gicaFmtPct1(v)}% (${_gicaScoreToGrade(v)})`;
  const diffCell = (a, b) => {
    if (a == null || b == null) return '—';
    const d = b - a;
    return `<span style="color:${d < 0 ? '#dc2626' : '#16a34a'};">${d >= 0 ? '+' : ''}${_gicaFmtPct1(d)}%</span>`;
  };
  const gridRow = (label, a, b, bold) => `
    <div class="gica-compare-row${bold ? ' gica-compare-row--bold' : ''}">
      <span class="gica-compare-cell gica-compare-cell--label">${label}</span>
      <span class="gica-compare-cell">${cell(a)}</span>
      <span class="gica-compare-cell" style="font-weight:600;">${cell(b)}</span>
      <span class="gica-compare-cell">${diffCell(a, b)}</span>
    </div>`;
  const avgPrev = (s.prevMeas != null && s.prevInsp != null) ? (s.prevMeas + s.prevInsp) / 2 : null;
  const avgLast = (s.lastMeas != null && s.lastInsp != null) ? (s.lastMeas + s.lastInsp) / 2 : null;
  return `
    <div class="gica-compare-table">
      <div class="gica-compare-row gica-compare-row--head">
        <span class="gica-compare-cell gica-compare-cell--label"></span>
        <span class="gica-compare-cell">${t('gicaPrev')}</span>
        <span class="gica-compare-cell">${t('gicaLast')}</span>
        <span class="gica-compare-cell">${t('gicaDiff')}</span>
      </div>
      ${gridRow(t('gicaColMeas'), s.prevMeas, s.lastMeas)}
      ${gridRow(t('gicaColInsp'), s.prevInsp, s.lastInsp)}
      <div class="gica-compare-divider"></div>
      ${gridRow(t('gicaAvg'), avgPrev, avgLast, true)}
    </div>`;
}

function _gicaAttemptStatsHtml(s) {
  const pctGrade = v => v == null ? '—' : `${_gicaFmtPct1(v)}% (${_gicaScoreToGrade(v)})`;
  const rangeGrade = (mn, mx) => (mn == null || mx == null)
    ? '—'
    : `${_gicaFmtPct1(mn)}% – ${_gicaFmtPct1(mx)}% (${_gicaScoreToGrade(mn)}-${_gicaScoreToGrade(mx)})`;
  const row = (label, value, color) => `
    <div class="u-between" style="font-size:0.78rem;padding:3px 0;">
      <span class="u-muted">${label}</span><strong${color ? ` style="color:${color};"` : ''}>${value}</strong>
    </div>`;
  return `
    <div class="gica-attempt-stats">
      <div class="gica-attempt-stats__col">
        ${row(t('gicaTotalAssessments'), s.total)}
        ${row(t('pass'), s.passN, '#16a34a')}
        ${row(t('fail'), s.failN, '#dc2626')}
        ${row(t('gicaPassRate'), s.passPct + '%')}
        ${row(t('gicaCurrentFailStreak'), s.failStreak, s.failStreak > 0 ? '#dc2626' : null)}
      </div>
      <div class="gica-attempt-stats__col">
        ${_gicaCompareTableHtml(s)}
      </div>
      <div class="gica-attempt-stats__col">
        ${row(t('gicaAvgMeas'), pctGrade(s.avgMeas))}
        ${row(t('gicaAvgInsp'), pctGrade(s.avgInsp))}
        ${row(t('gicaMeasRange'), rangeGrade(s.minMeas, s.maxMeas))}
        ${row(t('gicaInspRange'), rangeGrade(s.minInsp, s.maxInsp))}
      </div>
    </div>`;
}

let _gicaAttemptDotsCharts = {};

function _gicaShowAttemptDotsModal(empid) {
  const e = (_gicaData.employees || []).find(x => String(x.empid) === String(empid));
  if (!e) return;
  const modal = $('gica-attempt-dots-modal');
  const title = $('gica-attempt-dots-title');
  const body  = $('gica-attempt-dots-body');
  if (!modal || !body) return;
  if (title) {
    title.innerHTML = `
      <small class="gica-modal__close" style="padding:0; background:transparent; cursor:default; display:block; margin-bottom:4px;">
        ${escapeHtml(t('gicaAssessmentHistory'))}
      </small>
      <strong class="exp-modal-table" style="font-size: 0.85rem; color: var(--text); display: block; font-weight: 900;">
        ${escapeHtml(e.name || e.empid || '')}
      </strong>
    `;
  }

  Object.values(_gicaAttemptDotsCharts).forEach(ch => { try { ch.destroy(); } catch (_) {} });
  _gicaAttemptDotsCharts = {};

  const safeId = escapeHtml(e.empid || 'x');
  const stats  = _gicaAttemptStats(e);
  body.innerHTML = `
    <div class="gica-attempt-charts-container">
      <div class="gica-attempt-chart-block">
        <div class="gica-attempt-chart-label">${escapeHtml(t('gicaMeasResult'))}</div>
        <div class="gica-trend-canvas-wrap"><canvas id="gica-attchart-meas-${safeId}"></canvas></div>
      </div>
      <div class="gica-attempt-chart-block">
        <div class="gica-attempt-chart-label">${escapeHtml(t('gicaInspResult'))}</div>
        <div class="gica-trend-canvas-wrap"><canvas id="gica-attchart-insp-${safeId}"></canvas></div>
      </div>
      <div class="gica-attempt-chart-block">
        <div class="gica-attempt-chart-label">${escapeHtml(t('gicaTotalAvgScore'))}</div>
        <div class="gica-trend-canvas-wrap"><canvas id="gica-attchart-avg-${safeId}"></canvas></div>
      </div>
    </div>
    ${_gicaAttemptStatsHtml(stats)}`;
  modal.classList.remove('hidden');

  if (typeof Chart === 'undefined') return;
  const hist   = e.history || [];
  const X_SLOTS = 12;
  const labels  = Array.from({ length: X_SLOTS }, (_, i) => `#${i + 1}`);
  // Fixed 1-12 axis — place each history entry at its actual attempt slot
  // (h.n - 1) so a gap in testing shows as a gap, not a shifted-left series.
  const buildSeries = field => {
    const arr = new Array(X_SLOTS).fill(null);
    hist.forEach(h => {
      const idx = h.n - 1;
      if (idx >= 0 && idx < X_SLOTS && h[field] != null) arr[idx] = Math.round(h[field] * 100);
    });
    return arr;
  };
  const buildChart = (id, data, color, passPct) => {
    const canvas = $(id);
    if (!canvas) return null;
    const annotation = passPct != null ? {
      annotations: {
        passLine: {
          type: 'line', yMin: passPct, yMax: passPct,
          borderColor: '#72e059', borderWidth: 1.5, borderDash: [6, 4],
          label: { display: true, content: `Passt ${passPct}%`, position: 'end',
            font: { size: 8 }, color: '#696767', backgroundColor: 'transparent',yAdjust: -10, xAdjust: 5, },
        },
      },
    } : undefined;
    return new Chart(canvas, {
      type: 'line',
      data: { labels, datasets: [{
        data, borderColor: color, backgroundColor: color + '18', fill: true,
        tension: 0.4, pointRadius: 2.5, pointHoverRadius: 4, spanGaps: true,
      }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        // Same 100-line clipping fix as the row-3 trend cards: padding.top lifts
        // the marker off the edge; axis stays 0–100 with stepSize 20.
        layout: { padding: { top: 10 } },
        plugins: { legend: { display: false }, ...(annotation ? { annotation } : {}) },
        scales: {
          x: { ticks: { font: { size: 9 } } },
          y: { min: 0, max: 100, ticks: { stepSize: 20, font: { size: 9 } } },
        },
      },
    });
  };
  const passPctOf = exp => exp && GICA_GRADE_THRESH[exp] != null ? Math.round(GICA_GRADE_THRESH[exp] * 100) : null;
  _gicaAttemptDotsCharts.meas = buildChart(`gica-attchart-meas-${safeId}`, buildSeries('score1'), '#2563eb', passPctOf(e.exp1));
  _gicaAttemptDotsCharts.insp = buildChart(`gica-attchart-insp-${safeId}`, buildSeries('score2'), '#16a34a', passPctOf(e.exp2));
  _gicaAttemptDotsCharts.avg  = buildChart(`gica-attchart-avg-${safeId}`,  buildSeries('score'),  '#f59e0b');
}

function _gicaEmpTableHtml(rows, opts = {}) {
  const sortable  = opts.sortable !== false;
  const editable  = !!opts.editable;
  const deletable = !!opts.deletable;
  const showNum   = false;
  const cols      = (showNum ? 1 : 0) + 13 + (deletable ? 1 : 0);
  const st = _gicaTableState;

  const arrow = k => {
    if (!sortable || st.sortKey !== k) return '';
    return ` <span class="gica-sort-arrow">${st.sortDir === 1 ? '▲' : '▼'}</span>`;
  };
  const TH = (k, label, cls = '') => {
    const sortCls = sortable ? ' gica-th-sort' : '';
    const onclick = sortable ? ` onclick="_gicaSort('${k}')"` : '';
    return `<th class="${cls}${sortCls}"${onclick}>${label}${arrow(k)}</th>`;
  };

  const gradeCell = (g, s) => {
    if (!g) return '<span class="emp-date-empty">—</span>';
    const scoreStr = s != null ? `<span class="gica-grade-score">${Math.round(s * 100)}%</span>` : '';
    return `${_gicaGradeBadge(g)}${scoreStr}`;
  };

  const numTh   = showNum ? `<th class="emp-row-num-th"></th>` : '';
  const actionTh = deletable ? `<th class="td-c">${t('gicaColAction')}</th>` : '';

  return `
    <div class="gica-emp-table-wrap">
    <table class="emp-table gica-emp-table" style="min-width:1080px;">
      <thead><tr>
        ${numTh}
        ${TH('bu', t('gicaColBu'))}
        ${TH('empid', t('gicaColEmpId'))}
        ${TH('name', t('gicaColName'))}
        ${TH('deptname', t('gicaColDept'))}
        ${TH('level', t('gicaColLevel'), 'col-group-end td-c')}
        ${TH('grade1', t('gicaColMeas'), 'td-c')}
        ${TH('grade2', t('gicaColInsp'), 'td-c')}
        ${TH('attempt', t('gicaColAttempt'), 'td-c')}
        ${TH('lastDate', t('gicaColLastDate'), 'td-c')}
        ${TH('passed', t('gicaColHistory'), 'td-c col-group-end')}
        ${TH('nextDate', t('gicaColNextDate'), 'td-c')}
        ${TH('nextDate', t('gicaColDaysLeft'), 'td-c')}
        ${TH('nextType', t('gicaColStatus'), 'td-c')}
        ${actionTh}
      </tr></thead>
      <tbody>
        ${rows.length === 0
          ? `<tr><td colspan="${cols}" class="td-c" style="padding:24px;color:var(--text-muted);">${t('gicaTableEmpty')}</td></tr>`
          : rows.map((e, idx) => {
              const numTd = showNum ? `<td class="emp-row-num">${idx + 1}</td>` : '';
              const nameCls = editable ? ' gica-emp-name-cell' : '';
              const nameAttrs = editable
                ? ` data-empid="${escapeHtml(e.empid || '')}" data-bu="${escapeHtml(e.bu || '')}" title="${escapeHtml(t('gicaEmpNameTip'))}"`
                : '';
              const nameStyle = editable ? ' style="cursor:pointer;color:var(--primary,#6366f1);text-decoration:underline;"' : '';
              const deleteTd = deletable
                ? `<td class="td-c"><button class="gica-delete-emp-btn emp-act-btn" data-empid="${escapeHtml(e.empid || '')}" data-bu="${escapeHtml(e.bu || '')}" data-name="${escapeHtml(e.name || '')}" title="${escapeHtml(t('gicaDeleteEmpTip'))}" style="opacity:1;color:#dc2626;border-color:#fca5a5;"><i class="ti ti-trash" aria-hidden="true"></i></button></td>`
                : '';
              const overrideMark = e.nextDateOverride
                ? ` <span class="gica-next-date-mark" title="${escapeHtml(t('gicaNextDateOverrideTip'))}">*</span>`
                : '';
              const nextDateCls   = editable ? 'gica-next-date-cell' : '';
              const nextDateAttrs = editable
                ? ` data-empid="${escapeHtml(e.empid || '')}" data-bu="${escapeHtml(e.bu || '')}" data-nextdate="${escapeHtml(e.nextDate || '')}" data-override="${e.nextDateOverride ? '1' : '0'}" title="${escapeHtml(t('gicaNextDateEditTip'))}"`
                : '';
              return `<tr>
                ${numTd}
                <td>${escapeHtml(e.bu)}</td>
                <td><span class="emp-id-cell">${escapeHtml(e.empid || '')}</span></td>
                <td class="${nameCls}"${nameAttrs}${nameStyle}>${escapeHtml(e.name)}</td>
                <td>${escapeHtml(e.deptname)}</td>
                <td class="td-c col-group-end">${escapeHtml(e.level || '')}</td>
                <td class="td-c">${gradeCell(e.grade1, e.score1)}</td>
                <td class="td-c">${gradeCell(e.grade2, e.score2)}</td>
                <td class="td-c"><span class="emp-id-cell">${e.attempt}</span></td>
                <td class="td-c">${_gicaFmtDate(e.lastDate)}</td>
                <td class="td-c col-group-end">${_gicaEmpTableMonthDots(e)}</td>
                <td class="td-c ${nextDateCls}"${nextDateAttrs}>${_gicaFmtDate(e.nextDate)}${overrideMark}</td>
                <td class="td-c">${_gicaDaysBadge(e.nextDate)}</td>
                <td class="td-c">${_gicaTypeBadge(e.nextType)}</td>
                ${deleteTd}
              </tr>`;
            }).join('')}
      </tbody>
    </table></div>`;
}

function _gicaFilteredEmployees() {
  const f = _gicaTableState.filters;
  const q = f.search.trim().toLowerCase();
  let rows = (_gicaData.employees || []).filter(e => {
    // BU-scoped user: Employee List only shows own BU (backend still returns all
    // BUs so dashboards can aggregate — this is Option B behaviour).
    if (_currentUserBu && e.bu !== _currentUserBu) return false;
    if (f.bu && e.bu !== f.bu) return false;
    if (f.grade && e.grade !== f.grade) return false;
    if (f.dept && e.deptname !== f.dept) return false;
    if (f.level && e.level !== f.level) return false;
    if (f.type && e.nextType !== f.type) return false;
    if (q && !(`${e.name} ${e.empid}`.toLowerCase().includes(q))) return false;
    return true;
  });
  const { sortKey, sortDir } = _gicaTableState;
  rows.sort((a, b) => {
    let av = a[sortKey], bv = b[sortKey];
    if (sortKey === 'grade' || sortKey === 'grade1' || sortKey === 'grade2') {
      av = GICA_GRADE_RANK[av] || 0; bv = GICA_GRADE_RANK[bv] || 0;
    } else if (sortKey === 'score' || sortKey === 'attempt') { av = av || 0; bv = bv || 0; }
    else if (sortKey === 'passed') { av = av === true ? 1 : av === false ? 0 : -1; bv = bv === true ? 1 : bv === false ? 0 : -1; }
    if (av == null) av = ''; if (bv == null) bv = '';
    if (typeof av === 'string' && typeof bv === 'string') return sortDir * av.localeCompare(bv);
    return sortDir * (av > bv ? 1 : av < bv ? -1 : 0);
  });
  return rows;
}
window._gicaSort = function (key) {
  const st = _gicaTableState;
  if (st.sortKey === key) st.sortDir *= -1; else { st.sortKey = key; st.sortDir = 1; }
  st.page = 1;
  renderGicaTable();
};
function renderGicaTable() {
  const wrap = $('gica-table');
  if (!wrap) return;
  const rows  = _gicaFilteredEmployees();
  const st    = _gicaTableState;
  const total = rows.length;
  const pages = Math.max(1, Math.ceil(total / st.pageSize));
  if (st.page > pages) st.page = pages;
  const start = (st.page - 1) * st.pageSize;
  const pageRows = rows.slice(start, start + st.pageSize);

  const statsEl = $('gica-failStats');
  if (statsEl) statsEl.innerHTML = _gicaFailStatsHtml(rows);

  const editable  = ['qe_edit', 'gica_admin', 'admin'].includes(currentRole);
  const deletable = ['gica_admin', 'admin'].includes(currentRole);
  wrap.innerHTML = _gicaEmpTableHtml(pageRows, { sortable: true, editable, deletable });
  if (editable) {
    _wireGicaEmpNameClicks(wrap);
    _wireGicaNextDateClicks(wrap);
  }
  if (deletable) _wireGicaDeleteBtns(wrap);

  const countBadge = $('gica-count-badge');
  if (countBadge) countBadge.textContent = total;

  const rangeEl = $('gica-rangeLabel');
  if (rangeEl) rangeEl.textContent = total ? `${start + 1}–${Math.min(start + st.pageSize, total)} of ${total}` : '0 items';
  const pageEl = $('gica-pageLabel');
  if (pageEl) pageEl.textContent = `${st.page} of ${pages}`;
}

function _wireGicaEmpNameClicks(wrap) {
  wrap.querySelectorAll('.gica-emp-name-cell[data-empid]').forEach(td => {
    td.addEventListener('click', () => _gicaOpenResultModal(td.dataset.bu, td.dataset.empid));
  });
}

// Inline-edit Next Date for qe_edit / gica_admin / admin.
// Click cell → date input + Save/Cancel/Reset. Reset clears the manual override
// so the auto-computed schedule kicks back in. Backend clears override
// automatically when a new test result is added.
function _wireGicaNextDateClicks(wrap) {
  wrap.querySelectorAll('.gica-next-date-cell[data-empid]').forEach(td => {
    td.style.cursor = 'pointer';
    td.addEventListener('click', () => _gicaBeginNextDateEdit(td));
  });
}

function _gicaBeginNextDateEdit(td) {
  if (td._editing) return;
  td._editing = true;
  const { bu, empid, nextdate, override } = td.dataset;
  const initial = nextdate || '';
  const originalHtml = td.innerHTML;
  const hasOverride = override === '1';
  td.innerHTML = `
    <div class="gica-ie-nextdate">
      <input type="date" class="gica-ie-nextdate-input" value="${escapeHtml(initial)}">
      <button type="button" class="btn-confirm-inline" title="Save">✓</button>
      <button type="button" class="btn-cancel-inline" title="Cancel">✗</button>
      ${hasOverride ? `<button type="button" class="gica-ie-nextdate-reset" title="${escapeHtml(t('gicaNextDateResetTip'))}">↺</button>` : ''}
    </div>`;
  const input = td.querySelector('.gica-ie-nextdate-input');
  if (input) { try { input.focus(); } catch (_) {} }

  const cleanup = () => {
    td._editing = false;
    if (td._escHandler) { document.removeEventListener('keydown', td._escHandler); td._escHandler = null; }
  };
  const cancel = () => { cleanup(); td.innerHTML = originalHtml; };
  const save = async (newDate) => {
    cleanup();
    td.innerHTML = `<span style="opacity:0.55;">…</span>`;
    try {
      const body = newDate ? { date: newDate } : { clear: true };
      await api(`/api/gica/${encodeURIComponent(bu)}/employees/${encodeURIComponent(empid)}/next-date`,
        { method: 'PATCH', body: JSON.stringify(body) });
      await _gicaRefreshData();
      renderGicaTable();
      if (typeof _gicaScheduleRendered !== 'undefined' && _gicaScheduleRendered) renderGicaSchedule();
      showToast(t('gicaSaved'));
    } catch (err) {
      showToast(`${t('gicaSaveFail')}: ${err.message || ''}`);
      td.innerHTML = originalHtml;
    }
  };
  td.querySelector('.btn-confirm-inline').onclick = e => { e.stopPropagation(); save(input.value); };
  td.querySelector('.btn-cancel-inline' ).onclick = e => { e.stopPropagation(); cancel(); };
  const resetBtn = td.querySelector('.gica-ie-nextdate-reset');
  if (resetBtn) resetBtn.onclick = e => { e.stopPropagation(); save(''); };

  td._escHandler = e => {
    if (e.key === 'Escape') cancel();
    else if (e.key === 'Enter' && e.target === input) save(input.value);
  };
  document.addEventListener('keydown', td._escHandler);
}

function _wireGicaDeleteBtns(wrap) {
  wrap.querySelectorAll('.gica-delete-emp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const { bu, empid, name } = btn.dataset;
      _gicaConfirm(t('gicaDeleteConfirmPrompt', { name, empid }), async () => {
        btn.disabled = true;
        btn.textContent = '…';
        try {
          await api(`/api/gica/${encodeURIComponent(bu)}/employees/${encodeURIComponent(empid)}`, { method: 'DELETE' });
          await _gicaRefreshData();
          renderGicaSummary();
          renderGicaTable();
          if (_gicaScheduleRendered) renderGicaSchedule();
          showToast(t('gicaDeleteEmpSaved'));
        } catch (e) {
          alert(`${t('gicaErrPrefix')}: ${e.message || t('gicaUnknownErr')}`);
          btn.disabled = false;
          btn.textContent = t('gicaDelete');
        }
      });
    });
  });
}

// ── Generic Yes/No confirm overlay — reused by the Result and Create modals ───
function _gicaConfirm(text, onYes) {
  const overlay = $('gica-confirm-overlay');
  const textEl  = $('gica-confirm-text');
  const yesBtn  = $('gica-confirm-yes');
  const noBtn   = $('gica-confirm-no');
  if (!overlay || !textEl || !yesBtn || !noBtn) { onYes && onYes(); return; }
  textEl.textContent = text;
  overlay.classList.remove('hidden');
  const cleanup = () => {
    overlay.classList.add('hidden');
    yesBtn.onclick = null;
    noBtn.onclick  = null;
  };
  yesBtn.onclick = () => { cleanup(); onYes && onYes(); };
  noBtn.onclick  = cleanup;
}

// Re-fetch GICA data without re-running initGicaTab() (which would re-wire the
// subtab buttons a second time) — used to reflect a just-saved write immediately.
async function _gicaRefreshData() {
  try {
    const res = await fetch('/api/gica-excel');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    _gicaData = data;
  } catch (err) {
    console.error('[GICA] refresh after save failed', err);
  }
}

// ── Add/Edit Result modal (existing employee → next attempt slot) ─────────────
let _gicaResultCtx = null; // { bu, empid }

function _gicaOpenResultModal(bu, empid) {
  _gicaResultCtx = { bu, empid };
  const emp = (_gicaData.employees || []).find(e => e.bu === bu && String(e.empid) === String(empid));
  const title = $('gica-result-title');
  if (title) {
    const empNameOrId = emp ? emp.name : empid;
    
    title.innerHTML = `
      <small style="padding: 0; background: transparent; cursor: default; display: block; margin-bottom: 4px; font-size: 0.75rem; color: var(--text-muted, #64748b); font-weight: 500;">
        ${escapeHtml(t('gicaAddResultTitle'))}
      </small>
      <strong style="font-size: 0.95rem; color: var(--text, #1e293b); display: block; font-weight: 900;">
        ${escapeHtml(empNameOrId || '')}
      </strong>
    `;
  }
  $('gica-result-meas').value = '';
  $('gica-result-insp').value = '';
  const today = new Date().toISOString().slice(0, 10);
  $('gica-result-date').value = today;
  _gicaUpdateDateLabel(today);
  $('gica-result-error').classList.add('hidden');
  // Delete button is admin-only (backend gates DELETE /api/gica/... to admin/gica_admin);
  // showing it to qe_edit would just yield a 403 on click.
  const canGicaAdmin = ['gica_admin', 'admin'].includes(currentRole);
  const delBtn = $('gica-result-delete');
  if (delBtn) {
    delBtn.classList.toggle('hidden', !canGicaAdmin);
    delBtn.title = t('gicaDelete');              // icon-only button → tooltip carries the label
    delBtn.setAttribute('aria-label', t('gicaDelete'));
  }
  // Score History (per-attempt delete) is admin-only too — same gate as delete employee.
  const histBtn = $('gica-result-history');
  if (histBtn) {
    histBtn.classList.toggle('hidden', !canGicaAdmin);
    histBtn.title = t('gicaScoreHistory');
    histBtn.setAttribute('aria-label', t('gicaScoreHistory'));
  }
  $('gica-result-modal').classList.remove('hidden');

  // Show Assessment History side-by-side so QE can see past results while
  // entering a new one — the entry form on the left, History on the right.
  _gicaShowAttemptDotsModal(empid);
  $('gica-result-modal').classList.add('gica-modal--paired-left');
  $('gica-attempt-dots-modal')?.classList.add('gica-modal--paired-right');
}
function _gicaCloseResultModal() {
  $('gica-result-modal').classList.add('hidden');
  $('gica-result-modal').classList.remove('gica-modal--paired-left');
  $('gica-attempt-dots-modal')?.classList.remove('gica-modal--paired-right');
}

function _gicaValidateResultForm() {
  const errEl = $('gica-result-error');
  const meas = $('gica-result-meas').value;
  const insp = $('gica-result-insp').value;
  const date = $('gica-result-date').value;
  if (meas === '' || insp === '' || !date) {
    errEl.textContent = t('gicaFormFillAll');
    errEl.classList.remove('hidden');
    return null;
  }
  errEl.classList.add('hidden');
  return { meas, insp, date };
}

// Closes the modal and shows a "saving" toast IMMEDIATELY on Yes — waiting for the
// PATCH to resolve before giving any feedback made it look stuck, so people clicked
// Confirm again and submitted the same result twice.
async function _gicaSaveResult(fields) {
  const { bu, empid } = _gicaResultCtx;
  _gicaCloseResultModal();
  // Also dismiss the paired Assessment History modal — once the entry is submitted
  // the whole side-by-side view has done its job, no point leaving history alone
  // on screen. (Cancel/close still leaves history visible on purpose — that's the
  // "just close the form, keep studying past results" flow.)
  $('gica-attempt-dots-modal')?.classList.add('hidden');
  showToast(t('gicaSaving'));
  try {
    await api(`/api/gica/${bu}/employees/${empid}/result`, {
      method: 'PATCH',
      body: JSON.stringify({
        measurementResult: Number(fields.meas),
        inspectionResult: Number(fields.insp),
        assessmentDate: fields.date,
      }),
    });
    await _gicaRefreshData();
    renderGicaSummary();
    renderGicaTable();
    showToast(t('gicaSaved'));
  } catch (err) {
    showToast(`${t('gicaSaveFail')}: ${err.message || ''}`);
  }
}


function _gicaUpdateDateLabel(isoVal) {
  const display = $('gica-result-date-display');
  if (!display) return;
  if (!isoVal) { display.value = ''; return; }
  const d = new Date(isoVal + 'T00:00:00');
  if (isNaN(d)) { display.value = ''; return; }
  display.value = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function _wireGicaResultModal() {
  $('gica-result-date')?.addEventListener('change', e => _gicaUpdateDateLabel(e.target.value));

  $('gica-result-close')?.addEventListener('click', _gicaCloseResultModal);
  $('gica-result-backdrop')?.addEventListener('click', _gicaCloseResultModal);
  $('gica-result-cancel')?.addEventListener('click', () => {
    _gicaConfirm(t('gicaResultCancelPrompt'), () => {
      $('gica-result-meas').value = '';
      $('gica-result-insp').value = '';
      $('gica-result-date').value = '';
      _gicaUpdateDateLabel('');
      _gicaCloseResultModal();
    });
  });
  $('gica-result-confirm')?.addEventListener('click', () => {
    const fields = _gicaValidateResultForm();
    if (!fields) return; // empty field — don't even show the confirm dialog
    _gicaConfirm(t('gicaResultSavePrompt'), () => _gicaSaveResult(fields));
  });

  // Delete employee (admin only — button hidden for other roles at open time).
  // Uses the same DELETE endpoint + refresh flow as the trash icon in the table.
  $('gica-result-delete')?.addEventListener('click', () => {
    if (!_gicaResultCtx) return;
    const { bu, empid } = _gicaResultCtx;
    const emp = (_gicaData.employees || []).find(e => e.bu === bu && String(e.empid) === String(empid));
    const name = emp ? emp.name : empid;
    _gicaConfirm(t('gicaDeleteConfirmPrompt', { name, empid }), async () => {
      _gicaCloseResultModal();
      // Also close the paired Assessment History modal that opens alongside the result form.
      $('gica-attempt-dots-modal')?.classList.add('hidden');
      showToast(t('gicaDeletingEmp'));
      try {
        await api(`/api/gica/${encodeURIComponent(bu)}/employees/${encodeURIComponent(empid)}`, { method: 'DELETE' });
        await _gicaRefreshData();
        renderGicaSummary();
        renderGicaTable();
        if (_gicaScheduleRendered) renderGicaSchedule();
        showToast(t('gicaDeleteEmpSaved'));
      } catch (err) {
        showToast(`${t('gicaDeleteFail')}: ${err.message || ''}`);
      }
    });
  });

  // Score History (admin only) — opens the per-attempt list with delete controls.
  $('gica-result-history')?.addEventListener('click', _gicaOpenScoreHistory);

  // Esc closes the modal — but not while the Save/Cancel confirm dialog is open
  // on top of it, otherwise Esc would close this modal and leave that orphaned.
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const modal = $('gica-result-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    const confirmOverlay = $('gica-confirm-overlay');
    if (confirmOverlay && !confirmOverlay.classList.contains('hidden')) return;
    _gicaCloseResultModal();
  });
}

// ── Score History modal (admin only) — list every attempt, delete some or all ──
// Reads the current _gicaResultCtx (bu, empid) set when the Result modal opened.
// The employee row is always kept; only the tests are removed (see backend).
function _gicaOpenScoreHistory() {
  if (!_gicaResultCtx) return;
  const { bu, empid } = _gicaResultCtx;
  const emp = (_gicaData.employees || []).find(e => e.bu === bu && String(e.empid) === String(empid));
  if (!emp) return;
  const title = $('gica-scoreHistory-title');
  if (title) {
    title.innerHTML = `
      <small style="display:block;margin-bottom:4px;font-size:0.75rem;color:var(--text-muted,#64748b);font-weight:500;">
        ${escapeHtml(t('gicaScoreHistory'))}
      </small>
      <strong style="font-size:0.95rem;color:var(--text,#1e293b);display:block;font-weight:900;">
        ${escapeHtml(emp.name || emp.empid || '')}
      </strong>`;
  }
  _gicaRenderScoreHistoryBody(emp);
  $('gica-scoreHistory-modal').classList.remove('hidden');
}

function _gicaRenderScoreHistoryBody(emp) {
  const body = $('gica-scoreHistory-body');
  if (!body) return;
  const hist = (emp.history || []).slice().sort((a, b) => (a.n || 0) - (b.n || 0));
  const delSel = $('gica-scoreHistory-delSel');
  const delAll = $('gica-scoreHistory-delAll');

  if (!hist.length) {
    body.innerHTML = `<div class="u-muted" style="text-align:center;padding:28px 12px;">${escapeHtml(t('gicaNoScores'))}</div>`;
    if (delSel) delSel.disabled = true;
    if (delAll) delAll.disabled = true;
    return;
  }
  if (delSel) delSel.disabled = false;
  if (delAll) delAll.disabled = false;

  const pctGrade = (pct, g) => {
    const p = pct != null ? `${Math.round(pct * 100)}%` : '—';
    return `${p} ${g ? _gicaGradeBadge(g) : ''}`;
  };
  const rowsHtml = hist.map(h => {
    const passed = h.grade1 && h.grade2 && emp.exp1 && emp.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[emp.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[emp.exp2] || 0);
    const badge = passed
      ? `<span class="status-pill status-pill--completed">${escapeHtml(t('pass'))}</span>`
      : `<span class="status-pill status-pill--overdue">${escapeHtml(t('fail'))}</span>`;
    return `
      <div class="gica-score-hist-row" data-n="${h.n}">
        <span class="gica-score-hist-cell"><input type="checkbox" class="gica-score-hist-chk" data-n="${h.n}"></span>
        <span class="gica-score-hist-cell" style="font-weight:700;">#${h.n}</span>
        <span class="gica-score-hist-cell">${escapeHtml(_gicaFmtDate(h.date) || '—')}</span>
        <span class="gica-score-hist-cell">${pctGrade(h.score1, h.grade1)}</span>
        <span class="gica-score-hist-cell">${pctGrade(h.score2, h.grade2)}</span>
        <span class="gica-score-hist-cell">${badge}</span>
        <span class="gica-score-hist-cell gica-score-hist-cell--act">
          <button class="gica-score-hist-del emp-act-btn" data-n="${h.n}" title="${escapeHtml(t('gicaDelete'))}" style="color:#dc2626;border-color:#fca5a5;"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </span>
      </div>`;
  }).join('');

  body.innerHTML = `
    <div class="gica-score-hist-table">
      <div class="gica-score-hist-row gica-score-hist-row--head">
        <span class="gica-score-hist-cell"><input type="checkbox" id="gica-score-hist-all" title="${escapeHtml(t('gicaSelectAll'))}"></span>
        <span class="gica-score-hist-cell">#</span>
        <span class="gica-score-hist-cell">${escapeHtml(t('gicaAssessmentDate'))}</span>
        <span class="gica-score-hist-cell">${escapeHtml(t('gicaMeasResult'))}</span>
        <span class="gica-score-hist-cell">${escapeHtml(t('gicaInspResult'))}</span>
        <span class="gica-score-hist-cell">${escapeHtml(t('gicaColResult'))}</span>
        <span class="gica-score-hist-cell gica-score-hist-cell--act"></span>
      </div>
      ${rowsHtml}
    </div>`;

  // Wire per-render controls (innerHTML wiped the old listeners).
  const selAll = $('gica-score-hist-all');
  if (selAll) selAll.addEventListener('change', () => {
    body.querySelectorAll('.gica-score-hist-chk').forEach(chk => { chk.checked = selAll.checked; });
  });
  body.querySelectorAll('.gica-score-hist-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const n = Number(btn.dataset.n);
      _gicaConfirm(t('gicaDeleteScoreConfirm', { n: 1 }), () => _gicaDeleteScores([n], false));
    });
  });
}

function _gicaSelectedScoreNs() {
  return [...document.querySelectorAll('#gica-scoreHistory-body .gica-score-hist-chk:checked')]
    .map(chk => Number(chk.dataset.n));
}

async function _gicaDeleteScores(ns, all) {
  if (!_gicaResultCtx) return;
  const { bu, empid } = _gicaResultCtx;
  showToast(t('gicaDeletingScore'));
  try {
    await api(`/api/gica/${encodeURIComponent(bu)}/employees/${encodeURIComponent(empid)}/results`, {
      method: 'DELETE',
      body: JSON.stringify(all ? { all: true } : { attempts: ns }),
    });
    await _gicaRefreshData();
    renderGicaSummary();
    renderGicaTable();
    if (_gicaScheduleRendered) renderGicaSchedule();
    // Re-render the list and refresh the paired Assessment History charts to match.
    const emp = (_gicaData.employees || []).find(e => e.bu === bu && String(e.empid) === String(empid));
    if (emp && (emp.history || []).length) {
      _gicaRenderScoreHistoryBody(emp);
      if (!$('gica-attempt-dots-modal')?.classList.contains('hidden')) _gicaShowAttemptDotsModal(empid);
    } else {
      // No scores left (or the employee dropped out of the payload) — close the list.
      $('gica-scoreHistory-modal')?.classList.add('hidden');
    }
    showToast(t('gicaScoreDeleted'));
  } catch (err) {
    showToast(`${t('gicaDeleteFail')}: ${err.message || ''}`);
  }
}

function _gicaCloseScoreHistory() { $('gica-scoreHistory-modal')?.classList.add('hidden'); }

function _wireGicaScoreHistoryModal() {
  $('gica-scoreHistory-close')?.addEventListener('click', _gicaCloseScoreHistory);
  $('gica-scoreHistory-closeBtn')?.addEventListener('click', _gicaCloseScoreHistory);
  $('gica-scoreHistory-backdrop')?.addEventListener('click', _gicaCloseScoreHistory);

  $('gica-scoreHistory-delSel')?.addEventListener('click', () => {
    const ns = _gicaSelectedScoreNs();
    if (!ns.length) { showToast(t('gicaSelectScoreFirst')); return; }
    _gicaConfirm(t('gicaDeleteScoreConfirm', { n: ns.length }), () => _gicaDeleteScores(ns, false));
  });
  $('gica-scoreHistory-delAll')?.addEventListener('click', () => {
    _gicaConfirm(t('gicaDeleteAllScoresConfirm'), () => _gicaDeleteScores([], true));
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const modal = $('gica-scoreHistory-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    const confirmOverlay = $('gica-confirm-overlay');
    if (confirmOverlay && !confirmOverlay.classList.contains('hidden')) return;
    _gicaCloseScoreHistory();
  });
}

// ── Create new operator modal (brand-new GICA employee row) ───────────────────
// Department/Level/Position dropdowns are sourced from Table_freq so a new
// employee can only be assigned combinations that Table_freq actually defines
// an expectation for.
function _gicaPopulateCreateDropdowns() {
  const freq    = _gicaData.freqTable || [];
  const buSel   = $('gica-create-bu');
  const deptSel = $('gica-create-dept');
  const lvlSel  = $('gica-create-level');
  const posSel  = $('gica-create-position');
  if (!buSel || !deptSel || !lvlSel || !posSel) return;

  const opt = v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`;
  const placeholder = `<option value="">— Select —</option>`;

  buSel.innerHTML = BU_ORDER.map(bu => `<option value="${escapeHtml(bu)}">${escapeHtml(bu)}</option>`).join('');

  const depts = [...new Set(freq.map(r => r.department).filter(Boolean))].sort();
  deptSel.innerHTML = placeholder + depts.map(opt).join('');

  lvlSel.innerHTML  = placeholder;
  lvlSel.disabled   = true;
  posSel.innerHTML  = placeholder;
  posSel.disabled   = true;
}

function _gicaFilterLevelDropdown(dept) {
  const freq   = _gicaData.freqTable || [];
  const lvlSel = $('gica-create-level');
  const posSel = $('gica-create-position');
  if (!lvlSel || !posSel) return;

  const opt = v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`;
  const placeholder = `<option value="">— Select —</option>`;

  posSel.innerHTML = placeholder;
  posSel.disabled  = true;

  if (!dept) {
    lvlSel.innerHTML = placeholder;
    lvlSel.disabled  = true;
    return;
  }
  const levels = [...new Set(
    freq.filter(r => r.department === dept).map(r => r.level).filter(Boolean)
  )].sort((a, b) => {
    const ia = GICA_LEVEL_ORDER.indexOf(a), ib = GICA_LEVEL_ORDER.indexOf(b);
    if (ia !== ib) return (ia === -1 ? 1 : ib === -1 ? -1 : ia - ib);
    return a.localeCompare(b);
  });
  lvlSel.innerHTML = placeholder + levels.map(opt).join('');
  lvlSel.disabled  = levels.length === 0;
}

function _gicaFilterPositionDropdown(dept, level) {
  const freq   = _gicaData.freqTable || [];
  const posSel = $('gica-create-position');
  if (!posSel) return;

  const opt = v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`;
  const placeholder = `<option value="">— Select —</option>`;

  if (!dept || !level) {
    posSel.innerHTML = placeholder;
    posSel.disabled  = true;
    return;
  }
  const roles = [...new Set(
    freq.filter(r => r.department === dept && r.level === level).map(r => r.role).filter(Boolean)
  )].sort();
  posSel.innerHTML = placeholder + roles.map(opt).join('');
  posSel.disabled  = roles.length === 0;
}

function _gicaOpenCreateModal() {
  _gicaPopulateCreateDropdowns();
  $('gica-create-empid').value = '';
  $('gica-create-name').value = '';
  const today = new Date().toISOString().slice(0, 10);
  $('gica-create-startdate').value = today;
  _gicaUpdateStartDateLabel(today);
  // BU-scoped user: lock BU dropdown to their own BU
  const buSel = $('gica-create-bu');
  if (buSel && _currentUserBu) {
    buSel.value = _currentUserBu;
    buSel.disabled = true;
    buSel.title = `จำกัดสิทธิ์: ${_currentUserBu} เท่านั้น`;
  }
  $('gica-create-error').classList.add('hidden');
  $('gica-create-modal').classList.remove('hidden');
}
function _gicaCloseCreateModal() {
  $('gica-create-modal').classList.add('hidden');
}
function _gicaClearCreateForm() {
  $('gica-create-empid').value = '';
  $('gica-create-name').value = '';
  $('gica-create-startdate').value = '';
  _gicaUpdateStartDateLabel('');
}

function _gicaValidateCreateForm() {
  const errEl     = $('gica-create-error');
  const bu        = $('gica-create-bu').value;
  const empid     = $('gica-create-empid').value.trim();
  const name      = $('gica-create-name').value.trim();
  const dept      = $('gica-create-dept').value;
  const level     = $('gica-create-level').value;
  const position  = $('gica-create-position').value;
  const startDate = $('gica-create-startdate').value;

  if (!bu || !empid || !/^\d+$/.test(empid) || !name || !dept || !level || !position || !startDate) {
    errEl.textContent = 'กรุณากรอกข้อมูลให้ครบและถูกต้องทุกช่อง (Employee ID ต้องเป็นตัวเลข)';
    errEl.classList.remove('hidden');
    return null;
  }
  errEl.classList.add('hidden');
  return { bu, empid, name, dept, level, position, startDate };
}

// Closes the modal and shows a "saving" toast IMMEDIATELY on Yes — see _gicaSaveResult
// for why (waiting for the response before any feedback caused double-submits).
async function _gicaSaveCreate(fields) {
  _gicaCloseCreateModal();
  showToast(t('gicaSaving'));
  try {
    await api(`/api/gica/${fields.bu}/employees`, {
      method: 'POST',
      body: JSON.stringify({
        empid: fields.empid, name: fields.name, deptname: fields.dept,
        level: fields.level, position: fields.position, start_date: fields.startDate,
      }),
    });
    await _gicaRefreshData();
    renderGicaTable();
    showToast(t('gicaSaved'));
  } catch (err) {
    showToast(`${t('gicaSaveFail')}: ${err.message || ''}`);
  }
}

function _gicaUpdateStartDateLabel(isoVal) {
  const display = $('gica-create-startdate-display');
  if (!display) return;
  if (!isoVal) { display.value = ''; return; }
  const d = new Date(isoVal + 'T00:00:00');
  if (isNaN(d)) { display.value = ''; return; }
  display.value = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function _wireGicaCreateModal() {
  $('gica-create-startdate')?.addEventListener('change', e => _gicaUpdateStartDateLabel(e.target.value));
  $('gica-create-operator-btn')?.addEventListener('click', _gicaOpenCreateModal);
  $('gica-create-close')?.addEventListener('click', _gicaCloseCreateModal);
  $('gica-create-backdrop')?.addEventListener('click', _gicaCloseCreateModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('gica-create-modal')?.classList.contains('hidden')) {
      _gicaCloseCreateModal();
    }
  });
  $('gica-create-dept')?.addEventListener('change', e => {
    _gicaFilterLevelDropdown(e.target.value);
  });
  $('gica-create-level')?.addEventListener('change', e => {
    const dept = $('gica-create-dept').value;
    _gicaFilterPositionDropdown(dept, e.target.value);
  });
  $('gica-create-cancel')?.addEventListener('click', () => {
    _gicaConfirm(t('gicaResultCancelPrompt'), () => {
      _gicaClearCreateForm();
      _gicaCloseCreateModal();
    });
  });
  $('gica-create-confirm')?.addEventListener('click', () => {
    const fields = _gicaValidateCreateForm();
    if (!fields) return; // empty/invalid field — don't even show the confirm dialog
    _gicaConfirm(t('gicaResultSavePrompt'), () => _gicaSaveCreate(fields));
  });
}

// Generic employee-list modal — reused by the weekly BU cohort cards and the
// Assessment Schedule Timeline click-to-drill. `printOpts` sets the print header text.
// `dateRange` is optional — e.g. "6-12 July 2026" shown in parentheses after the heading.
function _gicaShowEmpListModal(headingText, printOpts, employees, dateRange, initialBu = '') {
  const modal = $('gica-buCohort-modal');
  const title = $('gica-buCohort-title');
  const body  = $('gica-buCohort-body');
  if (!modal || !body) return;

  modal._cohortAllEmployees = employees;
  modal._cohortBuFilter     = initialBu;
  modal._cohortPrintTitle   = printOpts.printTitle;
  modal._cohortPrintSub     = printOpts.printSub;
  // Per-modal filter state — reset each time the modal opens so previous drill-down
  // filters don't bleed into the next one.
  const filters = { dept: '', level: '', attempt: '', status: '', search: '' };

  const _applyFilters = rows => {
    const q = filters.search.trim().toLowerCase();
    return rows.filter(e => {
      if (filters.dept  && e.deptname !== filters.dept)  return false;
      if (filters.level && e.level    !== filters.level) return false;
      if (filters.attempt !== '' && String(e.attempt || 0) !== filters.attempt) return false;
      if (filters.status && (e.nextType || '') !== filters.status) return false;
      if (q && !(`${e.name || ''} ${e.empid || ''}`.toLowerCase().includes(q))) return false;
      return true;
    });
  };

  const _render = buFilter => {
    modal._cohortBuFilter = buFilter;
    const buRows   = buFilter ? employees.filter(e => e.bu === buFilter) : employees;
    const rows     = _applyFilters(buRows);
    modal._cohortEmployees = rows;
    const buSpan = buFilter
      ? ` <span style="color:${GICA_BU_COLORS[buFilter] || 'var(--accent)'};">· ${escapeHtml(buFilter)}</span>`
      : '';
    const rangePart = dateRange ? ` <span class="gica-modal-date-range">(${escapeHtml(dateRange)})</span>` : '';
    const peopleIcon = `<svg class="gica-modal-people-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.33 0-8 1.67-8 5v2h16v-2c0-3.33-4.67-5-8-5Z"/></svg>`;
    const countChip  = `<span class="gica-modal-people-count">${peopleIcon}${rows.length} ${escapeHtml(t('gicaPeople'))}</span>`;
    if (title) title.innerHTML = `${escapeHtml(headingText)}${rangePart} ${countChip}${buSpan}`;

    // Filter dropdown options come from the current BU cohort (buRows), not the
    // full employees list — so switching BU narrows Dept/Level choices to what
    // that BU actually has. Cross-cohort filters stay meaningful.
    const deptOpts    = [...new Set(buRows.map(e => e.deptname).filter(Boolean))].sort();
    const levelOpts   = GICA_LEVEL_ORDER.filter(lv => buRows.some(e => e.level === lv));
    const attemptOpts = [...new Set(buRows.map(e => e.attempt || 0))].sort((a, b) => a - b);
    // Status = nextType value shown in the emp table's Status column (Retest / Review / Initial)
    const statusOrder = ['Initial', 'Retest', 'Review'];
    const presentStatus = new Set(buRows.map(e => e.nextType).filter(Boolean));
    const statusOpts    = statusOrder.filter(s => presentStatus.has(s));
    const optHtml = (list, current) => list.map(v =>
      `<option value="${escapeHtml(v)}"${v === current ? ' selected' : ''}>${escapeHtml(v)}</option>`
    ).join('');
    const attemptOptHtml = attemptOpts.map(v =>
      `<option value="${v}"${String(v) === filters.attempt ? ' selected' : ''}>${v}</option>`
    ).join('');
    // Filters sit on the RIGHT of the same row as the fail-stats chips. Flex row
    // with fail-stats taking natural width on the left and the filter cluster
    // pushed right. The filter dropdowns + search share one line — wraps only if
    // the modal narrows below ~700px.
    const filtersInline = `
      <div class="gica-cohort-filters no-print" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:flex-end;">
        <select id="gica-cohort-filterDept" class="filter-select" style="min-width:140px;">
          <option value="">${escapeHtml(t('gicaAllDepts') || 'All Departments')}</option>
          ${optHtml(deptOpts, filters.dept)}
        </select>
        <select id="gica-cohort-filterLevel" class="filter-select" style="min-width:120px;">
          <option value="">${escapeHtml(t('gicaAllLevels') || 'All Levels')}</option>
          ${optHtml(levelOpts, filters.level)}
        </select>
        <select id="gica-cohort-filterAttempt" class="filter-select" style="min-width:110px;">
          <option value="">${escapeHtml(t('gicaAllAttempts') || 'All Attempts')}</option>
          ${attemptOptHtml}
        </select>
        <select id="gica-cohort-filterStatus" class="filter-select" style="min-width:110px;">
          <option value="">${escapeHtml(t('gicaAllStatus') || 'All Status')}</option>
          ${optHtml(statusOpts, filters.status)}
        </select>
        <input type="text" id="gica-cohort-filterSearch" class="filter-select"
               style="min-width:180px;"
               placeholder="${escapeHtml(t('gicaSearchPh') || 'Search by name / ID')}"
               value="${escapeHtml(filters.search)}" />
      </div>`;
    const statsPlusFiltersRow = `
      <div class="gica-cohort-toolbar no-print"
           style="display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin:8px 0 10px;">
        <div class="gica-sched-fail-stats" style="flex:0 1 auto;">${_gicaFailStatsHtml(rows)}</div>
        ${filtersInline}
      </div>`;

    // Capture whether search was focused before we blow away the DOM, so typing
    // survives the re-render (each keystroke re-renders the whole body).
    const searchWasFocused = document.activeElement
      && document.activeElement.id === 'gica-cohort-filterSearch';

    body.innerHTML = _gicaSchedBuCardsHtml(employees, buFilter, 'gica-cohort-bu-bar')
      + statsPlusFiltersRow
      + `<div class="gica-drill-table-wrap">${_gicaEmpTableHtml(rows, { sortable: false })}</div>`;
    const bar = body.querySelector('#gica-cohort-bu-bar');
    if (bar) {
      bar.addEventListener('click', e => {
        const card = e.target.closest('.gica-sched-bu-card');
        if (!card) { _render(''); return; }
        const bu = card.dataset.bu;
        _render(modal._cohortBuFilter === bu ? '' : bu);
      });
    }
    const deptSel    = body.querySelector('#gica-cohort-filterDept');
    const levelSel   = body.querySelector('#gica-cohort-filterLevel');
    const attemptSel = body.querySelector('#gica-cohort-filterAttempt');
    const statusSel  = body.querySelector('#gica-cohort-filterStatus');
    const searchInp  = body.querySelector('#gica-cohort-filterSearch');
    if (deptSel)    deptSel.onchange    = () => { filters.dept    = deptSel.value;    _render(buFilter); };
    if (levelSel)   levelSel.onchange   = () => { filters.level   = levelSel.value;   _render(buFilter); };
    if (attemptSel) attemptSel.onchange = () => { filters.attempt = attemptSel.value; _render(buFilter); };
    if (statusSel)  statusSel.onchange  = () => { filters.status  = statusSel.value;  _render(buFilter); };
    if (searchInp) {
      searchInp.oninput = () => { filters.search = searchInp.value; _render(buFilter); };
      if (searchWasFocused) {
        searchInp.focus();
        searchInp.setSelectionRange(searchInp.value.length, searchInp.value.length);
      }
    }
  };

  _render(initialBu);
  modal.classList.remove('hidden');
}

function _gicaShowBuCohortModal(bu, employees) {
  _gicaShowEmpListModal(
    `${bu} — ${t('gicaMustAttendWeek')}`,
    { printTitle: `${t('gicaEmpListForAssessment')} — ${bu}`, printSub: t('gicaMustAttendWeek') },
    employees,
  );
}

// Format a bucket's start/end as a human-readable date range for the drill modal header.
// Weekly: "6-12 July 2026" (same month) / "29 June - 5 July 2026" (crosses month)
// Monthly: "July 2026" (full month) — otherwise falls back to day range
function _gicaBucketDateRange(bucket) {
  const start = bucket && bucket.start;
  const end   = bucket && bucket.end;
  if (!start || !end) return '';
  const localeMap = { th: 'th-TH', en: 'en-US', lo: 'lo-LA', vi: 'vi-VN' };
  const locale    = localeMap[currentLang] || 'en-US';
  const yearAdj   = currentLang === 'th' ? 543 : 0;
  const monthOf   = d => d.toLocaleDateString(locale, { month: 'long' });
  const sameMonth = start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth();
  const sameYear  = start.getFullYear() === end.getFullYear();
  const endYear   = end.getFullYear() + yearAdj;
  const startYear = start.getFullYear() + yearAdj;
  if (sameMonth) {
    const lastDay = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
    if (start.getDate() === 1 && end.getDate() === lastDay) return `${monthOf(end)} ${endYear}`;
    return `${start.getDate()}-${end.getDate()} ${monthOf(end)} ${endYear}`;
  }
  if (sameYear) {
    return `${start.getDate()} ${monthOf(start)} - ${end.getDate()} ${monthOf(end)} ${endYear}`;
  }
  return `${start.getDate()} ${monthOf(start)} ${startYear} - ${end.getDate()} ${monthOf(end)} ${endYear}`;
}

// Click-to-drill from an Assessment Schedule Timeline bar → list the people behind it.
// datasetIndex: 0 = Total, 1 = On-time Pass, 2 = On-time Fail, 3 = Overdue.
function _gicaShowSchedTimelineDrill(bucket, datasetIndex) {
  let emps, catLabel;
  if (datasetIndex === 1)      { emps = bucket.passEmps;     catLabel = t('gicaLegendOnTimePass'); }
  else if (datasetIndex === 2) { emps = bucket.failEmps;     catLabel = t('gicaLegendOnTimeFail'); }
  else if (datasetIndex === 3) { emps = bucket.overdueEmps;  catLabel = t('gicaLegendOverdue'); }
  else { // Total — union of every category, de-duped (a person can be double-counted across segments)
    const seen = new Set();
    emps = [];
    [...bucket.passEmps, ...bucket.failEmps, ...bucket.overdueEmps, ...bucket.upcomingEmps].forEach(e => {
      const k = `${e.bu}|${e.empid}`;
      if (!seen.has(k)) { seen.add(k); emps.push(e); }
    });
    catLabel = t('gicaLegendTotal');
  }
  if (!emps.length) return;
  const heading   = `${catLabel} · ${bucket.label}`;
  const dateRange = _gicaBucketDateRange(bucket);
  _gicaShowEmpListModal(
    heading,
    { printTitle: t('gicaEmpListForAssessment'), printSub: `${heading}${dateRange ? ` (${dateRange})` : ''}` },
    emps,
    dateRange,
  );
}

function _gicaBuCohortPrint() {
  const modal = $('gica-buCohort-modal');
  if (!modal || !modal._cohortEmployees) return;
  const rows = modal._cohortEmployees;
  const overlay = document.getElementById('gica-print-overlay') || (() => {
    const el = document.createElement('div');
    el.id = 'gica-print-overlay';
    document.body.appendChild(el);
    return el;
  })();
  const printDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  const printTitle = modal._cohortPrintTitle || t('gicaEmpListForAssessment');
  const printSub   = modal._cohortPrintSub   || t('gicaMustAttendWeek');
  overlay.innerHTML = `
    <div class="gica-print-header">
      <div style="font-size:1rem;font-weight:700;">${escapeHtml(printTitle)}</div>
      <div style="font-size:0.78rem;color:#555;margin-top:3px;">${escapeHtml(printSub)} · Total: ${rows.length} employees · Report Date: ${printDate}</div>
    </div>
    ${_gicaFailStatsHtml(rows)}
    <div class="gica-drill-table-wrap">${_gicaEmpTableHtml(rows, { sortable: false })}</div>`;
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
  overlay.innerHTML = '';
}

// ── Wire controls (once) ──────────────────────────────────────────────────────
function _wireGicaControls() {
  const emps = _gicaData.employees || [];

  // Filter dropdowns
  const fillSelect = (id, values) => {
    const sel = $(id);
    if (!sel) return;
    const first = sel.options[0];
    sel.innerHTML = '';
    sel.appendChild(first);
    values.forEach(v => {
      const o = document.createElement('option');
      o.value = v; o.textContent = v;
      sel.appendChild(o);
    });
  };
  // BU-scoped user: only their own BU is a legal filter value. Force-select it
  // and disable the dropdown so they can't switch away (backend also rejects
  // writes to other BUs; this is the UI half).
  const buOptions = _currentUserBu ? [_currentUserBu] : sortBus(_gicaData.bus || []);
  fillSelect('gica-filterBu', buOptions);
  const buSel = $('gica-filterBu');
  if (buSel && _currentUserBu) {
    buSel.value = _currentUserBu;
    buSel.disabled = true;
    buSel.title = `จำกัดสิทธิ์: ${_currentUserBu} เท่านั้น`;
    _gicaTableState.filters.bu = _currentUserBu;
  }
  fillSelect('gica-filterGrade', GICA_GRADES);
  const scopedEmps = _currentUserBu ? emps.filter(e => e.bu === _currentUserBu) : emps;
  fillSelect('gica-filterDept', [...new Set(scopedEmps.map(e => e.deptname).filter(Boolean))].sort());
  fillSelect('gica-filterLevel', GICA_LEVEL_ORDER.filter(lv => scopedEmps.some(e => e.level === lv)));
  fillSelect('gica-filterType', ['Retest', 'Review']);

  const bind = (id, key) => {
    const el = $(id);
    if (el) el.onchange = () => { _gicaTableState.filters[key] = el.value; _gicaTableState.page = 1; renderGicaTable(); };
  };
  bind('gica-filterBu', 'bu');
  bind('gica-filterGrade', 'grade');
  bind('gica-filterDept', 'dept');
  bind('gica-filterLevel', 'level');
  bind('gica-filterType', 'type');
  const searchEl = $('gica-filterSearch');
  if (searchEl) searchEl.oninput = () => { _gicaTableState.filters.search = searchEl.value; _gicaTableState.page = 1; renderGicaTable(); };

  // Pagination
  const sizeEl = $('gica-pageSize');
  if (sizeEl) sizeEl.onchange = () => { _gicaTableState.pageSize = +sizeEl.value; _gicaTableState.page = 1; renderGicaTable(); };
  const prevEl = $('gica-prevPage');
  if (prevEl) prevEl.onclick = () => { if (_gicaTableState.page > 1) { _gicaTableState.page--; renderGicaTable(); } };
  const nextEl = $('gica-nextPage');
  if (nextEl) nextEl.onclick = () => {
    const pages = Math.max(1, Math.ceil(_gicaFilteredEmployees().length / _gicaTableState.pageSize));
    if (_gicaTableState.page < pages) { _gicaTableState.page++; renderGicaTable(); }
  };

}

// =============================================================================

init().catch(err => {
  console.error(err);
  show($('loginPanel'));
  startLoginParticles();
});

// =============================================================================
// AUDIT MODULE
// Data comes from /api/audit-excel (Flask → Audit_Monitoring.xlsx via
// MANAGER_REFRESH_TOKEN). One fetch per session, sub-tab views over the
// same cached payload (Dashboard / Plan / Template / Execution / Finding-CAR),
// following the compute → html → mount → render layering used by
// GICA. Reachable by qe_audit (Auditor) / qe_auditee (Auditee) / admin per the
// tab-visibility gate above. Most writes are qe_audit/admin only (server-
// enforced) — the one exception is the bulk Respond endpoint, which qe_auditee
// can also call (see canManage vs canRespond in _auditPlanActionBtn).
// =============================================================================

const AUDIT_BUS = ['G1', 'G2', 'G3', 'G4', 'TRM', 'EA'];
const AUDIT_SEVERITY_COLOR = { Minor: 'warn', Major: 'danger', Critical: 'danger' };
const AUDIT_STATUS_COLOR   = { Open: 'danger', Responded: 'warn', Approved: 'ok',
                                Planned: 'muted', Completed: 'ok',
                                Issued: 'danger', 'Pending Approval': 'warn', Cancelled: 'muted' };
// Fixed rating scale for every checklist item at Execution time — no weighted
// score, no Pass/Fail. Mirrors config.py's AUDIT_EXECUTION_RATINGS.
const AUDIT_EXECUTION_RATINGS = ['Conformity', 'Major Non-Conformity', 'Minor Non-Conformity', 'OFI'];
const AUDIT_RATING_COLOR = {
  'Conformity': 'ok', 'Major Non-Conformity': 'danger',
  'Minor Non-Conformity': 'warn', 'OFI': 'muted',
};
// Plan statuses where Execution has actually produced a result — gates the
// Report column icon in the Plan table (see _auditReportBtnHtml).
const AUDIT_REPORT_STATUSES = ['Issued', 'Pending Approval', 'Completed'];

let _auditData = { templates: [], plans: [], executions: [], findings: [] };
let _auditLoaded = false;
let _auditActiveSubtab = 'dashboard';
let _auditExecutionPlanId = null;   // which Plan is currently open in the Execution sub-tab
let _auditApproveTargetId = null;   // FindingID pending in the per-finding Approve modal

// Dashboard Category/Year filters — live in the sub-tab bar row (top-right),
// apply only to the Dashboard cards. Year is read from PlanID's first 4 chars
// ('YYYY-MM-NNNN' format), not a real column.
let _auditDashCategory = 'all';
let _auditDashYear = 'all';

// Row 3 "Audit Trend" chart instance + its KPI target (Target Compliance %,
// All BU only) — frontend-only, persisted to localStorage (no Excel/backend
// table for this, unlike GICA's kpi_g1...kpi_trm tables).
let _auditTrendChart = null;
let _auditKpiTarget = Number(localStorage.getItem('auditKpiTargetCompliance')) || 80;

function _auditBadge(text, kind) {
  return `<span class="badge ${kind || 'muted'}">${escapeHtml(text || '—')}</span>`;
}

// Reuses GICA's display format ('11 Jul 2026') for consistency across the app.
function _auditFmtDate(iso) {
  return _gicaFmtDate(iso);
}

function _auditDaysSince(iso) {
  if (!iso) return null;
  const d = new Date(String(iso).slice(0, 10));
  if (isNaN(d.getTime())) return null;
  return Math.floor((Date.now() - d.getTime()) / 86400000);
}

// Groups checklist item rows by Category+Version (one specific Form *version*)
// — used wherever code just needs "all items belonging to this exact version"
// (e.g. resolving a Plan's linked Template name, joining Execution rows).
// AuditPlan pins a version via AuditTitle(=Category)+FormVersion, not a
// TemplateID FK — there is no single-row PK column on AuditTemplate.
function _auditTemplateGroups(templates) {
  const byKey = {};
  templates.forEach(t => {
    const category = String(t.Category || '').trim();
    const version = t.Version;
    if (!category || version === null || version === undefined || version === '') return;
    const key = category + '|' + version;
    if (!byKey[key]) byKey[key] = { category, version, templateName: t.TemplateName, items: [] };
    byKey[key].items.push(t);
  });
  return Object.values(byKey).sort((a, b) =>
    a.category.localeCompare(b.category) || (a.version - b.version));
}

// Groups checklist item rows by Code (the stable Form identity across edits —
// Google/MS Forms model). Each group exposes only the LATEST version's items
// for display, plus the full per-version breakdown for history/Edit-as-new-version.
function _auditFormGroups(templates) {
  const byCode = {};
  templates.forEach(t => {
    const code = String(t.Code || '').trim();
    if (!code) return;  // skip legacy rows with no Code (pre-versioning data)
    (byCode[code] = byCode[code] || []).push(t);
  });
  return Object.entries(byCode).map(([code, rows]) => {
    const byVersion = {};
    rows.forEach(r => {
      const v = r.Version || 1;
      (byVersion[v] = byVersion[v] || []).push(r);
    });
    const versions = Object.keys(byVersion).map(Number).sort((a, b) => b - a);
    const latestVersion = versions[0];
    const latestItems = (byVersion[latestVersion] || [])
      .slice().sort((a, b) => (a.ItemNo ?? 0) - (b.ItemNo ?? 0));
    const first = latestItems[0] || rows[0];
    return {
      code,
      templateName: first.TemplateName,
      category:     first.Category,
      latestVersion,
      latestItems,
      versions,
      byVersion,
      isActive: latestItems.some(it => it.Active),
    };
  }).sort((a, b) => String(a.templateName || '').localeCompare(String(b.templateName || '')));
}

// ── Entry point ───────────────────────────────────────────────────────────────
async function initAuditTab() {
  if (_auditLoaded) return;
  const loadingEl = $('audit-loading');
  const errorEl   = $('audit-error');
  const dashEl    = $('audit-dashboard');
  if (loadingEl) loadingEl.classList.remove('hidden');
  if (errorEl)   errorEl.classList.add('hidden');
  if (dashEl)    dashEl.classList.add('hidden');
  try {
    const data = await api('/api/audit-excel');
    if (data.error) throw new Error(data.error);
    _auditData = data;
    _auditLoaded = true;

    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');
    requestAnimationFrame(syncAuditSubtabTop);

    // Auditee sees Dashboard / Audit Plan / Finding-CAR only — no Template
    // (Auditor-only: managing checklist forms is not an Auditee concern).
    if (currentRole === 'qe_auditee') {
      dashEl.querySelector('.audit-subtab-btn[data-audit-subtab="template"]')?.classList.add('hidden');
    }

    dashEl.querySelectorAll('.audit-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => _auditSwitchSubtab(btn.dataset.auditSubtab));
    });
    _wireAuditApproveModal();
    _wireAuditPlanRespondModal();
    _wireAuditPlanApprovalModal();
    _wireAuditPlanCreateModal();
    _wireAuditCancelPlanModal();
    _wireAuditReportModal();
    _wireAuditFormModal();
    _wireAuditFormDetailModal();
    _wireAuditDashFilters();
    document.addEventListener('keydown', _auditExecutionEscHandler);
    document.addEventListener('keydown', _auditFormDetailEscHandler);
    document.addEventListener('keydown', _auditTopNcEscHandler);

    _populateAuditDashFilters();
    renderAuditDashboard();
    renderAuditPlan();
    renderAuditTemplate();
    renderAuditExecution();
    renderAuditFinding();
  } catch (err) {
    console.error('[AUDIT]', err);
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.classList.remove('hidden');
      errorEl.innerHTML = `<p>โหลดข้อมูล Audit ไม่สำเร็จ: ${escapeHtml(err.message || '')}</p>
        <button onclick="_auditLoaded=false;initAuditTab();" style="margin-top:8px;">ลองใหม่</button>`;
    }
  }
}

async function _auditRefetch() {
  _auditLoaded = false;
  const data = await api('/api/audit-excel');
  _auditData = data;
  _auditLoaded = true;
  _populateAuditDashFilters();
  renderAuditDashboard();
  renderAuditPlan();
  renderAuditTemplate();
  renderAuditExecution();
  renderAuditFinding();
}

// Dashboard Category/Year filter options are derived from live Plan data, so
// re-derive (preserving the current selection where it's still valid) every
// time _auditData refreshes, not just once at load.
function _populateAuditDashFilters() {
  const plans = _auditData.plans || [];

  const catSel = $('audit-dash-filter-category');
  if (catSel) {
    const categories = Array.from(new Set(plans.map(p => p.AuditTitle).filter(Boolean))).sort();
    if (!categories.includes(_auditDashCategory)) _auditDashCategory = 'all';
    catSel.innerHTML = '<option value="all">All Categories</option>' +
      categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
    catSel.value = _auditDashCategory;
  }

  const yearSel = $('audit-dash-filter-year');
  if (yearSel) {
    const years = Array.from(new Set(plans
      .map(p => String(p.PlanID || '').slice(0, 4))
      .filter(y => /^\d{4}$/.test(y))))
      .sort((a, b) => b.localeCompare(a));
    if (!years.includes(_auditDashYear)) _auditDashYear = 'all';
    yearSel.innerHTML = '<option value="all">All Years</option>' +
      years.map(y => `<option value="${y}">${y}</option>`).join('');
    yearSel.value = _auditDashYear;
  }
}

function _wireAuditDashFilters() {
  $('audit-dash-filter-category')?.addEventListener('change', e => {
    _auditDashCategory = e.target.value;
    renderAuditDashboard();
  });
  $('audit-dash-filter-year')?.addEventListener('change', e => {
    _auditDashYear = e.target.value;
    renderAuditDashboard();
  });
}

function _auditSwitchSubtab(subtab) {
  _auditActiveSubtab = subtab;
  document.querySelectorAll('.audit-subtab-btn').forEach(b =>
    b.classList.toggle('gica-subtab-btn--active', b.dataset.auditSubtab === subtab));
  ['dashboard', 'plan', 'template', 'execution', 'finding'].forEach(key => {
    const panelId = 'audit-' + key + '-panel';
    $(panelId)?.classList.toggle('hidden', key !== subtab);
  });
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
// Same semantic palette as AUDIT_RATING_COLOR's badge classes (ok/danger/warn/muted),
// resolved to literal hex here because SVG stroke/fill needs a concrete color, not
// a class name — mirrors GICA_GRADE_COLORS' approach for its grade donuts.
const AUDIT_RATING_HEX = {
  'Conformity':           '#16a34a',
  'Major Non-Conformity': '#dc2626',
  'Minor Non-Conformity': '#f59e0b',
  'OFI':                  '#6b7280',
};
// Softer variant used only by the "Audit Trend" stacked-bar chart (and its
// header legend) — AUDIT_RATING_HEX's saturated 600-level tones read fine as
// small donut/badge accents but feel heavy filling large bar areas.
const AUDIT_TREND_RATING_HEX = {
  'Conformity':           '#34d399',
  'Major Non-Conformity': '#fb7185',
  'Minor Non-Conformity': '#fbbf24',
  'OFI':                  '#94a3b8',
};
const AUDIT_RATING_SHORT = {
  'Conformity': 'Conformity', 'Major Non-Conformity': 'Major NC',
  'Minor Non-Conformity': 'Minor NC', 'OFI': 'OFI',
};

function _auditEmptyRatingCounts() {
  return { 'Conformity': 0, 'Major Non-Conformity': 0, 'Minor Non-Conformity': 0, 'OFI': 0 };
}

// Largest-remainder rounding — plain independent Math.round() per rating can
// sum to 99 or 101 (e.g. 1/3 of 3 items → 33+33+33=99), which makes two
// otherwise-equal-total stacked bars render at visibly different heights.
// This guarantees the 4 percentages always sum to exactly 100 (when tot > 0).
function _auditPctBreakdown(counts, tot) {
  const out = {};
  if (!tot) { AUDIT_EXECUTION_RATINGS.forEach(r => { out[r] = 0; }); return out; }
  const raw = AUDIT_EXECUTION_RATINGS.map(r => (counts[r] || 0) / tot * 100);
  const base = raw.map(Math.floor);
  const remainder = 100 - base.reduce((a, b) => a + b, 0);
  const order = raw.map((v, i) => ({ i, frac: v - base[i] })).sort((a, b) => b.frac - a.frac);
  const result = base.slice();
  for (let k = 0; k < remainder; k++) result[order[k].i]++;
  AUDIT_EXECUTION_RATINGS.forEach((r, i) => { out[r] = result[i]; });
  return out;
}

// Card 3 "Overall Status" — distinct hex per Plan Status (Planned/Cancelled both
// "muted" badge-wise, but need visually distinct donut slices, hence separate hues).
const AUDIT_PLAN_STATUS_LIST = ['Planned', 'Issued', 'Pending Approval', 'Completed', 'Cancelled'];
const AUDIT_PLAN_STATUS_HEX = {
  'Planned':          '#94a3b8',
  'Issued':           '#dc2626',
  'Pending Approval': '#f59e0b',
  'Completed':        '#16a34a',
  'Cancelled':        '#6b7280',
};

function _computeAuditDashboardVm(data) {
  // Category/Year filters (top-right of the sub-tab bar) — Category matches
  // Plan.AuditTitle, Year matches PlanID's first 4 chars ('YYYY-MM-NNNN').
  // Filtering plans first, then deriving executions only from the surviving
  // PlanIDs, keeps every card on this dashboard consistent with the filter.
  const allPlans = data.plans || [];
  const plans = allPlans.filter(p =>
    (_auditDashCategory === 'all' || p.AuditTitle === _auditDashCategory) &&
    (_auditDashYear === 'all' || String(p.PlanID || '').slice(0, 4) === _auditDashYear));
  const planIds = new Set(plans.map(p => p.PlanID));
  const executions = (data.executions || []).filter(e => planIds.has(e.PlanID));

  // Card 1: total audits + per-BU plan count (mini bar chart, BU-colored).
  // Each bar splits Completed (full color) vs not-yet-Completed (faded —
  // Planned/Issued/Pending Approval/Cancelled lumped into one segment).
  const planCountByBu = {};
  const planCompletedByBu = {};
  AUDIT_BUS.forEach(bu => { planCountByBu[bu] = 0; planCompletedByBu[bu] = 0; });
  plans.forEach(p => {
    if (!(p.BU in planCountByBu)) return;
    planCountByBu[p.BU]++;
    if (p.Status === 'Completed') planCompletedByBu[p.BU]++;
  });

  // Card 3 "Overall Status": tally of every Plan's Status, all BU, all time.
  const planStatusCounts = {};
  AUDIT_PLAN_STATUS_LIST.forEach(s => planStatusCounts[s] = 0);
  plans.forEach(p => { if (planStatusCounts[p.Status] !== undefined) planStatusCounts[p.Status]++; });

  // Card 2: all-time rating breakdown across every execution item ever recorded.
  // Reads ActualResult, not Score — Score is the immutable original rating,
  // ActualResult flips to "Conformity" once the Finding it produced is
  // Approved, so this reflects current (resolved) compliance, not history.
  const overallRatingCounts = _auditEmptyRatingCounts();
  let overallRatingTotal = 0;
  // Back face of the flip card: the immutable original Score, untouched by any
  // later Finding/CAR resolution — what the audit actually found at the time.
  const originalRatingCounts = _auditEmptyRatingCounts();
  let originalRatingTotal = 0;
  executions.forEach(e => {
    const result = e.ActualResult || e.Score;
    if (overallRatingCounts[result] !== undefined) {
      overallRatingCounts[result]++;
      overallRatingTotal++;
    }
    if (originalRatingCounts[e.Score] !== undefined) {
      originalRatingCounts[e.Score]++;
      originalRatingTotal++;
    }
  });

  // Row 2: Finding/CAR pipeline per BU — counts by Status (Open/Responded/
  // Approved) + the oldest still-open finding's age in days. Same
  // Category/Year filter as the rest of this dashboard, via planIds.
  const buFindingPipeline = {};
  AUDIT_BUS.forEach(bu => {
    const buFindings = (data.findings || []).filter(f => f.BU === bu && planIds.has(f.PlanID));
    const counts = { Open: 0, Responded: 0, Approved: 0 };
    let oldestAgingDays = null;
    buFindings.forEach(f => {
      if (counts[f.Status] !== undefined) counts[f.Status]++;
      if (f.Status !== 'Approved') {
        const days = _auditDaysSince(f.OpenedAt);
        if (days != null && (oldestAgingDays == null || days > oldestAgingDays)) oldestAgingDays = days;
      }
    });
    buFindingPipeline[bu] = { counts, total: buFindings.length, oldestAgingDays };
  });

  // Row 3: Audit Plan pipeline per BU — counts by Plan Status + completion
  // rate (Completed / total, all statuses including Cancelled counted in the
  // denominator, same as Card 1/3's all-BU totals).
  const buPlanPipeline = {};
  AUDIT_BUS.forEach(bu => {
    const buPlans = plans.filter(p => p.BU === bu);
    const counts = {};
    AUDIT_PLAN_STATUS_LIST.forEach(s => { counts[s] = 0; });
    buPlans.forEach(p => { if (counts[p.Status] !== undefined) counts[p.Status]++; });
    const total = buPlans.length;
    buPlanPipeline[bu] = { counts, total, completedPct: total ? Math.round((counts['Completed'] || 0) / total * 100) : 0 };
  });

  // Row 4: top recurring Major NC checklist item per BU — tallies Major
  // Non-Conformity hits only (by Score, the immutable original rating, same
  // "what was actually found" semantics buHistory's hasNC uses) grouped by
  // item text, resolved via each Plan's Category(=AuditTitle)+FormVersion
  // join into AuditTemplate (same join _computeAuditExecutionVm uses for the
  // Execution sub-tab).
  const buTopNC = {};
  AUDIT_BUS.forEach(bu => {
    const buPlans = plans.filter(p => p.BU === bu);
    const tally = {}; // itemText → { count, occurrences: [{planId, description}] }
    buPlans.forEach(p => {
      const itemTextByNo = {};
      (data.templates || [])
        .filter(t => t.Category === p.AuditTitle && t.Version === p.FormVersion)
        .forEach(t => { itemTextByNo[t.ItemNo] = t.ItemText; });
      executions.filter(e => e.PlanID === p.PlanID).forEach(e => {
        if (e.Score !== 'Major Non-Conformity') return;
        const text = itemTextByNo[e.ItemNo];
        if (!text) return;
        if (!tally[text]) tally[text] = { count: 0, occurrences: [] };
        tally[text].count++;
        const finding = (data.findings || []).find(f => f.ExecutionID === e.ExecutionID);
        tally[text].occurrences.push({ planId: p.PlanID, description: finding?.Description || '' });
      });
    });
    buTopNC[bu] = Object.entries(tally)
      .map(([itemText, d]) => ({ itemText, count: d.count, occurrences: d.occurrences }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  });

  // Row 5: every Plan per BU (within the same Category/Year filter as the rest
  // of this dashboard) that has execution rows, oldest → newest by PlanID —
  // full rating breakdown (% per Conformity/Major NC/Minor NC/OFI), Initial
  // audit (Score, immutable) vs Re-audit (ActualResult, post-CAR), per audit
  // occurrence. Feeds the per-BU audit-trend chart; grows on its own as new
  // Plans get executions, no extra wiring needed. `hasNC` (raw count, not the
  // rounded %) decides whether a Re-audit bar even exists for that occurrence —
  // audit logic: a clean Initial audit never produces a CAR/Re-audit.
  const buHistory = {};
  AUDIT_BUS.forEach(bu => {
    const buPlans = plans
      .filter(p => p.BU === bu)
      .sort((a, b) => String(a.PlanID || '').localeCompare(String(b.PlanID || '')));
    buHistory[bu] = buPlans.map(p => {
      const planExecs = executions.filter(e => e.PlanID === p.PlanID);
      if (!planExecs.length) return null;
      const originalCounts = _auditEmptyRatingCounts();
      const actualCounts = _auditEmptyRatingCounts();
      let tot = 0;
      planExecs.forEach(e => {
        const orig = e.Score;
        const act = e.ActualResult || e.Score;
        if (originalCounts[orig] !== undefined) originalCounts[orig]++;
        if (actualCounts[act] !== undefined) actualCounts[act]++;
        tot++;
      });
      const hasNC = (originalCounts['Major Non-Conformity'] || 0) + (originalCounts['Minor Non-Conformity'] || 0) > 0;
      return {
        planId: p.PlanID, total: tot, hasNC, planStatus: p.Status,
        originalPct: _auditPctBreakdown(originalCounts, tot),
        actualPct: _auditPctBreakdown(actualCounts, tot),
      };
    }).filter(Boolean);
  });

  return {
    totalAudits: plans.length,
    planCountByBu,
    planCompletedByBu,
    planStatusCounts,
    overallRatingCounts,
    overallRatingTotal,
    originalRatingCounts,
    originalRatingTotal,
    buFindingPipeline,
    buPlanPipeline,
    buTopNC,
    buHistory,
    kpiTarget: _auditKpiTarget,
  };
}

function _auditDashboardHtml(vm) {
  // Vertical SVG bar chart: one bar per BU, height ~ plan count, colored by that
  // BU's theme color — same technique as GICA's per-BU bar chart on the
  // "Total employees" card (_gicaSummaryHtml's buBarChart). Each bar stacks
  // Completed (full color, bottom) vs not-yet-Completed (faded, top) — all
  // non-Completed statuses lumped into one segment, not split further.
  const buBarChart = () => {
    const maxN = Math.max(1, ...AUDIT_BUS.map(bu => vm.planCountByBu[bu]));
    const W = 220, CH = 70, PAD = 8, LH = 16, TPAD = 14;
    const n = AUDIT_BUS.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.62);
    const bo = (slot - bw) / 2;
    const bars = AUDIT_BUS.map((bu, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      const count = vm.planCountByBu[bu];
      const completedCount = vm.planCompletedByBu[bu];
      const notCompletedCount = count - completedCount;
      const color = GICA_BU_COLORS[bu] || '#6b7280';
      if (!count) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="6.5" fill="var(--text-muted)">no data</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${bu}</text>`;
      }
      const totalH = Math.max(Math.round(count / maxN * CH), 3);
      const scale  = totalH / count;
      const completedH    = completedCount    > 0 ? Math.max(Math.round(completedCount * scale), 2)    : 0;
      const notCompletedH = Math.max(totalH - completedH, 0);
      const topY = TPAD + CH - totalH;
      const completedY    = TPAD + CH - completedH;
      const notCompletedY = completedY - notCompletedH;
      const clipId = `audit-bu-bar-clip-${bu}`;
      return `<g>
        <title>${bu} — Completed: ${completedCount}, Not Completed: ${notCompletedCount} (Total ${count})</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${totalH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">
          ${notCompletedH > 0 ? `<rect x="${x}" y="${notCompletedY}" width="${bw}" height="${notCompletedH}" fill="${color}" opacity="0.3"></rect>` : ''}
          ${completedH > 0 ? `<rect x="${x}" y="${completedY}" width="${bw}" height="${completedH}" fill="${color}"></rect>` : ''}
        </g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="8" font-weight="700" fill="${color}">${count}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${bu}</text>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" width="100%" style="display:block;margin-top:10px;overflow:visible;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  // Leader-line donut (same visual technique as GICA's donutLabeled/donutLabeledSm),
  // generalized over an arbitrary category list/color map so both the rating
  // donut (Card 2) and the plan-status donut (Card 3) can share one renderer.
  const _leaderDonut = (counts, tot, categories, colorOf, labelOf, opts, center) => {
    const { cx: CX, cy: CY, r: R, sw, leadOut, leadH, vbW, vbH, fsMain, fsSub, fsCenterMain, fsCenterSub, centerYOff, centerSubYOff } = opts;
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.0 : 0;
    let acc = 0;
    const segs = [], lines = [];
    categories.forEach(cat => {
      const v = counts[cat] || 0;
      if (!tot || !v) return;
      const color = colorOf(cat);
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx2 = CX + outerR * Math.cos(mid),         my2 = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + leadOut) * Math.cos(mid), ey = CY + (outerR + leadOut) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? leadH : -leadH), hy = ey;
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      const pct = Math.round(v / tot * 100);
      lines.push(`
        <line x1="${mx2.toFixed(1)}" y1="${my2.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${color}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${color}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${color}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="${fsMain}" font-weight="600" fill="var(--text)">${labelOf(cat)}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + fsMain + 2).toFixed(1)}" text-anchor="${anchor}" font-size="${fsSub}" fill="var(--text-muted)">(${pct}%)</text>`);
      acc += len;
    });
    const { value: centerValue, color: centerColor, sub: centerSub } = center(counts, tot);
    return `
      <svg viewBox="0 0 ${vbW} ${vbH}" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + centerYOff}" text-anchor="middle" font-size="${fsCenterMain}" font-weight="800" fill="${tot ? centerColor : 'var(--text-muted)'}">${tot ? centerValue : '—'}</text>
        <text x="${CX}" y="${CY + centerSubYOff}" text-anchor="middle" font-size="${fsCenterSub}" fill="var(--text-muted)" letter-spacing="0.5">${centerSub}</text>
      </svg>`;
  };

  const _complianceCenter = (counts, tot) => {
    const pct = tot ? Math.round((counts['Conformity'] || 0) / tot * 100) : 0;
    return { value: pct + '%', color: pct >= 85 ? '#16a34a' : pct >= 60 ? '#f59e0b' : '#dc2626', sub: 'Compliance' };
  };
  const ratingDonut = (counts, tot, opts) =>
    _leaderDonut(counts, tot, AUDIT_EXECUTION_RATINGS, r => AUDIT_RATING_HEX[r], r => AUDIT_RATING_SHORT[r], opts, _complianceCenter);

  const _completionCenter = (counts, tot) => {
    const pct = tot ? Math.round((counts['Completed'] || 0) / tot * 100) : 0;
    return { value: pct + '%', color: pct >= 85 ? '#16a34a' : pct >= 60 ? '#f59e0b' : '#dc2626', sub: 'Completion Rate' };
  };
  const statusDonut = (counts, tot, opts) =>
    _leaderDonut(counts, tot, AUDIT_PLAN_STATUS_LIST, s => AUDIT_PLAN_STATUS_HEX[s], s => s, opts, _completionCenter);

  const bigDonutOpts  = { cx: 145, cy: 102, r: 50, sw: 20, leadOut: 12, leadH: 18, vbW: 300, vbH: 205, fsMain: 9.5, fsSub: 8.5, fsCenterMain: 22, fsCenterSub: 8.5, centerYOff: 8, centerSubYOff: 20 };

  // Shared by both faces of the Overall Score flip card — front reads
  // ActualResult (current state), back reads the immutable original Score.
  const ratingFaceHtml = (label, counts, tot) => `
    <div class="stat-card__label">${label}</div>
    ${ratingDonut(counts, tot, bigDonutOpts)}`;

  // Row 2: Finding/CAR pipeline per BU — segmented bar (Open/Responded/
  // Approved) + breakdown rows + oldest-still-open aging badge. Gated on
  // planCountByBu (has this BU ever been audited within the filter), not on
  // having findings — zero findings with plans present is a real, positive
  // state ("nothing ever needed a CAR"), not "no data".
  const findingPipelineCardsHtml = AUDIT_BUS.map(bu => {
    const buColor = GICA_BU_COLORS[bu] || 'var(--text)';
    if (!vm.planCountByBu[bu]) {
      return `<div class="stat-card stat-card--empty" style="min-width:0;">
        <div class="bu-name u-muted">${bu}</div>
        <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— no data —</div>
      </div>`;
    }
    const { counts, total, oldestAgingDays } = vm.buFindingPipeline[bu];
    const pct = k => total ? Math.round((counts[k] || 0) / total * 100) : 0;
    return `<div class="stat-card" style="min-width:0;">
      <div class="bu-head">
        <span class="bu-name" style="color:${buColor};">${bu}</span>
        <span class="u-muted" style="font-size:0.7rem;font-weight:600;">${total} Finding${total === 1 ? '' : 's'}</span>
      </div>
      ${total ? `<div class="pbar pbar--6" style="display:flex;margin-top:10px;" title="Open: ${counts.Open}, Responded: ${counts.Responded}, Approved: ${counts.Approved}">
        ${counts.Open > 0 ? `<div class="pbar__fill" style="background:var(--danger);width:${pct('Open')}%;border-radius:0;"></div>` : ''}
        ${counts.Responded > 0 ? `<div class="pbar__fill" style="background:var(--warn);width:${pct('Responded')}%;border-radius:0;"></div>` : ''}
        ${counts.Approved > 0 ? `<div class="pbar__fill" style="background:var(--ok);width:${pct('Approved')}%;border-radius:0;"></div>` : ''}
      </div>` : `<div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— ไม่มี Finding —</div>`}
      <div class="stat-card__sub">
        <div class="u-between" style="font-size:0.74rem;"><span class="u-muted">Open</span><strong style="color:var(--danger);">${counts.Open}</strong></div>
        <div class="u-between" style="font-size:0.74rem;"><span class="u-muted">Responded</span><strong style="color:var(--warn);">${counts.Responded}</strong></div>
        <div class="u-between" style="font-size:0.74rem;"><span class="u-muted">Approved</span><strong style="color:var(--ok);">${counts.Approved}</strong></div>
      </div>
      <div class="stat-card__footer u-between">
        <span>ค้างนานสุด</span>
        ${oldestAgingDays == null ? '<strong class="u-muted">—</strong>' : `<strong style="color:var(--danger);">${oldestAgingDays} วัน</strong>`}
      </div>
    </div>`;
  }).join('');

  // Row 3: Audit Plan pipeline per BU — 5-status breakdown + completion rate bar.
  const planPipelineCardsHtml = AUDIT_BUS.map(bu => {
    const buColor = GICA_BU_COLORS[bu] || 'var(--text)';
    const pp = vm.buPlanPipeline[bu];
    if (!pp.total) {
      return `<div class="stat-card stat-card--empty" style="min-width:0;">
        <div class="bu-name u-muted">${bu}</div>
        <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— no data —</div>
      </div>`;
    }
    return `<div class="stat-card" style="min-width:0;">
      <div class="bu-head">
        <span class="bu-name" style="color:${buColor};">${bu}</span>
        <span class="u-muted" style="font-size:0.7rem;font-weight:600;">${pp.total} Plan${pp.total === 1 ? '' : 's'}</span>
      </div>
      <div class="stat-card__sub">
        ${AUDIT_PLAN_STATUS_LIST.map(s => `
        <div class="u-between" style="font-size:0.74rem;">
          <span class="u-muted" style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:${AUDIT_PLAN_STATUS_HEX[s]};display:inline-block;"></span>${s}</span>
          <strong>${pp.counts[s]}</strong>
        </div>`).join('')}
      </div>
      <div class="stat-card__footer">
        <div class="u-between" style="margin-bottom:4px;"><span>Completion rate</span><strong>${pp.completedPct}%</strong></div>
        <div class="pbar pbar--6"><div class="pbar__fill" style="background:var(--ok);width:${pp.completedPct}%;"></div></div>
      </div>
    </div>`;
  }).join('');

  // Row 4: top 3 recurring Major NC checklist items per BU — rank badge +
  // item text (truncated) + hit count. Gated on planCountByBu like Row 2; an
  // empty buTopNC with plans present means no Major NC has ever recurred —
  // good news, shown as a quiet message, not the muted "no data" empty-card state.
  const RANK_BG = ['var(--badge-danger-bg)', 'var(--badge-warn-bg)', 'var(--badge-muted-bg)'];
  const RANK_FG = ['var(--danger)', 'var(--warn)', 'var(--text-muted)'];
  const topNCCardsHtml = AUDIT_BUS.map(bu => {
    const buColor = GICA_BU_COLORS[bu] || 'var(--text)';
    if (!vm.planCountByBu[bu]) {
      return `<div class="stat-card stat-card--empty" style="min-width:0;">
        <div class="bu-name u-muted">${bu}</div>
        <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— no data —</div>
      </div>`;
    }
    const top = vm.buTopNC[bu];
    return `<div class="stat-card" style="min-width:0;">
      <div class="bu-head">
        <span class="bu-name" style="color:${buColor};">${bu}</span>
      </div>
      ${top.length ? `<div class="stat-card__sub stat-card__sub--flush">
        ${top.map((it, i) => `
        <div class="u-between audit-topnc-item" data-bu="${bu}" data-nc-idx="${i}" style="gap:8px;cursor:pointer;border-radius:4px;padding:2px 4px;margin:0 -4px;">
          <span style="display:flex;align-items:center;gap:8px;min-width:0;flex:1;">
            <span style="width:18px;height:18px;border-radius:50%;background:${RANK_BG[i]};color:${RANK_FG[i]};font-size:0.65rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i + 1}</span>
            <span style="font-size:0.74rem;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${escapeHtml(it.itemText)}</span>
          </span>
          <strong style="font-size:0.74rem;color:${RANK_FG[i]};flex-shrink:0;">×${it.count}</strong>
        </div>`).join('')}
      </div>` : `<div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— ไม่มี Major NC ที่พบซ้ำ —</div>`}
    </div>`;
  }).join('');

  return `
    <div class="stat-grid stat-grid--4">
      <div class="stat-card">
        <div class="stat-card__label">Total Audit</div>
        <div class="stat-card__value">${vm.totalAudits}</div>
        ${buBarChart()}
      </div>
      <div class="stat-card">
        ${ratingFaceHtml('Re-audit Score', vm.overallRatingCounts, vm.overallRatingTotal)}
      </div>
      <div class="stat-card">
        ${ratingFaceHtml('Initial Audit Score', vm.originalRatingCounts, vm.originalRatingTotal)}
      </div>
      <div class="stat-card">
        <div class="stat-card__label">Overall Status</div>
        ${statusDonut(vm.planStatusCounts, vm.totalAudits, bigDonutOpts)}
      </div>
    </div>
    <div class="stat-grid stat-grid--6">${findingPipelineCardsHtml}</div>
    <div class="stat-grid stat-grid--6">${planPipelineCardsHtml}</div>
    <div class="stat-grid stat-grid--6">${topNCCardsHtml}</div>
    <div class="card card--section">
      <div class="chart-header">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">Audit Trend — Initial Audit vs Re-audit</h3>
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
          <span class="u-muted" style="font-size:0.72rem;display:inline-flex;align-items:center;gap:14px;flex-wrap:wrap;">
            ${AUDIT_EXECUTION_RATINGS.map(r => `
            <span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;border-radius:2px;background:${AUDIT_TREND_RATING_HEX[r]};display:inline-block;"></span>${AUDIT_RATING_SHORT[r]}</span>`).join('')}
            <span style="display:inline-flex;align-items:center;gap:4px;"><span style="display:inline-block;width:14px;border-bottom:2px dashed #dc2626;"></span>Target ${vm.kpiTarget}%</span>
          </span>
          <button id="audit-kpi-setup-btn" class="audit-kpi-setup-btn" type="button" title="กำหนด Target Compliance %">
            <i class="ti ti-target-arrow" aria-hidden="true"></i> KPI Setup
          </button>
        </div>
      </div>
      <div class="chart-canvas-wrap" style="height:320px;"><canvas id="audit-trendChart"></canvas></div>
    </div>
    <div id="audit-kpi-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="audit-kpi-backdrop"></div>
      <div class="gica-modal__panel audit-kpi-modal__panel">
        <div class="gica-modal__head">
          <h4 style="margin:0;font-size:1rem;">KPI Setup</h4>
          <button class="gica-modal__close" id="audit-kpi-close" aria-label="ปิด">✕</button>
        </div>
        <div class="audit-kpi-modal__body">
          <p class="u-muted audit-kpi-modal__desc">Define Target Compliance % (All BU)</p>
          <div class="audit-kpi-row">
            <span class="audit-kpi-row__label">Target Compliance</span>
            <input type="range" class="audit-kpi-slider" min="0" max="100" step="5" value="${vm.kpiTarget}">
            <span class="audit-kpi-row__val" id="audit-kpi-row-val">${vm.kpiTarget}%</span>
          </div>
        </div>
        <div class="audit-form-modal__footer">
          <button class="audit-btn audit-btn--cancel" id="audit-kpi-cancel">Cancel</button>
          <button class="audit-btn audit-btn--confirm" id="audit-kpi-confirm">Confirm</button>
        </div>
      </div>
    </div>`;
}

function _mountAuditDashboard(html, vm) {
  const el = $('audit-dashboard-panel');
  if (!el) return;
  if (_auditTrendChart) { try { _auditTrendChart.destroy(); } catch (_) {} _auditTrendChart = null; }
  el.innerHTML = html;

  // Row 5: per-BU audit-occurrence trend — x-axis is "prepared in advance":
  // round #1 across every BU (GICA's BU_ORDER), then round #2 across every BU,
  // etc. up to the highest occurrence count any BU has reached. Each category
  // is ONE bar — "Initial audit" always exists when there's data; "Re-audit"
  // only exists when that occurrence actually had NC (audit logic: a clean
  // Initial audit never produces a CAR/Re-audit), so the bar count per
  // BU+round is 0 ("no data"), 1, or 2.
  // Native x ticks are hidden — labels are hand-drawn by _auditBarLabels so
  // the BU-name line can be colored per bar (green/red by KPI met), which
  // Chart.js's built-in multi-line ticks can't do (one color for the whole
  // tick). The round number isn't repeated per bar (redundant with the
  // "รอบ N" header drawn by _auditRoundDividers).
  // Each bar is a 4-segment stack (Conformity/Major NC/Minor NC/OFI,
  // AUDIT_RATING_HEX) — same stack-group technique as the Assessment
  // Schedule Timeline chart, just with a single stack id here.
  const cvs = $('audit-trendChart');
  if (cvs && typeof Chart !== 'undefined') {
    // Pre-reserve 4 rounds by default (all "no data" until audits happen) —
    // grows past 4 automatically the moment any BU reaches a 5th occurrence.
    const AUDIT_TREND_MIN_ROUNDS = 4;
    const maxRounds = Math.max(AUDIT_TREND_MIN_ROUNDS, ...BU_ORDER.map(bu => (vm.buHistory[bu] || []).length));

    const labels = [];      // kept blank — _auditBarLabels draws the real labels
    const catMeta = [];     // [{ bu, subLabel, met }] — met: true/false/null('no data')
    const series = {};
    AUDIT_EXECUTION_RATINGS.forEach(r => { series[r] = []; });
    const roundStartIdx = [], roundSpan = [];
    let idx = 0;
    for (let round = 0; round < maxRounds; round++) {
      const before = idx;
      BU_ORDER.forEach(bu => {
        const h = (vm.buHistory[bu] || [])[round];
        if (!h) {
          labels.push('');
          catMeta.push({ bu, subLabel: 'no data', met: null });
          AUDIT_EXECUTION_RATINGS.forEach(r => series[r].push(null));
          idx++;
          return;
        }
        labels.push('');
        catMeta.push({ bu, subLabel: 'Initial audit', met: (h.originalPct['Conformity'] || 0) >= _auditKpiTarget });
        AUDIT_EXECUTION_RATINGS.forEach(r => series[r].push(h.originalPct[r]));
        idx++;
        if (h.hasNC && h.planStatus === 'Completed') {
          labels.push('');
          catMeta.push({ bu, subLabel: 'Re-audit', met: (h.actualPct['Conformity'] || 0) >= _auditKpiTarget });
          AUDIT_EXECUTION_RATINGS.forEach(r => series[r].push(h.actualPct[r]));
          idx++;
        }
      });
      roundStartIdx.push(before);
      roundSpan.push(idx - before);
    }

    // Modern pill-stack look: round only the OUTER corners of each bar (top
    // of its topmost nonzero segment, bottom of its bottommost) — rounding
    // every segment's every corner would notch the seams between Conformity/
    // Major NC/Minor NC/OFI, which looks broken, not modern.
    // NB: _auditPctBreakdown fills every rating with 0 (not null) when that
    // rating has no items — only a true "no data" category is all-null — so
    // "has a segment" must check > 0, not != null, or a 0%-but-present rating
    // (commonly OFI) gets falsely treated as the top/bottom of the stack and
    // steals the rounding onto an invisible zero-height segment.
    const BAR_RADIUS = 8;
    const datasets = AUDIT_EXECUTION_RATINGS.map((r, ratingIdx) => ({
      label: AUDIT_RATING_SHORT[r], data: series[r],
      backgroundColor: AUDIT_TREND_RATING_HEX[r],
      hoverBackgroundColor: hexToRgba(AUDIT_TREND_RATING_HEX[r], 0.85),
      stack: 'main',
      barPercentage: 0.72, categoryPercentage: 0.78,
      borderSkipped: false,
      borderRadius: ctx => {
        const di = ctx.dataIndex;
        if (!(series[r][di] > 0)) return 0;
        let firstIdx = -1, lastIdx = -1;
        AUDIT_EXECUTION_RATINGS.forEach((rr, i) => {
          if (series[rr][di] > 0) { if (firstIdx === -1) firstIdx = i; lastIdx = i; }
        });
        const isBottom = ratingIdx === firstIdx, isTop = ratingIdx === lastIdx;
        return {
          topLeft: isTop ? BAR_RADIUS : 0, topRight: isTop ? BAR_RADIUS : 0,
          bottomLeft: isBottom ? BAR_RADIUS : 0, bottomRight: isBottom ? BAR_RADIUS : 0,
        };
      },
    }));

    const clrMuted = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#94a3b8';
    const KPI_MET_COLOR = '#16a34a', KPI_MISS_COLOR = '#dc2626';

    // Dashed divider between rounds + a "รอบ N" label centered over each
    // round's span — span width varies (1 or 2 bars per BU within a round),
    // hence the precomputed roundStartIdx/roundSpan rather than a fixed stride.
    const _auditRoundDividers = {
      id: 'auditRoundDividers',
      beforeDatasetsDraw(chart) {
        const { ctx, chartArea, scales: { x } } = chart;
        if (maxRounds < 2) return;
        ctx.save();
        ctx.strokeStyle = hexToRgba(clrMuted, 0.5);
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 3]);
        for (let r = 1; r < maxRounds; r++) {
          const boundaryIdx = roundStartIdx[r];
          const dividerX = (x.getPixelForTick(boundaryIdx - 1) + x.getPixelForTick(boundaryIdx)) / 2;
          ctx.beginPath();
          ctx.moveTo(dividerX, chartArea.top);
          ctx.lineTo(dividerX, chartArea.bottom);
          ctx.stroke();
        }
        ctx.restore();
      },
      afterDatasetsDraw(chart) {
        const { ctx, chartArea, scales: { x } } = chart;
        ctx.save();
        ctx.fillStyle = clrMuted;
        ctx.font = '600 10px sans-serif';
        ctx.textAlign = 'center';
        for (let r = 0; r < maxRounds; r++) {
          const startIdx = roundStartIdx[r], endIdx = startIdx + roundSpan[r] - 1;
          const centerX = (x.getPixelForTick(startIdx) + x.getPixelForTick(endIdx)) / 2;
          ctx.fillText(`รอบ ${r + 1}`, centerX, chartArea.top - 6);
        }
        ctx.restore();
      },
    };

    // Hand-drawn 2-line tick labels (native x ticks are hidden): line 1 =
    // "Initial audit"/"Re-audit"/"no data" (muted), line 2 = BU name, colored
    // green/red by whether that specific bar's Conformity % met the KPI target.
    const _auditBarLabels = {
      id: 'auditBarLabels',
      afterDatasetsDraw(chart) {
        const { ctx, chartArea, scales: { x } } = chart;
        ctx.save();
        ctx.textAlign = 'center';
        catMeta.forEach((m, i) => {
          const cx = x.getPixelForTick(i);
          ctx.fillStyle = clrMuted;
          ctx.font = '9px sans-serif';
          ctx.fillText(m.subLabel, cx, chartArea.bottom + 14);
          ctx.fillStyle = m.met === null ? clrMuted : (m.met ? KPI_MET_COLOR : KPI_MISS_COLOR);
          ctx.font = '700 10px sans-serif';
          ctx.fillText(m.bu, cx, chartArea.bottom + 28);
        });
        ctx.restore();
      },
    };

    _auditTrendChart = new Chart(cvs, {
      type: 'bar',
      plugins: [_auditRoundDividers, _auditBarLabels],
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 18, bottom: 36 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            filter: ctx => ctx.raw !== null,
            cornerRadius: 8,
            padding: 10,
            boxPadding: 4,
            titleFont: { weight: '600' },
            callbacks: {
              title: ctx => { const m = catMeta[ctx[0]?.dataIndex]; return m ? `${m.subLabel} · ${m.bu}` : ''; },
              label: ctx => `${ctx.dataset.label}: ${ctx.raw}%`,
            },
          },
          annotation: {
            annotations: {
              kpiLine: {
                type: 'line', yMin: _auditKpiTarget, yMax: _auditKpiTarget,
                borderColor: '#dc2626', borderWidth: 2, borderDash: [6, 4], borderCapStyle: 'round',
              },
            },
          },
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { display: false } },
          y: { stacked: true, beginAtZero: true, max: 100, grid: { color: hexToRgba(clrMuted, 0.2), drawTicks: false, borderDash: [3, 3] }, border: { display: false }, ticks: { color: clrMuted, padding: 8, callback: v => v + '%' } },
        },
      },
    });
  }

  // KPI Setup modal — single "Target Compliance %" slider, All BU only,
  // frontend-only (localStorage), redraws the chart's threshold line on Confirm.
  const kpiModal = $('audit-kpi-modal');
  if (kpiModal) {
    const closeKpiModal = () => kpiModal.classList.add('hidden');
    el.querySelector('#audit-kpi-setup-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      kpiModal.classList.remove('hidden');
    });
    kpiModal.querySelector('#audit-kpi-close')?.addEventListener('click', closeKpiModal);
    kpiModal.querySelector('#audit-kpi-cancel')?.addEventListener('click', closeKpiModal);
    kpiModal.querySelector('#audit-kpi-backdrop')?.addEventListener('click', closeKpiModal);
    const slider = kpiModal.querySelector('.audit-kpi-slider');
    const valEl = $('audit-kpi-row-val');
    slider?.addEventListener('input', () => { if (valEl) valEl.textContent = slider.value + '%'; });
    kpiModal.querySelector('#audit-kpi-confirm')?.addEventListener('click', () => {
      _auditKpiTarget = Number(slider.value);
      localStorage.setItem('auditKpiTargetCompliance', String(_auditKpiTarget));
      closeKpiModal();
      renderAuditDashboard();
    });
  }

  // Row 4: Top Major NC — click row → modal with descriptions per occurrence
  const topNcModal = $('audit-topnc-modal');
  if (topNcModal) {
    el.querySelectorAll('.audit-topnc-item').forEach(row => {
      row.addEventListener('click', () => {
        const bu = row.dataset.bu;
        const idx = Number(row.dataset.ncIdx);
        const item = (vm.buTopNC[bu] || [])[idx];
        if (!item) return;
        const bodyEl = topNcModal.querySelector('#audit-topnc-body');
        if (bodyEl) {
          bodyEl.innerHTML = item.occurrences.map((o, n) => `
            <div class="audit-topnc-occurrence">
              <div class="audit-topnc-occurrence__plan">Plan: ${escapeHtml(o.planId)}</div>
              <div class="audit-topnc-occurrence__desc">${o.description ? escapeHtml(o.description) : '<span class="u-muted">— ไม่มี Description —</span>'}</div>
            </div>`).join('');
        }
        topNcModal.classList.remove('hidden');
      });
    });
    const closeTopNc = () => topNcModal.classList.add('hidden');
    topNcModal.querySelector('#audit-topnc-close')?.addEventListener('click', closeTopNc);
    topNcModal.querySelector('#audit-topnc-backdrop')?.addEventListener('click', closeTopNc);
  }
}

function renderAuditDashboard() {
  const vm = _computeAuditDashboardVm(_auditData);
  _mountAuditDashboard(_auditDashboardHtml(vm), vm);
}

// ── Audit Plan ────────────────────────────────────────────────────────────────
function _computeAuditPlanVm(data) {
  const templateGroups = _auditTemplateGroups(data.templates || []);
  // PlanID is a string ('YYYY-MM-NNNN'), not a number — lexicographic order
  // already matches chronological order for this zero-padded format.
  const plans = (data.plans || []).slice()
    .sort((a, b) => String(b.PlanID || '').localeCompare(String(a.PlanID || '')));
  return { plans, templateGroups };
}

// Stacked badges (not comma-joined text) — one badge per filled-in auditor,
// 1 to 3, rendered vertically within the single table cell.
function _auditPlanAuditorsHtml(p) {
  const names = [p.Auditor1, p.Auditor2, p.Auditor3]
    .map(a => String(a || '').trim()).filter(Boolean);
  if (!names.length) return '—';
  return `<div style="display:flex;flex-direction:column;gap:4px;align-items:center;">
    ${names.map(n => `<span>${escapeHtml(n)}</span>`).join('')}
  </div>`;
}

// canManage (qe_audit/admin): create Plan, run Execution, Approve, Cancel.
// canRespond (qe_audit/qe_auditee/admin): only the Respond action — Auditee
// is the person being audited, not QE staff, and only ever fills the Respond form.
function _auditPlanActionBtn(p, canManage, canRespond) {
  const id = escapeHtml(p.PlanID);
  switch (p.Status) {
    case 'Planned':
      return canManage ? `<button class="audit-exec-open-btn" data-plan-id="${id}">เปิด Execution</button>` : '';
    case 'Issued':
      return canRespond ? `<button class="audit-plan-respond-btn" data-plan-id="${id}">Respond</button>` : '';
    case 'Pending Approval':
      return canManage ? `<button class="audit-plan-approval-btn" data-plan-id="${id}">Approval</button>` : '';
    default:
      return canManage ? `<button disabled class="audit-exec-open-btn" title="ปิดแล้ว">—</button>` : '';
  }
}

// Report column: becomes available once Execution has actually produced a
// result (Status left 'Planned') — Issued (NC found) and Completed (clean or
// fully closed-out) both qualify, per AUDIT_REPORT_STATUSES. 'Planned' (not
// executed yet) and 'Cancelled' (never executed) never show the icon.
function _auditReportBtnHtml(p) {
  if (!AUDIT_REPORT_STATUSES.includes(p.Status)) return '—';
  return `<button class="audit-report-btn" data-plan-id="${escapeHtml(p.PlanID)}" title="View Audit Report">📄</button>`;
}

function _auditPlanHtml(vm) {
  const canManage = ['qe_audit', 'admin'].includes(currentRole);
  const canRespond = ['qe_audit', 'qe_auditee', 'admin'].includes(currentRole);
  const rows = vm.plans.map(p => {
    const tg = vm.templateGroups.find(t => t.category === p.AuditTitle && t.version === p.FormVersion);
    const actionBtn = _auditPlanActionBtn(p, canManage, canRespond);
    const cancellable = canManage && p.Status === 'Planned';
    return `<tr${cancellable ? ` class="audit-plan-row--cancellable" data-plan-id="${escapeHtml(p.PlanID)}" title="คลิกเพื่อยกเลิก Plan นี้"` : ''}>
      <td class="drill-td">${escapeHtml(p.PlanID)}</td>
      <td class="drill-td">${escapeHtml(p.BU)}</td>
      <td class="drill-td">${escapeHtml(p.AuditTitle)}</td>
      <td class="drill-td" style="text-align:center;max-height:60px;overflow-y:auto;white-space:normal;word-break:break-word;">${escapeHtml(tg ? tg.templateName : '—')}</td>
      <td class="drill-td" style="text-align:center;">${p.FormVersion != null ? 'v' + escapeHtml(p.FormVersion) : '—'}</td>
      <td class="drill-td">${_auditFmtDate(p.ScheduledDate)}</td>
      <td class="drill-td" style="text-align:center;">${(p.Status === 'Completed' || p.Status === 'Cancelled') ? '—' : (_gicaDaysBadge(p.ScheduledDate) || '—')}</td>
      <td class="drill-td" style="text-align:center;">${_auditPlanAuditorsHtml(p)}</td>
      <td class="drill-td" style="text-align:center;">${_auditBadge(p.Status, AUDIT_STATUS_COLOR[p.Status])}</td>
      <td class="drill-td" style="text-align:center;">${actionBtn}</td>
      <td class="drill-td" style="text-align:center;">${_auditReportBtnHtml(p)}</td>
    </tr>`;
  }).join('') || `<tr><td class="drill-td" colspan="11">No audit plans yet</td></tr>`;

  return `
    <div class="stat-grid">
      <div class="card card--section">
        <div class="card-head u-between">
          <h3 style="margin:0;font-size:1rem;">Audit Plans</h3>
          ${canManage ? `<button id="audit-plan-open-create-btn" class="gica-kpi-btn gica-kpi-btn--confirm">+ Create Audit Plan</button>` : ''}
        </div>
        <div style="overflow-x:auto;">
          <table><thead><tr>
            <th class="drill-th">ID</th>
            <th class="drill-th">BU</th>
            <th class="drill-th">Title</th>
            <th class="drill-th" style="text-align:center;">Audit Template</th>
            <th class="drill-th" style="text-align:center;">Version</th>
            <th class="drill-th">Scheduled</th>
            <th class="drill-th" style="text-align:center;">Days Remaining</th>
            <th class="drill-th" style="text-align:center;">Auditor</th>
            <th class="drill-th" style="text-align:center;">Status</th>
            <th class="drill-th" style="text-align:center;">Execution</th>
            <th class="drill-th" style="text-align:center;">Report</th>
          </tr></thead><tbody>${rows}</tbody></table>
        </div>
      </div>
    </div>`;
}

function _mountAuditPlan(html) {
  const el = $('audit-plan-panel');
  if (!el) return;
  el.innerHTML = html;

  el.querySelector('#audit-plan-open-create-btn')?.addEventListener('click', _auditOpenPlanCreateModal);

  el.querySelectorAll('.audit-exec-open-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _auditExecutionPlanId = btn.dataset.planId;
      _auditSwitchSubtab('execution');
      renderAuditExecution();
    });
  });

  el.querySelectorAll('.audit-plan-respond-btn').forEach(btn => {
    btn.addEventListener('click', () => _auditOpenPlanRespondModal(btn.dataset.planId));
  });

  el.querySelectorAll('.audit-plan-approval-btn').forEach(btn => {
    btn.addEventListener('click', () => _auditOpenPlanApprovalModal(btn.dataset.planId));
  });

  el.querySelectorAll('.audit-report-btn').forEach(btn => {
    btn.addEventListener('click', () => _auditOpenReportModal(btn.dataset.planId));
  });

  el.querySelectorAll('.audit-plan-row--cancellable').forEach(tr => {
    tr.addEventListener('click', (e) => {
      if (e.target.closest('button')) return; // let the "เปิด Execution" button handle its own click
      _auditOpenCancelPlanModal(tr.dataset.planId);
    });
  });
}

function renderAuditPlan() {
  _mountAuditPlan(_auditPlanHtml(_computeAuditPlanVm(_auditData)));
}

// ── Audit Plan: Cancel confirm modal (row click, only while Status=Planned) ───
let _auditCancelTargetPlanId = null;

function _auditOpenCancelPlanModal(planId) {
  _auditCancelTargetPlanId = planId;
  const idEl = $('audit-plan-cancel-id');
  if (idEl) idEl.textContent = planId;
  $('audit-plan-cancel-error')?.classList.add('hidden');
  $('audit-plan-cancel-modal')?.classList.remove('hidden');
}

function _wireAuditCancelPlanModal() {
  const close = () => { $('audit-plan-cancel-modal')?.classList.add('hidden'); _auditCancelTargetPlanId = null; };
  $('audit-plan-cancel-close')?.addEventListener('click', close);
  $('audit-plan-cancel-back')?.addEventListener('click', close);
  $('audit-plan-cancel-backdrop')?.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('audit-plan-cancel-modal')?.classList.contains('hidden')) close();
  });

  $('audit-plan-cancel-confirm')?.addEventListener('click', async () => {
    const errEl = $('audit-plan-cancel-error');
    if (errEl) errEl.classList.add('hidden');
    if (!_auditCancelTargetPlanId) return;
    try {
      await api(`/api/audit/plans/${_auditCancelTargetPlanId}`, {
        method: 'PATCH', body: JSON.stringify({ Status: 'Cancelled' }),
      });
      close();
      await _auditRefetch();
      showMessage('Audit Plan ถูกยกเลิกแล้ว');
    } catch (err) {
      if (errEl) { errEl.textContent = err.message; errEl.classList.remove('hidden'); }
    }
  });
}

// ── Audit Report (ISO 19011-style formal document, printable) ────────────────
// Read-only — built entirely from the already-fetched _auditData (no new API
// call). Score (immutable, recorded at audit time) drives the Checklist
// Results/Executive Summary — same rationale as the Dashboard's "Original
// Score" card (see CLAUDE.md) — while the CAR table shows live Finding status
// since that legitimately evolves after the report is first generated.
function _computeAuditReportVm(data, planId) {
  const plan = (data.plans || []).find(p => p.PlanID === planId) || null;
  if (!plan) return { plan: null };

  const tg = _auditTemplateGroups(data.templates || [])
    .find(t => t.category === plan.AuditTitle && t.version === plan.FormVersion) || null;
  const templateItems = (data.templates || [])
    .filter(t => t.Category === plan.AuditTitle && t.Version === plan.FormVersion)
    .sort((a, b) => (a.ItemNo ?? 0) - (b.ItemNo ?? 0));

  const execByItem = {};
  (data.executions || []).filter(e => e.PlanID === planId).forEach(e => { execByItem[e.ItemNo] = e; });

  const items = templateItems.map(t => {
    const e = execByItem[t.ItemNo] || null;
    return {
      itemNo: t.ItemNo,
      itemText: t.ItemText,
      section: String(t.Section || '').trim(),
      score: e ? e.Score : '',
      comment: e ? e.Comment : '',
    };
  });

  const counts = _auditEmptyRatingCounts();
  let total = 0;
  items.forEach(it => { if (it.score && counts.hasOwnProperty(it.score)) { counts[it.score]++; total++; } });
  const pct = _auditPctBreakdown(counts, total);
  const compliancePct = total ? Math.round((counts['Conformity'] / total) * 100) : null;

  const findings = (data.findings || [])
    .filter(f => f.PlanID === planId)
    .sort((a, b) => (a.FindingID ?? 0) - (b.FindingID ?? 0));
  const ofiItems = items.filter(it => it.score === 'OFI');

  return { plan, tg, items, counts, pct, total, compliancePct, findings, ofiItems };
}

function _auditReportHtml(vm) {
  if (!vm.plan) return '<p class="u-muted">ไม่พบข้อมูล Audit Plan นี้</p>';
  const p = vm.plan;
  const auditors = [p.Auditor1, p.Auditor2, p.Auditor3].map(a => String(a || '').trim()).filter(Boolean);
  // Signature line always signs as Auditor1 (primary auditor of record), even
  // when a Plan has 2-3 auditors — the "Auditor(s)" meta row above still lists
  // everyone, but only one person signs the report.
  const primaryAuditor = String(p.Auditor1 || '').trim();
  const todayStr = _auditFmtDate(new Date().toISOString().slice(0, 10));
  const meetsTarget = vm.compliancePct != null && vm.compliancePct >= _auditKpiTarget;

  const metaRow = (label, value) => `
    <div class="audit-report-meta-row"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value || '—')}</dd></div>`;

  let _rptSection = null;
  const checklistRows = (vm.items.length ? vm.items.map((it, i) => {
    let out = '';
    if (it.section && it.section !== _rptSection) {
      _rptSection = it.section;
      out = `<tr class="audit-report-section-row"><td class="audit-report-section-title" colspan="3">${escapeHtml(it.section)}</td></tr>`;
    }
    return out + `<tr>
      <td class="audit-report-num">${i + 1}</td>
      <td>${escapeHtml(it.itemText)}</td>
      <td class="audit-report-result-cell">${escapeHtml(it.score || '—')}</td>
    </tr>`;
  }).join('') : `<tr><td colspan="3">This Form has no checklist items</td></tr>`);

  const carSection = vm.findings.length ? vm.findings.map((f, i) => `
    <div class="audit-report-finding">
      <div class="audit-report-finding__head">
        <span class="audit-report-finding__num">Finding #${i + 1}</span>
        <span class="audit-report-finding__badge">${escapeHtml(f.Severity)}</span>
        <span class="audit-report-finding__badge">${escapeHtml(f.Status)}</span>
      </div>
      <div class="audit-report-finding__row"><strong>Description:</strong>${escapeHtml(f.Description || '—')}</div>
      <div class="audit-report-finding__row"><strong>Root Cause:</strong>${escapeHtml(f.RootCause || '—')}</div>
      <div class="audit-report-finding__row"><strong>Corrective Action:</strong>${escapeHtml(f.CorrectiveAction || '—')}</div>
      <div class="audit-report-finding__row"><strong>Preventive Action:</strong>${escapeHtml(f.PreventiveAction || '—')}</div>
      <div class="audit-report-finding__row"><strong>Responsible Person:</strong>${escapeHtml(f.ResponsiblePerson || '—')}</div>
      <div class="audit-report-finding__row"><strong>Due Date:</strong>${_auditFmtDate(f.DueDate)}</div>
    </div>`).join('') : `<p>No nonconformities were identified during this audit.</p>`;

  const ofiSection = vm.ofiItems.length ? `
    <div class="audit-report-section">
      <h4>Opportunities for Improvement (OFI)</h4>
      <table class="audit-report-table audit-report-table--checklist">
        <colgroup><col style="width:26px;"><col style="width:55%;"><col></colgroup>
        <thead><tr><th class="audit-report-num">#</th><th>Audit Item</th><th>Auditor Comment</th></tr></thead>
        <tbody>${vm.ofiItems.map((it, i) => `
          <tr>
            <td class="audit-report-num">${i + 1}</td>
            <td>${escapeHtml(it.itemText)}</td>
            <td>${escapeHtml(it.comment || '—')}</td>
          </tr>`).join('')}</tbody>
      </table>
    </div>` : '';

  return `
    <div class="audit-report-doc" id="audit-report-doc-content">
      <div class="audit-report-header">
        <div class="audit-report-header__company">Nan Yang Textile</div>
        <div class="audit-report-header__title">Internal Audit Report</div>
        <div class="audit-report-header__plan">Plan ID: ${escapeHtml(p.PlanID)} &nbsp;·&nbsp; Report Generated: ${todayStr}</div>
      </div>

      <div class="audit-report-section">
        <h4>Audit Information</h4>
        <div class="audit-report-meta-grid">
          ${metaRow('Business Unit', p.BU)}
          ${metaRow('Department', p.Department)}
          ${metaRow('Audit Category', p.AuditTitle)}
          ${metaRow('Audit Form / Version', vm.tg ? `${vm.tg.templateName} (v${vm.tg.version})` : '—')}
          ${metaRow('Scheduled Date', _auditFmtDate(p.ScheduledDate))}
          ${metaRow('Auditor(s)', auditors.join(', '))}
          ${metaRow('Plan Status', p.Status)}
          ${metaRow('Plan ID', p.PlanID)}
        </div>
      </div>

      <div class="audit-report-section">
        <h4>Objective, Scope &amp; Criteria</h4>
        <p><strong>Objective:</strong> To determine the conformity of the audited area/process against the applicable audit criteria, and to identify opportunities for improvement.</p>
        <p><strong>Scope:</strong> ${escapeHtml(p.BU)} — ${escapeHtml(p.Department)} (${escapeHtml(p.AuditTitle)})</p>
        <p><strong>Criteria:</strong> ${vm.tg ? escapeHtml(vm.tg.templateName) + ' checklist, Version ' + escapeHtml(vm.tg.version) : '—'}</p>
      </div>

      <div class="audit-report-section">
        <h4>Executive Summary</h4>
        <div class="audit-report-summary-grid">
          ${AUDIT_EXECUTION_RATINGS.map(r => `
            <div class="audit-report-summary-cell"><strong>${vm.counts[r]}</strong><span>${AUDIT_RATING_SHORT[r]} (${vm.pct[r]}%)</span></div>`).join('')}
          <div class="audit-report-summary-cell"><strong>${vm.compliancePct != null ? vm.compliancePct + '%' : '—'}</strong><span>Overall Compliance</span></div>
        </div>
        <p>Total checklist items audited: <strong>${vm.total}</strong>. Target compliance: <strong>${_auditKpiTarget}%</strong> — <strong>${vm.compliancePct != null ? (meetsTarget ? 'Target Achieved' : 'Target Not Achieved') : 'N/A'}</strong>.</p>
      </div>

      <div class="audit-report-section audit-report-pagebreak">
        <h4>Checklist Results</h4>
        <table class="audit-report-table audit-report-table--checklist">
          <colgroup><col style="width:32px;"><col style="width:75%;"><col></colgroup>
          <thead><tr><th class="audit-report-num">#</th><th>Audit Item</th><th style="text-align:center;">Result</th></tr></thead>
          <tbody>${checklistRows}</tbody>
        </table>
      </div>

      ${ofiSection}

      <div class="audit-report-section audit-report-pagebreak">
        <h4>Nonconformity &amp; Corrective Action (CAR)</h4>
        ${carSection}
      </div>

      <div class="audit-report-sign-grid">
        <div class="audit-report-sign-block">
          <div class="audit-report-sign-line"></div>
          <div class="audit-report-sign-name">${escapeHtml(primaryAuditor || '—')}</div>
          <div class="audit-report-sign-role">Auditor</div>
        </div>
        <div class="audit-report-sign-block">
          <div class="audit-report-sign-line"></div>
          <div class="audit-report-sign-name">&nbsp;</div>
          <div class="audit-report-sign-role">Auditee / Department Representative</div>
        </div>
      </div>
    </div>`;
}

let _auditReportCurrentPlan = null; // set on open — _auditPrintReport reads BU/PlanID from this for the filename

function _auditOpenReportModal(planId) {
  const vm = _computeAuditReportVm(_auditData, planId);
  if (!vm.plan) return;
  _auditReportCurrentPlan = vm.plan;
  const bodyEl = $('audit-report-modal-body');
  if (bodyEl) bodyEl.innerHTML = _auditReportHtml(vm);
  $('audit-report-modal')?.classList.remove('hidden');
}

function _auditCloseReportModal() {
  $('audit-report-modal')?.classList.add('hidden');
  _auditReportCurrentPlan = null;
}

// Own print pipeline (separate overlay/body-class from the GICA schedule
// drill-down print above) so this document's own @page (A4 portrait) never
// clashes with GICA's (A4 landscape) — both can't share one @page rule.
function _auditPrintReport() {
  const doc = $('audit-report-doc-content');
  if (!doc) return;
  let overlay = document.getElementById('audit-report-print-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'audit-report-print-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = doc.outerHTML;

  // Browser "Save as PDF" in the print dialog suggests document.title as the
  // filename — there is no other hook for this with window.print(). Swap it
  // in for the duration of the print job only, then restore it.
  const originalTitle = document.title;
  const p = _auditReportCurrentPlan;
  if (p) document.title = `Audit Report_${p.BU}_${p.PlanID}`;

  document.body.classList.add('audit-report-print-mode');
  window.print();
  document.body.classList.remove('audit-report-print-mode');
  overlay.innerHTML = '';
  document.title = originalTitle;
}

function _wireAuditReportModal() {
  $('audit-report-modal-close')?.addEventListener('click', _auditCloseReportModal);
  $('audit-report-modal-backdrop')?.addEventListener('click', _auditCloseReportModal);
  $('audit-report-modal-done')?.addEventListener('click', _auditCloseReportModal);
  $('audit-report-modal-print')?.addEventListener('click', _auditPrintReport);
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('audit-report-modal')?.classList.contains('hidden')) _auditCloseReportModal();
  });
}

// ── Template ──────────────────────────────────────────────────────────────────
function _computeAuditTemplateVm(data) {
  return { forms: _auditFormGroups(data.templates || []) };
}

function _auditTemplateHtml(vm) {
  const canWrite = ['qe_audit', 'admin'].includes(currentRole);
  const rows = vm.forms.map(f => `
    <tr class="audit-form-row" data-code="${escapeHtml(f.code)}" style="cursor:pointer;">
      <td class="drill-td">${escapeHtml(f.templateName)}</td>
      <td class="drill-td">${escapeHtml(f.category)}</td>
      <td class="drill-td">${escapeHtml(f.code)}</td>
      <td class="drill-td" style="text-align:center;">v${f.latestVersion}</td>
      <td class="drill-td" style="text-align:center;">${f.latestItems.length}</td>
      <td class="drill-td" style="text-align:center;">${f.isActive ? _auditBadge('Active', 'ok') : _auditBadge('Inactive', 'muted')}</td>
    </tr>`).join('') || `<tr><td class="drill-td" colspan="6">No forms yet</td></tr>`;

  return `
    <div class="stat-grid">
      <div class="card card--section">
        <div class="card-head u-between">
          <h3 style="margin:0;font-size:1rem;">Checklist Forms</h3>
          ${canWrite ? `<button id="audit-form-open-create-btn" class="gica-kpi-btn gica-kpi-btn--confirm">+ Create New Form</button>` : ''}
        </div>
        <div style="overflow-x:auto;">
          <table><thead><tr>
            <th class="drill-th">Form Name</th><th class="drill-th">Category</th>
            <th class="drill-th">Code</th>
            <th class="drill-th" style="text-align:center;">Version</th>
            <th class="drill-th" style="text-align:center;">Items</th>
            <th class="drill-th" style="text-align:center;">Status</th>
          </tr></thead><tbody>${rows}</tbody></table>
        </div>
      </div>
    </div>`;
}

function _mountAuditTemplate(html, vm) {
  const el = $('audit-template-panel');
  if (!el) return;
  el.innerHTML = html;

  el.querySelector('#audit-form-open-create-btn')?.addEventListener('click', () => _auditOpenFormModal(null));

  el.querySelectorAll('.audit-form-row').forEach(tr => {
    tr.addEventListener('click', () => {
      const form = vm.forms.find(f => f.code === tr.dataset.code);
      if (form) _auditOpenFormDetailModal(form);
    });
  });
}

function renderAuditTemplate() {
  const vm = _computeAuditTemplateVm(_auditData);
  _mountAuditTemplate(_auditTemplateHtml(vm), vm);
}

// ── Template: Form builder modal (Create / Edit-as-new-version) ───────────────
// Sections work like Google Forms: items live inside section blocks. The first
// block is the "default" section (no title, cannot be removed). Named sections
// can be added with "+ Add Section" and removed individually.

function _auditAddFormItemRow(itemText, sectionItemsEl) {
  if (!sectionItemsEl) return;
  const row = document.createElement('div');
  row.className = 'audit-form-item-row';
  row.innerHTML = `
    <span class="audit-form-item-no"></span>
    <textarea class="gica-form-input audit-form-item-text" rows="1">${escapeHtml(itemText || '')}</textarea>
    <button type="button" class="audit-form-item-remove audit-btn audit-btn--cancel" style="padding:6px 10px;">✕</button>
  `;
  row.querySelector('.audit-form-item-remove').addEventListener('click', () => {
    row.remove();
    _auditRenumberFormItems();
  });
  sectionItemsEl.appendChild(row);
  _auditRenumberFormItems();
}

// Numbers items globally across all section blocks (1, 2, 3, …).
function _auditRenumberFormItems() {
  let num = 1;
  $('audit-form-items-container')?.querySelectorAll('.audit-form-item-row').forEach(row => {
    const el = row.querySelector('.audit-form-item-no');
    if (el) el.textContent = (num++) + '.';
  });
}

// Creates one section block. isDefault=true → no title input, no remove button.
// existingItems is an array of item text strings to pre-populate.
function _auditAddSectionBlock(sectionName, existingItems, isDefault) {
  const container = $('audit-form-items-container');
  if (!container) return;

  const block = document.createElement('div');
  block.className = 'audit-section-block' + (isDefault ? ' audit-section-block--default' : '');

  block.innerHTML = isDefault ? `
    <div class="audit-section-items"></div>
    <button type="button" class="audit-add-item-to-section audit-btn audit-btn--cancel">+ Add Item</button>
  ` : `
    <div class="audit-section-header">
      <input type="text" class="gica-form-input audit-section-name-input"
             placeholder="ชื่อ Section (เช่น เอกสาร, กระบวนการ)" value="${escapeHtml(sectionName || '')}">
      <button type="button" class="audit-section-remove-btn" title="ลบ Section">✕</button>
    </div>
    <div class="audit-section-items"></div>
    <button type="button" class="audit-add-item-to-section audit-btn audit-btn--cancel">+ Add Item</button>
  `;

  block.querySelector('.audit-section-remove-btn')?.addEventListener('click', () => {
    block.remove();
    _auditRenumberFormItems();
  });
  block.querySelector('.audit-add-item-to-section').addEventListener('click', () => {
    _auditAddFormItemRow('', block.querySelector('.audit-section-items'));
  });

  container.appendChild(block);

  const itemsEl = block.querySelector('.audit-section-items');
  (existingItems || []).forEach(text => _auditAddFormItemRow(text, itemsEl));
  _auditRenumberFormItems();
}

function _auditOpenFormModal(existingForm) {
  $('audit-form-modal-title').textContent = existingForm
    ? `Edit Form — New Version (current v${existingForm.latestVersion})`
    : 'Create New Form';
  $('audit-form-name').value = existingForm ? existingForm.templateName : '';
  $('audit-form-category').value = existingForm ? existingForm.category : '';
  const codeInput = $('audit-form-code');
  codeInput.value = existingForm ? existingForm.code : '';
  codeInput.disabled = !!existingForm;

  const container = $('audit-form-items-container');
  if (container) container.innerHTML = '';

  if (existingForm) {
    // Group items by Section, preserving order of first appearance.
    // Empty/null Section → belongs to the default (top) block.
    const sectionOrder = [];
    const sectionItems = {};
    existingForm.latestItems.forEach(it => {
      const sec = String(it.Section || '').trim();
      if (!sectionItems.hasOwnProperty(sec)) { sectionOrder.push(sec); sectionItems[sec] = []; }
      sectionItems[sec].push(it.ItemText);
    });
    // Default section always first (might be empty if all items have named sections).
    _auditAddSectionBlock('', sectionItems[''] || [], true);
    sectionOrder.filter(s => s !== '').forEach(name => {
      _auditAddSectionBlock(name, sectionItems[name], false);
    });
  } else {
    _auditAddSectionBlock('', [], true);
  }

  $('audit-form-error')?.classList.add('hidden');
  $('audit-template-form-modal')?.classList.remove('hidden');
}

function _wireAuditFormModal() {
  const close = () => $('audit-template-form-modal')?.classList.add('hidden');
  $('audit-form-modal-close')?.addEventListener('click', close);
  $('audit-form-modal-cancel')?.addEventListener('click', close);
  $('audit-form-modal-backdrop')?.addEventListener('click', close);

  // "+ Add Section" adds a new named section block below the last one.
  $('audit-form-add-section-btn')?.addEventListener('click', () => _auditAddSectionBlock('', [], false));

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const modal = $('audit-template-form-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    close();
  });

  $('audit-form-modal-save')?.addEventListener('click', async () => {
    const errEl = $('audit-form-error');
    if (errEl) errEl.classList.add('hidden');
    const templateName = $('audit-form-name')?.value.trim();
    const category = $('audit-form-category')?.value.trim();
    const code = $('audit-form-code')?.value.trim();

    // Collect items with their section names from the DOM hierarchy.
    const items = [];
    $('audit-form-items-container')?.querySelectorAll('.audit-section-block').forEach(block => {
      const sectionName = block.querySelector('.audit-section-name-input')?.value.trim() || '';
      block.querySelectorAll('.audit-form-item-text').forEach(ta => {
        const text = ta.value.trim();
        if (text) items.push({ ItemText: text, Section: sectionName });
      });
    });

    if (!templateName || !category || !code) {
      if (errEl) { errEl.textContent = 'Form Name, Category และ Code จำเป็นต้องกรอก'; errEl.classList.remove('hidden'); }
      return;
    }
    if (!items.length) {
      if (errEl) { errEl.textContent = 'ต้องมีอย่างน้อย 1 checklist item'; errEl.classList.remove('hidden'); }
      return;
    }

    const record = { TemplateName: templateName, Category: category, Code: code, items };
    try {
      await api('/api/audit/templates/forms', { method: 'POST', body: JSON.stringify(record) });
      close();
      $('audit-template-detail-modal')?.classList.add('hidden');
      await _auditRefetch();
      showMessage('Form saved');
    } catch (err) {
      if (errEl) { errEl.textContent = err.message; errEl.classList.remove('hidden'); }
    }
  });
}

// ── Template: Form detail modal (read-only items list + Edit-as-new-version) ──
function _auditOpenFormDetailModal(form) {
  $('audit-detail-title').textContent = form.templateName;
  $('audit-detail-meta').innerHTML = `
    <span class="badge muted">Code: ${escapeHtml(form.code)}</span>
    <span class="badge muted">v${form.latestVersion}</span>
    <span class="badge muted">${escapeHtml(form.category)}</span>
    ${form.isActive ? '<span class="badge ok">Active</span>' : '<span class="badge muted">Inactive</span>'}
  `;

  // Group items by Section, preserving the order they appear.
  // Items with no Section belong to the default (top) group (key = '').
  const sectionOrder = [];
  const sectionItems = {};
  form.latestItems.forEach(it => {
    const sec = String(it.Section || '').trim();
    if (!sectionItems.hasOwnProperty(sec)) { sectionOrder.push(sec); sectionItems[sec] = []; }
    sectionItems[sec].push(it);
  });

  let globalIdx = 0;
  let detailHtml = sectionOrder.map(sec => {
    const items = sectionItems[sec];
    const rowsHtml = items.map(it => {
      globalIdx++;
      return `<div class="audit-detail-item">
        <span class="audit-detail-item-num">${globalIdx}.</span>
        <span>${escapeHtml(it.ItemText)}</span>
      </div>`;
    }).join('');

    if (sec) {
      return `<div class="audit-detail-section-block">
        <div class="audit-detail-section-hdr">${escapeHtml(sec)}</div>
        <div class="audit-detail-section-body">${rowsHtml}</div>
      </div>`;
    }
    return `<div class="audit-detail-nosection">${rowsHtml}</div>`;
  }).join('');

  $('audit-detail-items').innerHTML = detailHtml || '<p class="u-muted">No items</p>';

  const editBtn = $('audit-detail-edit-btn');
  if (editBtn) {
    editBtn.classList.toggle('hidden', !['qe_audit', 'admin'].includes(currentRole));
    editBtn.onclick = () => {
      $('audit-template-detail-modal')?.classList.add('hidden');
      _auditOpenFormModal(form);
    };
  }
  $('audit-template-detail-modal')?.classList.remove('hidden');
}

function _wireAuditFormDetailModal() {
  const close = () => $('audit-template-detail-modal')?.classList.add('hidden');
  $('audit-detail-close')?.addEventListener('click', close);
  $('audit-detail-close-btn')?.addEventListener('click', close);
  $('audit-detail-backdrop')?.addEventListener('click', close);
}

function _auditFormDetailEscHandler(e) {
  if (e.key !== 'Escape') return;
  const modal = $('audit-template-detail-modal');
  if (modal && !modal.classList.contains('hidden')) modal.classList.add('hidden');
}

// ── Execution ─────────────────────────────────────────────────────────────────
function _computeAuditExecutionVm(data, planId) {
  const plans = data.plans || [];
  const plan = plans.find(p => p.PlanID === planId) || null;
  if (!plan) return { plan: null, plans, items: [] };

  const templateItems = (data.templates || [])
    .filter(t => t.Category === plan.AuditTitle && t.Version === plan.FormVersion)
    .sort((a, b) => (a.ItemNo ?? 0) - (b.ItemNo ?? 0));
  const existingByItem = {};
  (data.executions || []).filter(e => e.PlanID === planId).forEach(e => {
    existingByItem[e.ItemNo] = e;
  });

  const items = templateItems.map(t => ({
    itemNo: t.ItemNo,
    itemText: t.ItemText,
    section: String(t.Section || '').trim(),
    existing: existingByItem[t.ItemNo] || null,
  }));

  return { plan, plans, items };
}

// Result picker: 4 buttons, one per AUDIT_EXECUTION_RATINGS value. Unselected
// buttons stay neutral/white; the active one is colored per AUDIT_RATING_COLOR
// — same badge kind used for the read-only view.
function _auditRatingBtnsHtml(currentScore) {
  return AUDIT_EXECUTION_RATINGS.map(r => {
    const kind = AUDIT_RATING_COLOR[r] || 'muted';
    const active = currentScore === r;
    return `<button type="button" class="audit-rating-btn${active ? ` audit-rating-btn--active audit-rating-btn--${kind}` : ''}" data-rating="${escapeHtml(r)}">${escapeHtml(r)}</button>`;
  }).join('');
}

function _auditExecutionHtml(vm) {
  const canWrite = ['qe_audit', 'admin'].includes(currentRole);

  // Plan is fixed once Execution is opened from the Audit Plan page ("เปิด
  // Execution") — it is NOT user-selectable here, just displayed.
  if (!vm.plan) {
    return `
      <div class="card card--section">
        <div class="card-head u-between">
          <h3 style="margin:0;font-size:1rem;">Execution</h3>
          <button id="audit-exec-close-btn" class="gica-modal__close" aria-label="ปิด" title="ปิด (Esc)">✕</button>
        </div>
        <p class="u-muted">เปิด Execution จากหน้า Audit Plan เพื่อบันทึกผลการตรวจ checklist</p>
      </div>`;
  }

  let _execSection = null;
  const rows = (vm.items.length ? vm.items.map((it, i) => {
    let out = '';
    if (it.section && it.section !== _execSection) {
      _execSection = it.section;
      out = `<tr class="audit-exec-section-row"><td class="audit-exec-section-title" colspan="4">${escapeHtml(it.section)}</td></tr>`;
    }
    return out + `<tr data-item-no="${it.itemNo}">
      <td class="drill-td" style="text-align:center;">${i + 1}</td>
      <td class="drill-td" style="white-space:normal;word-break:break-word;">${escapeHtml(it.itemText)}</td>
      <td class="drill-td">
        ${canWrite
          ? `<div class="audit-rating-btngroup audit-exec-score-group" data-score="${it.existing ? escapeHtml(it.existing.Score) : ''}">${_auditRatingBtnsHtml(it.existing ? it.existing.Score : '')}</div>`
          : (it.existing ? _auditBadge(it.existing.Score, AUDIT_RATING_COLOR[it.existing.Score]) : '—')}
      </td>
      <td class="drill-td">
        ${canWrite
          ? `<textarea class="gica-form-input audit-exec-comment-input" rows="1" style="width:100%;resize:vertical;min-height:30px;">${it.existing ? escapeHtml(it.existing.Comment) : ''}</textarea>`
          : `<div style="max-height:36px;overflow-y:auto;white-space:normal;word-break:break-word;">${escapeHtml(it.existing ? it.existing.Comment : '—')}</div>`}
      </td>
    </tr>`;
  }).join('') : `<tr><td class="drill-td" colspan="4">This Form has no checklist items</td></tr>`);

  return `
    <div class="card card--section">
      <div class="card-head u-between">
        <h3 style="margin:0;font-size:1rem;">Execution — Plan #${vm.plan.PlanID} (${escapeHtml(vm.plan.AuditTitle)})</h3>
        <button id="audit-exec-close-btn" class="gica-modal__close" aria-label="ปิด" title="ปิด (Esc)">✕</button>
      </div>
      <div style="overflow-x:auto;">
        <table style="table-layout:fixed;min-width:0;"><colgroup>
          <col style="width:40px;"><col style="width:280px;"><col style="width:360px;"><col style="width:160px;">
        </colgroup><thead><tr>
          <th class="drill-th" style="text-align:center;">#</th>
          <th class="drill-th" style="text-align:center;">Item</th>
          <th class="drill-th" style="text-align:center;">Result</th>
          <th class="drill-th" style="text-align:center;">Comment</th>
        </tr></thead><tbody>${rows}</tbody></table>
      </div>
      ${canWrite && vm.items.length ? `
      <p id="audit-exec-error" class="login-error hidden" style="margin-top:8px;"></p>
      <button id="audit-exec-save-btn" class="gica-kpi-btn gica-kpi-btn--confirm" style="margin-top:8px;">Save Execution Results</button>
      ` : ''}
    </div>`;
}

// Esc closes Execution (back to Audit Plan) only while that sub-tab is active
// — wired once in initAuditTab, not re-wired on every render.
function _auditExecutionEscHandler(e) {
  if (e.key === 'Escape' && _auditActiveSubtab === 'execution') _auditCloseExecution();
}

function _auditTopNcEscHandler(e) {
  if (e.key === 'Escape') $('audit-topnc-modal')?.classList.add('hidden');
}

function _auditCloseExecution() {
  _auditSwitchSubtab('plan');
}

function _mountAuditExecution(html, vm) {
  const el = $('audit-execution-panel');
  if (!el) return;
  el.innerHTML = html;

  el.querySelector('#audit-exec-close-btn')?.addEventListener('click', _auditCloseExecution);

  el.querySelectorAll('.audit-exec-score-group').forEach(group => {
    group.querySelectorAll('.audit-rating-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rating = btn.dataset.rating;
        const kind = AUDIT_RATING_COLOR[rating] || 'muted';
        group.querySelectorAll('.audit-rating-btn').forEach(b => {
          b.className = 'audit-rating-btn';
        });
        btn.classList.add('audit-rating-btn--active', `audit-rating-btn--${kind}`);
        group.dataset.score = rating;
      });
    });
  });

  const saveBtn = el.querySelector('#audit-exec-save-btn');
  saveBtn?.addEventListener('click', async () => {
    if (saveBtn.disabled) return; // guard against double-click while a save is already in flight
    const errEl = $('audit-exec-error');
    if (errEl) errEl.classList.add('hidden');
    const rows = Array.from(el.querySelectorAll('tr[data-item-no]'));
    const payload = rows.map(tr => ({
      PlanID: vm.plan.PlanID,
      ItemNo: +tr.dataset.itemNo,
      Score: tr.querySelector('.audit-exec-score-group')?.dataset.score || '',
      Comment: tr.querySelector('.audit-exec-comment-input')?.value || '',
    })).filter(r => r.Score !== '' || r.Comment !== '');
    if (!payload.length) return;
    const originalLabel = saveBtn.textContent;
    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving…';
    try {
      await api('/api/audit/executions', { method: 'POST', body: JSON.stringify(payload) });
      await _auditRefetch();
      _auditCloseExecution();
      showMessage('Execution results saved');
    } catch (err) {
      if (errEl) { errEl.textContent = err.message; errEl.classList.remove('hidden'); }
      saveBtn.disabled = false;
      saveBtn.textContent = originalLabel;
    }
  });
}

function renderAuditExecution() {
  const vm = _computeAuditExecutionVm(_auditData, _auditExecutionPlanId);
  _mountAuditExecution(_auditExecutionHtml(vm), vm);
}

// ── Finding / CAR ─────────────────────────────────────────────────────────────
function _computeAuditFindingVm(data) {
  const findings = (data.findings || []).map(f => ({
    ...f,
    agingDays: f.Status !== 'Approved' ? _auditDaysSince(f.OpenedAt) : null,
  })).sort((a, b) => (b.FindingID ?? 0) - (a.FindingID ?? 0));
  return { findings, plans: data.plans || [] };
}

function _auditFindingHtml(vm) {
  const canWrite = ['qe_audit', 'admin'].includes(currentRole);
  const rows = vm.findings.map(f => `
    <tr>
      <td class="drill-td">${escapeHtml(f.PlanID)}</td>
      <td class="drill-td">${escapeHtml(f.BU)}</td>
      <td class="drill-td">${_auditBadge(f.Severity, AUDIT_SEVERITY_COLOR[f.Severity])}</td>
      <td class="drill-td" style="max-width:260px;">
        <div style="max-height:60px;overflow-y:auto;white-space:normal;word-break:break-word;">${escapeHtml(f.Description)}</div>
      </td>
      <td class="drill-td">${_auditFmtDate(f.OpenedAt)}</td>
      <td class="drill-td">${escapeHtml(f.ResponsiblePerson)}</td>
      <td class="drill-td">${_auditFmtDate(f.DueDate)}</td>
      <td class="drill-td">${_auditBadge(f.Status, AUDIT_STATUS_COLOR[f.Status])}</td>
      <td class="drill-td">${f.agingDays !== null ? f.agingDays + ' days' : '—'}</td>
      <td class="drill-td">${escapeHtml(f.ApproverComment || '—')}</td>
      <td class="drill-td">
        ${canWrite && f.Status === 'Responded' ? `<button class="audit-finding-approve-btn" data-finding-id="${f.FindingID}">Approve</button>` : ''}
      </td>
    </tr>`).join('') || `<tr><td class="drill-td" colspan="11">No findings yet</td></tr>`;

  return `
    <div class="card card--section">
      <div class="card-head"><h3 style="margin:0;font-size:1rem;">Findings / CAR</h3></div>
      <div style="overflow-x:auto;">
        <table><thead><tr>
          <th class="drill-th">Plan ID</th><th class="drill-th">BU</th><th class="drill-th">Severity</th>
          <th class="drill-th">Description</th><th class="drill-th">Opened</th>
          <th class="drill-th">Responsible</th><th class="drill-th">Due</th>
          <th class="drill-th">Status</th><th class="drill-th">Aging</th>
          <th class="drill-th">Approver Comment</th><th class="drill-th"></th>
        </tr></thead><tbody>${rows}</tbody></table>
      </div>
    </div>`;
}

function _mountAuditFinding(html) {
  const el = $('audit-finding-panel');
  if (!el) return;
  el.innerHTML = html;

  el.querySelectorAll('.audit-finding-approve-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _auditApproveTargetId = +btn.dataset.findingId;
      const commentEl = $('audit-approve-comment');
      if (commentEl) commentEl.value = '';
      $('audit-approve-error')?.classList.add('hidden');
      $('audit-approve-modal')?.classList.remove('hidden');
    });
  });
}

function renderAuditFinding() {
  _mountAuditFinding(_auditFindingHtml(_computeAuditFindingVm(_auditData)));
}

// ── Per-finding Approve modal (from Finding sub-tab) ─────────────────────────
function _wireAuditApproveModal() {
  const close = () => $('audit-approve-modal')?.classList.add('hidden');
  $('audit-approve-close')?.addEventListener('click', close);
  $('audit-approve-cancel')?.addEventListener('click', close);
  $('audit-approve-backdrop')?.addEventListener('click', close);
  $('audit-approve-confirm')?.addEventListener('click', async () => {
    const errEl = $('audit-approve-error');
    if (errEl) errEl.classList.add('hidden');
    try {
      await api(`/api/audit/findings/${_auditApproveTargetId}/approve`, {
        method: 'PATCH',
        body: JSON.stringify({ ApproverComment: $('audit-approve-comment')?.value || '' }),
      });
      close();
      await _auditRefetch();
      showMessage('Finding approved');
    } catch (err) {
      if (errEl) { errEl.textContent = err.message; errEl.classList.remove('hidden'); }
    }
  });
}

// ── Plan-level Respond modal (Auditee fills all Open findings at once) ────────
function _auditOpenPlanRespondModal(planId) {
  const findings = (_auditData.findings || []).filter(
    f => f.PlanID === planId && f.Status === 'Open');
  if (!findings.length) {
    showMessage('ไม่มี Finding ที่รอตอบสำหรับ Plan นี้');
    return;
  }

  const bodyEl = $('audit-plan-respond-body');
  const planIdEl = $('audit-plan-respond-plan-id');
  if (planIdEl) planIdEl.textContent = planId;
  if (bodyEl) {
    bodyEl.innerHTML = findings.map(f => `
      <div class="audit-finding-card" data-finding-id="${f.FindingID}">
        <div class="audit-finding-card__head">
          ${_auditBadge(f.Severity, AUDIT_SEVERITY_COLOR[f.Severity])}
          <span class="audit-finding-card__title">${escapeHtml(f.Description)}</span>
        </div>
        <div class="audit-finding-card__fields audit-finding-card__fields--wide">
          <div class="gica-form-row">
            <label class="gica-form-label">Root Cause <span style="color:#dc2626">*</span></label>
            <textarea class="gica-form-input audit-rc-input" rows="2" placeholder="ระบุสาเหตุที่แท้จริง"></textarea>
          </div>
          <div class="gica-form-row">
            <label class="gica-form-label">Corrective Action <span style="color:#dc2626">*</span></label>
            <textarea class="gica-form-input audit-ca-input" rows="2" placeholder="การแก้ไขปัญหา"></textarea>
          </div>
          <div class="gica-form-row">
            <label class="gica-form-label">Preventive Action</label>
            <textarea class="gica-form-input audit-pa-input" rows="2" placeholder="การป้องกันไม่ให้เกิดซ้ำ"></textarea>
          </div>
        </div>
        <div class="audit-finding-card__fields" style="margin-top:6px;">
          <div class="gica-form-row">
            <label class="gica-form-label">Responsible Person</label>
            <input type="text" class="gica-form-input audit-resp-input" placeholder="ชื่อผู้รับผิดชอบ">
          </div>
          <div class="gica-form-row">
            <label class="gica-form-label">Due Date</label>
            <input type="date" class="gica-form-input audit-due-input">
          </div>
        </div>
      </div>`).join('');
  }

  $('audit-plan-respond-error')?.classList.add('hidden');
  $('audit-plan-respond-modal')?.classList.remove('hidden');
}

function _wireAuditPlanRespondModal() {
  const close = () => $('audit-plan-respond-modal')?.classList.add('hidden');
  $('audit-plan-respond-close')?.addEventListener('click', close);
  $('audit-plan-respond-cancel')?.addEventListener('click', close);
  $('audit-plan-respond-backdrop')?.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('audit-plan-respond-modal')?.classList.contains('hidden')) close();
  });

  $('audit-plan-respond-submit')?.addEventListener('click', async () => {
    const errEl = $('audit-plan-respond-error');
    if (errEl) errEl.classList.add('hidden');

    const cards = $('audit-plan-respond-body')?.querySelectorAll('.audit-finding-card') || [];
    const payload = [];
    let valid = true;
    cards.forEach(card => {
      const rc = card.querySelector('.audit-rc-input')?.value.trim();
      const ca = card.querySelector('.audit-ca-input')?.value.trim();
      if (!rc || !ca) { valid = false; return; }
      payload.push({
        findingId:         +card.dataset.findingId,
        rootCause:         rc,
        correctiveAction:  ca,
        preventiveAction:  card.querySelector('.audit-pa-input')?.value.trim() || '',
        responsiblePerson: card.querySelector('.audit-resp-input')?.value.trim() || '',
        dueDate:           card.querySelector('.audit-due-input')?.value || '',
      });
    });

    if (!valid) {
      if (errEl) { errEl.textContent = 'กรุณากรอก Root Cause และ Corrective Action ให้ครบทุกข้อ'; errEl.classList.remove('hidden'); }
      return;
    }

    // Derive planId from the first finding's PlanID stored in _auditData
    const planId = (_auditData.findings || []).find(
      f => f.FindingID === payload[0]?.findingId)?.PlanID;
    if (!planId) return;

    try {
      $('audit-plan-respond-submit').disabled = true;
      await api(`/api/audit/plans/${planId}/respond`, {
        method: 'POST', body: JSON.stringify(payload),
      });
      close();
      await _auditRefetch();
      showMessage('Response submitted');
    } catch (err) {
      if (errEl) { errEl.textContent = err.message; errEl.classList.remove('hidden'); }
    } finally {
      const submitBtn = $('audit-plan-respond-submit');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// ── Plan-level Approval modal (Auditor approves each finding) ─────────────────
function _auditOpenPlanApprovalModal(planId) {
  const findings = (_auditData.findings || []).filter(
    f => f.PlanID === planId && (f.Status === 'Responded' || f.Status === 'Approved'));
  if (!findings.length) {
    showMessage('ไม่มี Finding ที่รอ Approve สำหรับ Plan นี้');
    return;
  }

  const bodyEl = $('audit-plan-approval-body');
  const planIdEl = $('audit-plan-approval-plan-id');
  if (planIdEl) planIdEl.textContent = planId;
  if (bodyEl) {
    bodyEl.innerHTML = findings.map(f => {
      const approved = f.Status === 'Approved';
      return `
      <div class="audit-finding-card" id="audit-apv-card-${f.FindingID}">
        <div class="audit-finding-card__head">
          ${_auditBadge(f.Severity, AUDIT_SEVERITY_COLOR[f.Severity])}
          <span class="audit-finding-card__title">${escapeHtml(f.Description)}</span>
          <span id="audit-apv-status-${f.FindingID}">${_auditBadge(f.Status, AUDIT_STATUS_COLOR[f.Status])}</span>
        </div>
        <div class="audit-finding-card__readonly">
          <p><strong>Root Cause:</strong> ${escapeHtml(f.RootCause || '—')}</p>
          <p><strong>Corrective Action:</strong> ${escapeHtml(f.CorrectiveAction || '—')}</p>
          <p><strong>Preventive Action:</strong> ${escapeHtml(f.PreventiveAction || '—')}</p>
          <p><strong>Responsible:</strong> ${escapeHtml(f.ResponsiblePerson || '—')} &nbsp;
             <strong>Due:</strong> ${_auditFmtDate(f.DueDate)}</p>
          ${approved && f.ApproverComment ? `<p><strong>Comment:</strong> ${escapeHtml(f.ApproverComment)}</p>` : ''}
        </div>
        ${approved ? '' : `
        <div class="audit-finding-card__approve-row" id="audit-apv-form-${f.FindingID}">
          <textarea class="gica-form-input" id="audit-apv-comment-${f.FindingID}" rows="2"
            placeholder="Reviewer Comment (optional)"></textarea>
          <button class="audit-approve-single-btn" data-finding-id="${f.FindingID}">✓ Approve</button>
        </div>`}
      </div>`;
    }).join('');

    // Wire per-finding Approve buttons inside modal
    bodyEl.querySelectorAll('.audit-approve-single-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const fid = +btn.dataset.findingId;
        const comment = $(`audit-apv-comment-${fid}`)?.value || '';
        btn.disabled = true;
        try {
          const res = await api(`/api/audit/findings/${fid}/approve`, {
            method: 'PATCH', body: JSON.stringify({ ApproverComment: comment }),
          });
          // Update this card in-place
          const statusEl = $(`audit-apv-status-${fid}`);
          if (statusEl) statusEl.innerHTML = _auditBadge('Approved', AUDIT_STATUS_COLOR['Approved']);
          const formEl = $(`audit-apv-form-${fid}`);
          if (formEl) formEl.remove();
          // If plan completed, show completion note
          if (res.planStatus === 'Completed') {
            const doneNote = document.createElement('p');
            doneNote.style.cssText = 'text-align:center;color:var(--ok);font-weight:600;margin-top:12px;';
            doneNote.textContent = '✓ ทุก Finding ได้รับการ Approve แล้ว — Plan เปลี่ยนเป็น Completed';
            bodyEl.appendChild(doneNote);
          }
          await _auditRefetch();
        } catch (err) {
          btn.disabled = false;
          showMessage('เกิดข้อผิดพลาด: ' + err.message, 'error');
        }
      });
    });
  }

  $('audit-plan-approval-modal')?.classList.remove('hidden');
}

function _wireAuditPlanApprovalModal() {
  const close = () => $('audit-plan-approval-modal')?.classList.add('hidden');
  $('audit-plan-approval-close')?.addEventListener('click', close);
  $('audit-plan-approval-backdrop')?.addEventListener('click', close);
  $('audit-plan-approval-done')?.addEventListener('click', close);
}

// "+ Create Audit Plan" — static modal in index.html, wired once (like Respond/
// Close above), populated fresh from _auditData each time it's opened so the
// Template dropdown always reflects the latest checklist templates.
function _auditOpenPlanCreateModal() {
  const buSelect = $('audit-plan-bu');
  if (buSelect) buSelect.innerHTML = AUDIT_BUS.map(bu => `<option value="${bu}">${bu}</option>`).join('');

  // "Audit Title" is no longer free text — it's the Category of an active
  // Form (Template), which also determines which Form Execution will use.
  const activeForms = _auditFormGroups(_auditData.templates || []).filter(f => f.isActive);
  const titleSelect = $('audit-plan-title');
  if (titleSelect) {
    titleSelect.innerHTML = '<option value="">— Select —</option>' +
      activeForms.map(f => `<option value="${escapeHtml(f.category)}" data-form-version="${f.latestVersion}">${escapeHtml(f.category)}</option>`).join('');
  }

  ['audit-plan-dept', 'audit-plan-date',
   'audit-plan-auditor1', 'audit-plan-auditor2', 'audit-plan-auditor3'].forEach(id => {
    const el = $(id);
    if (el) el.value = '';
  });
  $('audit-plan-auditor2-row')?.classList.add('hidden');
  $('audit-plan-auditor3-row')?.classList.add('hidden');
  const addBtn = $('audit-plan-add-auditor-btn');
  if (addBtn) { addBtn.disabled = false; addBtn.classList.remove('hidden'); }
  $('audit-plan-error')?.classList.add('hidden');

  $('audit-plan-create-modal')?.classList.remove('hidden');
}

function _wireAuditPlanCreateModal() {
  const close = () => $('audit-plan-create-modal')?.classList.add('hidden');
  $('audit-plan-create-close')?.addEventListener('click', close);
  $('audit-plan-create-cancel')?.addEventListener('click', close);
  $('audit-plan-create-backdrop')?.addEventListener('click', close);

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const modal = $('audit-plan-create-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    close();
  });

  // "+ Add Auditor" reveals Auditor 2, then Auditor 3, then hides itself — max 3.
  $('audit-plan-add-auditor-btn')?.addEventListener('click', () => {
    if ($('audit-plan-auditor2-row')?.classList.contains('hidden')) {
      $('audit-plan-auditor2-row')?.classList.remove('hidden');
    } else if ($('audit-plan-auditor3-row')?.classList.contains('hidden')) {
      $('audit-plan-auditor3-row')?.classList.remove('hidden');
      $('audit-plan-add-auditor-btn')?.classList.add('hidden');
    }
  });

  $('audit-plan-create-confirm')?.addEventListener('click', async () => {
    const errEl = $('audit-plan-error');
    if (errEl) errEl.classList.add('hidden');
    const titleSelect = $('audit-plan-title');
    const title = titleSelect?.value.trim();
    if (!title) {
      if (errEl) { errEl.textContent = 'Audit Title is required'; errEl.classList.remove('hidden'); }
      return;
    }
    const record = {
      BU: $('audit-plan-bu')?.value,
      Department: $('audit-plan-dept')?.value || '',
      FormVersion: +(titleSelect?.selectedOptions?.[0]?.dataset.formVersion || 0) || '',
      AuditTitle: title,
      ScheduledDate: $('audit-plan-date')?.value || '',
      Auditor1: $('audit-plan-auditor1')?.value || '',
      Auditor2: $('audit-plan-auditor2')?.value || '',
      Auditor3: $('audit-plan-auditor3')?.value || '',
    };
    try {
      await api('/api/audit/plans', { method: 'POST', body: JSON.stringify(record) });
      close();
      await _auditRefetch();
      showMessage('Audit Plan created');
    } catch (err) {
      if (errEl) { errEl.textContent = err.message; errEl.classList.remove('hidden'); }
    }
  });
}

