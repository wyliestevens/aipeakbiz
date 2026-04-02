// AI Peak Biz - Chiropractic Practice Assessment Tool
(function(){
const QUESTIONS = [
  {
    q: "How many new patient calls does your clinic get per week?",
    options: [
      { text: "1 to 5 calls", sub: "Smaller or newer practice", score: 1, calls: 3 },
      { text: "6 to 15 calls", sub: "Established single-provider clinic", score: 2, calls: 10 },
      { text: "16 to 30 calls", sub: "Busy multi-provider practice", score: 3, calls: 23 },
      { text: "More than 30 calls", sub: "High-volume or multi-location", score: 3, calls: 35 }
    ]
  },
  {
    q: "How many of those calls go unanswered or to voicemail?",
    options: [
      { text: "Almost none. We catch most calls.", score: 0, missRate: 0.05 },
      { text: "A few per week slip through.", score: 1, missRate: 0.15 },
      { text: "Roughly half during busy hours.", score: 2, missRate: 0.4 },
      { text: "Most go to voicemail when we are with patients.", score: 3, missRate: 0.65 }
    ]
  },
  {
    q: "What is your current no-show rate?",
    options: [
      { text: "Under 10%. We have good attendance.", score: 0, noshow: 0.08 },
      { text: "10 to 20%. Some gaps in the schedule.", score: 1, noshow: 0.15 },
      { text: "20 to 30%. Frequent empty slots.", score: 2, noshow: 0.25 },
      { text: "Over 30%. It is a real problem.", score: 3, noshow: 0.35 }
    ]
  },
  {
    q: "How does your clinic collect Google reviews?",
    options: [
      { text: "Automated system in place. Steady flow.", score: 0 },
      { text: "Staff asks sometimes. Inconsistent.", score: 1 },
      { text: "We rely on patients to do it on their own.", score: 2 },
      { text: "We do not have a review process.", score: 3 }
    ]
  },
  {
    q: "When did you last reach out to inactive patients (90+ days)?",
    options: [
      { text: "This month. We have a reactivation system.", score: 0 },
      { text: "Last quarter. We do it when we remember.", score: 1 },
      { text: "Over 6 months ago.", score: 2 },
      { text: "We have never done a reactivation campaign.", score: 3 }
    ]
  },
  {
    q: "How would you describe your front desk capacity right now?",
    options: [
      { text: "Great. Handles everything smoothly.", score: 0 },
      { text: "Good, but occasionally overwhelmed.", score: 1 },
      { text: "Struggling. Frequently overwhelmed during peak hours.", score: 2 },
      { text: "Drowning. Constant missed tasks and chaos.", score: 3 }
    ]
  }
];

const LETTERS = ['A','B','C','D'];

function initAssessment(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let current = -1; // -1 = intro screen
  let answers = [];

  function render() {
    if (current === -1) {
      renderIntro();
    } else if (current < QUESTIONS.length) {
      renderQuestion();
    } else {
      renderResult();
    }
  }

  function renderIntro() {
    container.innerHTML = '<div class="assessment-intro">' +
      '<div class="section-label" style="color:rgba(255,255,255,.85);">Free Practice Assessment</div>' +
      '<h2>How Much Revenue Is Your Clinic Leaving on the Table?</h2>' +
      '<p>Answer 6 quick questions about your chiropractic practice. Get your AI Readiness Score and a personalized estimate of revenue you are losing to missed calls, no-shows, and weak review flow.</p>' +
      '<div class="assessment-intro-features">' +
        '<div class="assessment-intro-feature"><span>&#10003;</span> Takes 2 minutes</div>' +
        '<div class="assessment-intro-feature"><span>&#10003;</span> Instant results</div>' +
        '<div class="assessment-intro-feature"><span>&#10003;</span> No email required</div>' +
      '</div>' +
      '<button class="btn-primary" style="background:#fff;color:#00856a;font-size:1.05rem;padding:16px 36px;border:none;cursor:pointer;" onclick="document.getElementById(\'' + containerId + '\')._startQuiz()">Start Your Free Assessment &rarr;</button>' +
    '</div>';
    container._startQuiz = function() { current = 0; answers = []; render(); };
  }

  function renderQuestion() {
    var q = QUESTIONS[current];
    var progressHtml = '<div class="assessment-progress">';
    for (var i = 0; i < QUESTIONS.length; i++) {
      progressHtml += '<div class="assessment-progress-bar' + (i <= current ? ' filled' : '') + '"></div>';
    }
    progressHtml += '</div>';

    var optionsHtml = '<div class="assessment-options">';
    for (var j = 0; j < q.options.length; j++) {
      var sel = (answers[current] === j) ? ' selected' : '';
      optionsHtml += '<div class="assessment-option' + sel + '" data-idx="' + j + '">' +
        '<div class="assessment-option-letter">' + LETTERS[j] + '</div>' +
        '<div><div class="assessment-option-text">' + q.options[j].text + '</div>' +
        (q.options[j].sub ? '<div class="assessment-option-sub">' + q.options[j].sub + '</div>' : '') +
        '</div></div>';
    }
    optionsHtml += '</div>';

    var hasAnswer = answers[current] !== undefined;
    var isLast = current === QUESTIONS.length - 1;

    container.innerHTML = progressHtml +
      '<div class="assessment-question-num">Question ' + (current + 1) + ' of ' + QUESTIONS.length + '</div>' +
      '<div class="assessment-question">' + q.q + '</div>' +
      optionsHtml +
      '<div class="assessment-nav">' +
        (current > 0 ? '<button class="assessment-back" id="aBack">&#8592; Back</button>' : '<div></div>') +
        '<button class="assessment-next' + (hasAnswer ? ' active' : '') + '" id="aNext">' + (isLast ? 'See My Results' : 'Next &rarr;') + '</button>' +
      '</div>';

    // Bind option clicks
    var opts = container.querySelectorAll('.assessment-option');
    for (var k = 0; k < opts.length; k++) {
      (function(idx){
        opts[idx].addEventListener('click', function(){
          answers[current] = parseInt(this.getAttribute('data-idx'));
          render();
        });
      })(k);
    }

    // Bind nav
    var backBtn = document.getElementById('aBack');
    if (backBtn) backBtn.addEventListener('click', function(){ current--; render(); });
    var nextBtn = document.getElementById('aNext');
    if (nextBtn && hasAnswer) {
      nextBtn.addEventListener('click', function(){ current++; render(); });
    }
  }

  function renderResult() {
    var totalScore = 0;
    var maxScore = QUESTIONS.length * 3;
    for (var i = 0; i < QUESTIONS.length; i++) {
      var idx = answers[i] || 0;
      totalScore += QUESTIONS[i].options[idx].score;
    }

    // Calculate estimated monthly loss
    var callsPerWeek = QUESTIONS[0].options[answers[0] || 0].calls || 10;
    var missRate = QUESTIONS[1].options[answers[1] || 0].missRate || 0.15;
    var noshowRate = QUESTIONS[2].options[answers[2] || 0].noshow || 0.15;
    var avgNewPatientValue = 280; // conservative LTV estimate
    var avgVisitValue = 95;
    var weeklyVisits = callsPerWeek * 4; // rough proxy

    var missedCallLoss = Math.round(callsPerWeek * missRate * avgNewPatientValue * 4.33);
    var noshowLoss = Math.round(weeklyVisits * noshowRate * avgVisitValue * 4.33);
    var totalLoss = missedCallLoss + noshowLoss;

    var pct = Math.round((totalScore / maxScore) * 100);
    var readinessScore = 100 - pct; // Higher = better current state

    var grade, gradeClass, headline, desc;
    if (readinessScore >= 75) {
      grade = 'Strong'; gradeClass = 'good';
      headline = 'Your Practice Is in Good Shape';
      desc = 'You have solid systems in place. An AI front desk would optimize what you already do well and capture the remaining gaps, especially after hours and during peak volume.';
    } else if (readinessScore >= 45) {
      grade = 'Needs Attention'; gradeClass = 'warning';
      headline = 'Your Clinic Has Revenue Leaks';
      desc = 'You are losing patients and revenue in areas that an AI front desk system would fix immediately. Missed calls, no-shows, and inconsistent review collection are costing you real money every month.';
    } else {
      grade = 'Critical'; gradeClass = 'critical';
      headline = 'Your Practice Is Bleeding Revenue';
      desc = 'Multiple systems are broken or missing. Missed calls are going to competitors, no-shows are wrecking your schedule, and your review pipeline is stalled. The good news: these are the exact problems an AI front desk system solves in the first 30 days.';
    }

    // Ring SVG
    var circumference = 2 * Math.PI * 76;
    var dashoffset = circumference - (readinessScore / 100) * circumference;

    container.innerHTML = '<div class="assessment-result">' +
      '<div class="assessment-score-ring">' +
        '<svg viewBox="0 0 168 168"><circle class="ring-bg" cx="84" cy="84" r="76"/><circle class="ring-fill" cx="84" cy="84" r="76" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + dashoffset + '"/></svg>' +
        '<div class="assessment-score-value">' + readinessScore + '<small>out of 100</small></div>' +
      '</div>' +
      '<div class="assessment-grade ' + gradeClass + '">' + grade + '</div>' +
      '<h2>' + headline + '</h2>' +
      '<p>' + desc + '</p>' +
      '<div class="assessment-loss">' +
        '<div class="assessment-loss-label">Estimated Monthly Revenue Loss</div>' +
        '<div class="assessment-loss-value">$' + totalLoss.toLocaleString() + '</div>' +
        '<div class="assessment-loss-note">Based on your answers. Actual numbers vary by practice.</div>' +
      '</div>' +
      '<div class="assessment-breakdown">' +
        '<div class="assessment-breakdown-item"><h4>Missed Calls</h4><p>$' + missedCallLoss.toLocaleString() + '/mo</p></div>' +
        '<div class="assessment-breakdown-item"><h4>No-Shows</h4><p>$' + noshowLoss.toLocaleString() + '/mo</p></div>' +
      '</div>' +
      '<div class="assessment-cta">' +
        '<a href="https://link.aipeakbiz.com/widget/bookings/aipeakbiz" class="btn-primary">Book a Free Demo to Fix This &rarr;</a>' +
        '<p>30-minute call. We will walk through your specific numbers and show you the system.</p>' +
      '</div>' +
      '<button class="assessment-retake" id="aRetake">Retake Assessment</button>' +
    '</div>';

    // Animate the ring
    setTimeout(function(){
      var ring = container.querySelector('.ring-fill');
      if (ring) ring.style.strokeDashoffset = dashoffset;
    }, 50);

    document.getElementById('aRetake').addEventListener('click', function(){
      current = -1; answers = []; render();
    });
  }

  render();
}

// Auto-init all assessment containers on page load
document.addEventListener('DOMContentLoaded', function(){
  var els = document.querySelectorAll('[data-assessment]');
  for (var i = 0; i < els.length; i++) {
    initAssessment(els[i].id);
  }
});
})();
