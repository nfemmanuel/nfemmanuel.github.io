/* scripts/gap-study/data/comparator-data.js — GENERATED, not hand-authored.
   Produced by scripts/gap-study/make_comparator_data.py against corpus
   version v1. Regenerate with:

       python scripts/gap-study/corpus_manifest.py verify
       python scripts/gap-study/tap_mirror.py --ghost
       python scripts/gap-study/make_comparator_data.py

   Schema: gap-study-comparator/1 (see scripts/gap-study/comparator.html's
   own header for the fixed contract this page renders against).

   PART A (14 items, kind "tap", frame "ours") — the ghost essay's 14
   sentences, replayed once each under control and treatment-ceiling10k
   (rankCeiling=10000, the G1 candidate fix for the said/east/stone/burn
   silences — docs/analysis/ghost-typist-run-1.md's "RESOLVED 2026-08-22"
   section) against the frozen, fingerprint-verified 797-tap ghost stream.
   Samsung is the 2026-08-23 device reference (docs/evidence/
   2026-08-23-gap-study-samsung-reference/). Apple is null throughout: run
   1's Apple phase is void.

   Self-check (159 words per column, computed against tap_mirror's own
   intended-word reference, which attaches a period to each sentence-final
   word except the essay's last):
     ours-control        152/159 (mirror's own acceptance run: 152/159
                          with the pinned 'daid' deviation named in
                          tap_mirror.py's LANE VERDICT 2026-08-23 comment)
     samsung reference   147/159 (docs/evidence/2026-08-23-gap-study-
                          samsung-reference/README.md: 147/159)
     ours-treatment      154/159 (2 word(s) differ from control:
                          82:'saiid'->'said'(want 'said'), 114:'stnoe'->'stone'(want 'stone'))

   PART B (3 items, kind "tap", frame "samsung", stretch goal) — three of
   the owner's own phone-corpus sentences (docs/evidence/
   2026-08-23-phone-corpus-v1/), touches retargeted from the fitted Samsung
   frame onto our geometry by the proposal's own feasibility-spike recipe
   (nearest fitted Samsung key, offset scaled by pitch ratios x0.917 y0.973,
   re-anchored on our key centres — docs/analysis/keyboard-gap-study-
   proposal.md section 0's last paragraph), then replayed fresh per item
   (no shared learned-word state across the three). Candidates were screened
   to real, stationary key taps only (displacementPx < 15px on every stroke)
   because several "sentence"-kind touches.json strokes turn out to be
   whole-word GLIDES; tap_mirror is tap-only and a glide's centroid
   retargeted as one tap would silently corrupt the word count (this is why
   sentences 1/2/5, which mix glides into their tap stream, are not among
   the three below). Per-sentence outcome:
     sentence 11: OK: 10 words, 51 retargeted taps, 6 deletes in session
     sentence 10: OK: 11 words, 64 retargeted taps, 18 deletes in session
     sentence 7: OK: 11 words, 55 retargeted taps, 0 deletes in session

   KNOWN CAVEAT, disclosed rather than patched around: samsung-layout.json
   only fits 26 letters + space (its calibration never tapped delete), so
   the nearest-key search can never choose "delete" — a real backspace
   keystroke retargets as whichever letter/space happens to be nearest,
   not as a delete. On the two items below that had in-flight corrections
   (sentence 10's 18 deletes, sentence 11's 6), this visibly corrupts a
   word or two in the "ours" columns (e.g. "took" -> "ut ok", a spurious
   extra "after all"). This is a property of the frozen fitted layout, not
   a bug in this emitter, and it is why sentence 7 (0 deletes) is the
   cleanest of the three "ours" replays even though its OWN Samsung
   commit diverges from the prompt (col -> cool).
*/
window.GAP_DATA = {
  "schema": "gap-study-comparator/1",
  "corpusVersion": "v1",
  "profiles": [
    "control",
    "treatment-ceiling10k"
  ],
  "items": [
    {
      "id": "ghost-essay-00",
      "kind": "tap",
      "frame": "ours",
      "intended": "The wind came over the ridge before the light did",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 185.2,
          "y": 67.58
        },
        {
          "kind": "tap",
          "t": 190.0,
          "x": 241.14,
          "y": 125.56
        },
        {
          "kind": "tap",
          "t": 377.0,
          "x": 104.56,
          "y": 67.16
        },
        {
          "kind": "tap",
          "t": 611.0,
          "x": 204.17,
          "y": 234.58
        },
        {
          "kind": "tap",
          "t": 840.0,
          "x": 56.46,
          "y": 73.91
        },
        {
          "kind": "tap",
          "t": 1024.0,
          "x": 299.85,
          "y": 72.38
        },
        {
          "kind": "tap",
          "t": 1239.0,
          "x": 290.08,
          "y": 171.46
        },
        {
          "kind": "tap",
          "t": 1395.0,
          "x": 118.14,
          "y": 134.95
        },
        {
          "kind": "tap",
          "t": 1594.0,
          "x": 203.96,
          "y": 225.47
        },
        {
          "kind": "tap",
          "t": 1800.0,
          "x": 169.19,
          "y": 169.48
        },
        {
          "kind": "tap",
          "t": 1990.0,
          "x": 55.74,
          "y": 129.05
        },
        {
          "kind": "tap",
          "t": 2189.0,
          "x": 314.14,
          "y": 175.34
        },
        {
          "kind": "tap",
          "t": 2408.0,
          "x": 96.55,
          "y": 76.86
        },
        {
          "kind": "tap",
          "t": 2655.0,
          "x": 211.55,
          "y": 235.49
        },
        {
          "kind": "tap",
          "t": 2885.0,
          "x": 334.03,
          "y": 67.41
        },
        {
          "kind": "tap",
          "t": 3130.0,
          "x": 203.45,
          "y": 180.09
        },
        {
          "kind": "tap",
          "t": 3374.0,
          "x": 116.93,
          "y": 72.59
        },
        {
          "kind": "tap",
          "t": 3609.0,
          "x": 110.5,
          "y": 72.81
        },
        {
          "kind": "tap",
          "t": 3768.0,
          "x": 150.51,
          "y": 74.54
        },
        {
          "kind": "tap",
          "t": 3982.0,
          "x": 207.89,
          "y": 232.72
        },
        {
          "kind": "tap",
          "t": 4210.0,
          "x": 180.57,
          "y": 64.38
        },
        {
          "kind": "tap",
          "t": 4388.0,
          "x": 243.12,
          "y": 139.13
        },
        {
          "kind": "tap",
          "t": 4563.0,
          "x": 101.46,
          "y": 78.52
        },
        {
          "kind": "tap",
          "t": 4798.0,
          "x": 200.55,
          "y": 229.54
        },
        {
          "kind": "tap",
          "t": 5009.0,
          "x": 135.97,
          "y": 65.98
        },
        {
          "kind": "tap",
          "t": 5170.0,
          "x": 299.11,
          "y": 70.92
        },
        {
          "kind": "tap",
          "t": 5392.0,
          "x": 130.29,
          "y": 128.73
        },
        {
          "kind": "tap",
          "t": 5560.0,
          "x": 211.59,
          "y": 118.27
        },
        {
          "kind": "tap",
          "t": 5751.0,
          "x": 101.6,
          "y": 76.6
        },
        {
          "kind": "tap",
          "t": 5907.0,
          "x": 198.25,
          "y": 245.62
        },
        {
          "kind": "tap",
          "t": 6066.0,
          "x": 238.26,
          "y": 171.01
        },
        {
          "kind": "tap",
          "t": 6253.0,
          "x": 97.61,
          "y": 64.75
        },
        {
          "kind": "tap",
          "t": 6414.0,
          "x": 157.47,
          "y": 128.26
        },
        {
          "kind": "tap",
          "t": 6576.0,
          "x": 332.22,
          "y": 61.48
        },
        {
          "kind": "tap",
          "t": 6736.0,
          "x": 141.17,
          "y": 62.47
        },
        {
          "kind": "tap",
          "t": 6938.0,
          "x": 94.55,
          "y": 61.12
        },
        {
          "kind": "tap",
          "t": 7104.0,
          "x": 197.95,
          "y": 239.9
        },
        {
          "kind": "tap",
          "t": 7346.0,
          "x": 174.8,
          "y": 64.54
        },
        {
          "kind": "tap",
          "t": 7563.0,
          "x": 237.74,
          "y": 125.83
        },
        {
          "kind": "tap",
          "t": 7789.0,
          "x": 100.07,
          "y": 68.97
        },
        {
          "kind": "tap",
          "t": 7997.0,
          "x": 205.95,
          "y": 230.39
        },
        {
          "kind": "tap",
          "t": 8169.0,
          "x": 355.13,
          "y": 127.78
        },
        {
          "kind": "tap",
          "t": 8411.0,
          "x": 301.15,
          "y": 71.68
        },
        {
          "kind": "tap",
          "t": 8573.0,
          "x": 191.0,
          "y": 122.84
        },
        {
          "kind": "tap",
          "t": 8754.0,
          "x": 222.84,
          "y": 129.34
        },
        {
          "kind": "tap",
          "t": 9001.0,
          "x": 173.09,
          "y": 74.46
        },
        {
          "kind": "tap",
          "t": 9188.0,
          "x": 190.27,
          "y": 231.26
        },
        {
          "kind": "tap",
          "t": 9338.0,
          "x": 122.0,
          "y": 122.43
        },
        {
          "kind": "tap",
          "t": 9513.0,
          "x": 291.63,
          "y": 66.25
        },
        {
          "kind": "tap",
          "t": 9717.0,
          "x": 135.64,
          "y": 122.1
        },
        {
          "kind": "tap",
          "t": 9921.0,
          "x": 202.63,
          "y": 228.05
        },
        {
          "kind": "tap",
          "t": 10167.0,
          "x": 205.35,
          "y": 236.31
        }
      ],
      "moments": [
        {
          "t": 611.0,
          "intended": "The",
          "samsung": {
            "committed": "The",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1594.0,
          "intended": "wind",
          "samsung": {
            "committed": "wind",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "wind",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "wind",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2655.0,
          "intended": "came",
          "samsung": {
            "committed": "came",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "came",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "came",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3982.0,
          "intended": "over",
          "samsung": {
            "committed": "oveer",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "over",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "over",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 4798.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5907.0,
          "intended": "ridge",
          "samsung": {
            "committed": "ridge",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "ridge",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "ridge",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7104.0,
          "intended": "before",
          "samsung": {
            "committed": "before",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "before",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "before",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7997.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9188.0,
          "intended": "light",
          "samsung": {
            "committed": "light",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "light",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "light",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9921.0,
          "intended": "did.",
          "samsung": {
            "committed": "did.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "did.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "did.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "The wind came oveer the ridge before the light did.",
        "ours": {
          "control": "The wind came over the ridge before the light did.",
          "treatment-ceiling10k": "The wind came over the ridge before the light did."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-01",
      "kind": "tap",
      "frame": "ours",
      "intended": "I left the car at the low gate and walked the track north",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 297.56,
          "y": 70.06
        },
        {
          "kind": "tap",
          "t": 210.0,
          "x": 202.68,
          "y": 235.34
        },
        {
          "kind": "tap",
          "t": 455.0,
          "x": 355.96,
          "y": 123.45
        },
        {
          "kind": "tap",
          "t": 626.0,
          "x": 104.57,
          "y": 75.72
        },
        {
          "kind": "tap",
          "t": 780.0,
          "x": 163.09,
          "y": 130.51
        },
        {
          "kind": "tap",
          "t": 1026.0,
          "x": 182.36,
          "y": 66.58
        },
        {
          "kind": "tap",
          "t": 1255.0,
          "x": 196.55,
          "y": 225.01
        },
        {
          "kind": "tap",
          "t": 1502.0,
          "x": 179.46,
          "y": 67.73
        },
        {
          "kind": "tap",
          "t": 1751.0,
          "x": 235.57,
          "y": 122.91
        },
        {
          "kind": "tap",
          "t": 1985.0,
          "x": 102.02,
          "y": 73.24
        },
        {
          "kind": "tap",
          "t": 2202.0,
          "x": 206.26,
          "y": 237.19
        },
        {
          "kind": "tap",
          "t": 2398.0,
          "x": 159.26,
          "y": 187.4
        },
        {
          "kind": "tap",
          "t": 2579.0,
          "x": 44.41,
          "y": 120.96
        },
        {
          "kind": "tap",
          "t": 2809.0,
          "x": 149.98,
          "y": 68.55
        },
        {
          "kind": "tap",
          "t": 3016.0,
          "x": 204.32,
          "y": 226.47
        },
        {
          "kind": "tap",
          "t": 3188.0,
          "x": 46.7,
          "y": 127.29
        },
        {
          "kind": "tap",
          "t": 3369.0,
          "x": 179.87,
          "y": 77.63
        },
        {
          "kind": "tap",
          "t": 3557.0,
          "x": 194.39,
          "y": 225.64
        },
        {
          "kind": "tap",
          "t": 3802.0,
          "x": 175.16,
          "y": 76.41
        },
        {
          "kind": "tap",
          "t": 4024.0,
          "x": 244.24,
          "y": 127.24
        },
        {
          "kind": "tap",
          "t": 4175.0,
          "x": 99.38,
          "y": 69.57
        },
        {
          "kind": "tap",
          "t": 4414.0,
          "x": 205.84,
          "y": 222.67
        },
        {
          "kind": "tap",
          "t": 4658.0,
          "x": 360.1,
          "y": 125.16
        },
        {
          "kind": "tap",
          "t": 4824.0,
          "x": 334.13,
          "y": 78.02
        },
        {
          "kind": "tap",
          "t": 5012.0,
          "x": 70.44,
          "y": 72.37
        },
        {
          "kind": "tap",
          "t": 5226.0,
          "x": 202.75,
          "y": 217.09
        },
        {
          "kind": "tap",
          "t": 5389.0,
          "x": 198.76,
          "y": 115.72
        },
        {
          "kind": "tap",
          "t": 5632.0,
          "x": 36.32,
          "y": 130.2
        },
        {
          "kind": "tap",
          "t": 5852.0,
          "x": 185.32,
          "y": 70.75
        },
        {
          "kind": "tap",
          "t": 6099.0,
          "x": 103.82,
          "y": 71.81
        },
        {
          "kind": "tap",
          "t": 6256.0,
          "x": 199.89,
          "y": 234.94
        },
        {
          "kind": "tap",
          "t": 6449.0,
          "x": 49.59,
          "y": 124.86
        },
        {
          "kind": "tap",
          "t": 6620.0,
          "x": 286.23,
          "y": 178.56
        },
        {
          "kind": "tap",
          "t": 6859.0,
          "x": 131.28,
          "y": 124.86
        },
        {
          "kind": "tap",
          "t": 7037.0,
          "x": 201.1,
          "y": 232.29
        },
        {
          "kind": "tap",
          "t": 7193.0,
          "x": 64.51,
          "y": 75.17
        },
        {
          "kind": "tap",
          "t": 7385.0,
          "x": 52.35,
          "y": 128.87
        },
        {
          "kind": "tap",
          "t": 7569.0,
          "x": 359.87,
          "y": 118.41
        },
        {
          "kind": "tap",
          "t": 7731.0,
          "x": 322.64,
          "y": 128.26
        },
        {
          "kind": "tap",
          "t": 7945.0,
          "x": 107.85,
          "y": 75.64
        },
        {
          "kind": "tap",
          "t": 8156.0,
          "x": 113.11,
          "y": 113.34
        },
        {
          "kind": "tap",
          "t": 8378.0,
          "x": 197.68,
          "y": 245.39
        },
        {
          "kind": "tap",
          "t": 8591.0,
          "x": 170.93,
          "y": 74.66
        },
        {
          "kind": "tap",
          "t": 8796.0,
          "x": 233.78,
          "y": 124.82
        },
        {
          "kind": "tap",
          "t": 8996.0,
          "x": 105.98,
          "y": 63.21
        },
        {
          "kind": "tap",
          "t": 9181.0,
          "x": 196.4,
          "y": 227.79
        },
        {
          "kind": "tap",
          "t": 9355.0,
          "x": 166.61,
          "y": 59.92
        },
        {
          "kind": "tap",
          "t": 9561.0,
          "x": 138.54,
          "y": 68.34
        },
        {
          "kind": "tap",
          "t": 9727.0,
          "x": 36.92,
          "y": 121.66
        },
        {
          "kind": "tap",
          "t": 9952.0,
          "x": 161.94,
          "y": 180.69
        },
        {
          "kind": "tap",
          "t": 10124.0,
          "x": 308.53,
          "y": 123.58
        },
        {
          "kind": "tap",
          "t": 10288.0,
          "x": 205.52,
          "y": 236.45
        },
        {
          "kind": "tap",
          "t": 10450.0,
          "x": 274.4,
          "y": 176.46
        },
        {
          "kind": "tap",
          "t": 10601.0,
          "x": 329.9,
          "y": 67.53
        },
        {
          "kind": "tap",
          "t": 10755.0,
          "x": 138.96,
          "y": 78.89
        },
        {
          "kind": "tap",
          "t": 10939.0,
          "x": 169.5,
          "y": 68.51
        },
        {
          "kind": "tap",
          "t": 11160.0,
          "x": 239.64,
          "y": 136.15
        },
        {
          "kind": "tap",
          "t": 11352.0,
          "x": 197.37,
          "y": 241.38
        },
        {
          "kind": "tap",
          "t": 11507.0,
          "x": 196.07,
          "y": 227.11
        }
      ],
      "moments": [
        {
          "t": 210.0,
          "intended": "I",
          "samsung": {
            "committed": "I",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "I",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "I",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 1255.0,
          "intended": "left",
          "samsung": {
            "committed": "left",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "left",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "left",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2202.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3016.0,
          "intended": "car",
          "samsung": {
            "committed": "car",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "car",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "car",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3557.0,
          "intended": "at",
          "samsung": {
            "committed": "at",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "at",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "at",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4414.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5226.0,
          "intended": "low",
          "samsung": {
            "committed": "low",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "low",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "low",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6256.0,
          "intended": "gate",
          "samsung": {
            "committed": "gate",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "gate",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "gate",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7037.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8378.0,
          "intended": "walked",
          "samsung": {
            "committed": "walked",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "walked",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "walked",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9181.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10288.0,
          "intended": "track",
          "samsung": {
            "committed": "track",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "track",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "track",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 11352.0,
          "intended": "north.",
          "samsung": {
            "committed": "north.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "north.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "north.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "I left the car at the low gate and walked the track north.",
        "ours": {
          "control": "I left the car at the low gate and walked the track north.",
          "treatment-ceiling10k": "I left the car at the low gate and walked the track north."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-02",
      "kind": "tap",
      "frame": "ours",
      "intended": "Rain sat in the grass and soaked through the seams of my boots",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 142.11,
          "y": 73.2
        },
        {
          "kind": "tap",
          "t": 248.0,
          "x": 47.7,
          "y": 127.29
        },
        {
          "kind": "tap",
          "t": 445.0,
          "x": 299.96,
          "y": 70.85
        },
        {
          "kind": "tap",
          "t": 622.0,
          "x": 270.9,
          "y": 178.22
        },
        {
          "kind": "tap",
          "t": 793.0,
          "x": 200.59,
          "y": 237.57
        },
        {
          "kind": "tap",
          "t": 1025.0,
          "x": 86.51,
          "y": 125.89
        },
        {
          "kind": "tap",
          "t": 1189.0,
          "x": 35.57,
          "y": 125.72
        },
        {
          "kind": "tap",
          "t": 1418.0,
          "x": 192.27,
          "y": 72.52
        },
        {
          "kind": "tap",
          "t": 1615.0,
          "x": 209.65,
          "y": 225.51
        },
        {
          "kind": "tap",
          "t": 1863.0,
          "x": 295.94,
          "y": 78.54
        },
        {
          "kind": "tap",
          "t": 2111.0,
          "x": 275.31,
          "y": 183.75
        },
        {
          "kind": "tap",
          "t": 2331.0,
          "x": 195.2,
          "y": 231.41
        },
        {
          "kind": "tap",
          "t": 2487.0,
          "x": 166.26,
          "y": 72.87
        },
        {
          "kind": "tap",
          "t": 2652.0,
          "x": 243.87,
          "y": 134.61
        },
        {
          "kind": "tap",
          "t": 2825.0,
          "x": 96.85,
          "y": 70.16
        },
        {
          "kind": "tap",
          "t": 3052.0,
          "x": 199.48,
          "y": 232.71
        },
        {
          "kind": "tap",
          "t": 3230.0,
          "x": 192.88,
          "y": 127.14
        },
        {
          "kind": "tap",
          "t": 3443.0,
          "x": 141.02,
          "y": 78.69
        },
        {
          "kind": "tap",
          "t": 3604.0,
          "x": 37.35,
          "y": 118.69
        },
        {
          "kind": "tap",
          "t": 3805.0,
          "x": 84.83,
          "y": 122.95
        },
        {
          "kind": "tap",
          "t": 3955.0,
          "x": 83.19,
          "y": 133.05
        },
        {
          "kind": "tap",
          "t": 4172.0,
          "x": 205.21,
          "y": 238.27
        },
        {
          "kind": "tap",
          "t": 4343.0,
          "x": 47.47,
          "y": 126.24
        },
        {
          "kind": "tap",
          "t": 4583.0,
          "x": 273.53,
          "y": 181.51
        },
        {
          "kind": "tap",
          "t": 4782.0,
          "x": 119.22,
          "y": 122.05
        },
        {
          "kind": "tap",
          "t": 4978.0,
          "x": 198.02,
          "y": 226.65
        },
        {
          "kind": "tap",
          "t": 5152.0,
          "x": 84.66,
          "y": 124.36
        },
        {
          "kind": "tap",
          "t": 5356.0,
          "x": 336.45,
          "y": 63.23
        },
        {
          "kind": "tap",
          "t": 5591.0,
          "x": 44.21,
          "y": 113.2
        },
        {
          "kind": "tap",
          "t": 5825.0,
          "x": 312.35,
          "y": 123.84
        },
        {
          "kind": "tap",
          "t": 6035.0,
          "x": 112.14,
          "y": 65.13
        },
        {
          "kind": "tap",
          "t": 6189.0,
          "x": 127.68,
          "y": 123.56
        },
        {
          "kind": "tap",
          "t": 6428.0,
          "x": 209.77,
          "y": 238.34
        },
        {
          "kind": "tap",
          "t": 6645.0,
          "x": 174.52,
          "y": 80.98
        },
        {
          "kind": "tap",
          "t": 6868.0,
          "x": 237.08,
          "y": 117.05
        },
        {
          "kind": "tap",
          "t": 7046.0,
          "x": 142.55,
          "y": 61.66
        },
        {
          "kind": "tap",
          "t": 7216.0,
          "x": 336.88,
          "y": 80.37
        },
        {
          "kind": "tap",
          "t": 7428.0,
          "x": 259.89,
          "y": 71.29
        },
        {
          "kind": "tap",
          "t": 7677.0,
          "x": 206.45,
          "y": 119.32
        },
        {
          "kind": "tap",
          "t": 7851.0,
          "x": 244.58,
          "y": 116.34
        },
        {
          "kind": "tap",
          "t": 8030.0,
          "x": 206.43,
          "y": 234.81
        },
        {
          "kind": "tap",
          "t": 8199.0,
          "x": 177.45,
          "y": 67.63
        },
        {
          "kind": "tap",
          "t": 8396.0,
          "x": 228.75,
          "y": 121.92
        },
        {
          "kind": "tap",
          "t": 8582.0,
          "x": 110.63,
          "y": 68.44
        },
        {
          "kind": "tap",
          "t": 8822.0,
          "x": 203.13,
          "y": 215.38
        },
        {
          "kind": "tap",
          "t": 8987.0,
          "x": 93.46,
          "y": 136.06
        },
        {
          "kind": "tap",
          "t": 9171.0,
          "x": 104.0,
          "y": 76.67
        },
        {
          "kind": "tap",
          "t": 9414.0,
          "x": 316.9,
          "y": 168.51
        },
        {
          "kind": "tap",
          "t": 9650.0,
          "x": 83.93,
          "y": 120.3
        },
        {
          "kind": "tap",
          "t": 9855.0,
          "x": 202.59,
          "y": 241.18
        },
        {
          "kind": "tap",
          "t": 10104.0,
          "x": 319.6,
          "y": 61.21
        },
        {
          "kind": "tap",
          "t": 10339.0,
          "x": 171.61,
          "y": 140.61
        },
        {
          "kind": "tap",
          "t": 10517.0,
          "x": 208.08,
          "y": 223.85
        },
        {
          "kind": "tap",
          "t": 10761.0,
          "x": 322.12,
          "y": 183.73
        },
        {
          "kind": "tap",
          "t": 10930.0,
          "x": 225.16,
          "y": 65.63
        },
        {
          "kind": "tap",
          "t": 11178.0,
          "x": 205.69,
          "y": 228.95
        },
        {
          "kind": "tap",
          "t": 11374.0,
          "x": 235.22,
          "y": 178.32
        },
        {
          "kind": "tap",
          "t": 11537.0,
          "x": 330.05,
          "y": 58.88
        },
        {
          "kind": "tap",
          "t": 11689.0,
          "x": 339.4,
          "y": 54.17
        },
        {
          "kind": "tap",
          "t": 11901.0,
          "x": 178.43,
          "y": 83.77
        },
        {
          "kind": "tap",
          "t": 12134.0,
          "x": 83.51,
          "y": 130.24
        },
        {
          "kind": "tap",
          "t": 12304.0,
          "x": 203.4,
          "y": 229.15
        },
        {
          "kind": "tap",
          "t": 12553.0,
          "x": 189.87,
          "y": 234.37
        }
      ],
      "moments": [
        {
          "t": 793.0,
          "intended": "Rain",
          "samsung": {
            "committed": "Rain",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "Rain",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "Rain",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1615.0,
          "intended": "sat",
          "samsung": {
            "committed": "sat",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "sat",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "sat",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2331.0,
          "intended": "in",
          "samsung": {
            "committed": "in",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "in",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "in",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3052.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4172.0,
          "intended": "grass",
          "samsung": {
            "committed": "grass",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "grass",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "grass",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4978.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6428.0,
          "intended": "soaked",
          "samsung": {
            "committed": "soaked",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "soaked",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "soaked",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8030.0,
          "intended": "through",
          "samsung": {
            "committed": "through",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "through",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "through",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8822.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9855.0,
          "intended": "seams",
          "samsung": {
            "committed": "sems",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "seems",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "seems",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 10517.0,
          "intended": "of",
          "samsung": {
            "committed": "of",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "of",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "of",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 11178.0,
          "intended": "my",
          "samsung": {
            "committed": "my",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "my",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "my",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 12304.0,
          "intended": "boots.",
          "samsung": {
            "committed": "boots.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "boots.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "boots.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "Rain sat in the grass and soaked through the sems of my boots.",
        "ours": {
          "control": "Rain sat in the grass and soaked through the seems of my boots.",
          "treatment-ceiling10k": "Rain sat in the grass and soaked through the seems of my boots."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-03",
      "kind": "tap",
      "frame": "ours",
      "intended": "A pair of ravens turned above the crag and went quiet",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 48.95,
          "y": 128.84
        },
        {
          "kind": "tap",
          "t": 151.0,
          "x": 205.36,
          "y": 242.61
        },
        {
          "kind": "tap",
          "t": 337.0,
          "x": 375.69,
          "y": 71.14
        },
        {
          "kind": "tap",
          "t": 580.0,
          "x": 45.31,
          "y": 120.52
        },
        {
          "kind": "tap",
          "t": 746.0,
          "x": 301.7,
          "y": 72.45
        },
        {
          "kind": "tap",
          "t": 928.0,
          "x": 285.17,
          "y": 61.61
        },
        {
          "kind": "tap",
          "t": 1103.0,
          "x": 143.63,
          "y": 66.49
        },
        {
          "kind": "tap",
          "t": 1296.0,
          "x": 196.59,
          "y": 232.42
        },
        {
          "kind": "tap",
          "t": 1524.0,
          "x": 338.55,
          "y": 68.32
        },
        {
          "kind": "tap",
          "t": 1695.0,
          "x": 159.8,
          "y": 128.82
        },
        {
          "kind": "tap",
          "t": 1922.0,
          "x": 205.16,
          "y": 230.1
        },
        {
          "kind": "tap",
          "t": 2146.0,
          "x": 149.04,
          "y": 69.0
        },
        {
          "kind": "tap",
          "t": 2333.0,
          "x": 50.95,
          "y": 120.78
        },
        {
          "kind": "tap",
          "t": 2543.0,
          "x": 199.39,
          "y": 194.5
        },
        {
          "kind": "tap",
          "t": 2780.0,
          "x": 99.09,
          "y": 72.67
        },
        {
          "kind": "tap",
          "t": 2971.0,
          "x": 277.24,
          "y": 161.14
        },
        {
          "kind": "tap",
          "t": 3208.0,
          "x": 84.87,
          "y": 123.75
        },
        {
          "kind": "tap",
          "t": 3386.0,
          "x": 196.51,
          "y": 231.86
        },
        {
          "kind": "tap",
          "t": 3563.0,
          "x": 179.23,
          "y": 67.53
        },
        {
          "kind": "tap",
          "t": 3754.0,
          "x": 260.4,
          "y": 69.22
        },
        {
          "kind": "tap",
          "t": 3919.0,
          "x": 137.87,
          "y": 57.21
        },
        {
          "kind": "tap",
          "t": 4111.0,
          "x": 280.02,
          "y": 179.71
        },
        {
          "kind": "tap",
          "t": 4293.0,
          "x": 103.28,
          "y": 65.1
        },
        {
          "kind": "tap",
          "t": 4475.0,
          "x": 124.94,
          "y": 130.08
        },
        {
          "kind": "tap",
          "t": 4709.0,
          "x": 215.56,
          "y": 240.18
        },
        {
          "kind": "tap",
          "t": 4955.0,
          "x": 43.23,
          "y": 131.88
        },
        {
          "kind": "tap",
          "t": 5156.0,
          "x": 248.36,
          "y": 173.51
        },
        {
          "kind": "tap",
          "t": 5345.0,
          "x": 328.36,
          "y": 77.17
        },
        {
          "kind": "tap",
          "t": 5533.0,
          "x": 195.98,
          "y": 173.33
        },
        {
          "kind": "tap",
          "t": 5701.0,
          "x": 98.88,
          "y": 64.78
        },
        {
          "kind": "tap",
          "t": 5890.0,
          "x": 198.81,
          "y": 221.04
        },
        {
          "kind": "tap",
          "t": 6123.0,
          "x": 178.47,
          "y": 73.9
        },
        {
          "kind": "tap",
          "t": 6296.0,
          "x": 250.72,
          "y": 120.97
        },
        {
          "kind": "tap",
          "t": 6466.0,
          "x": 107.03,
          "y": 82.45
        },
        {
          "kind": "tap",
          "t": 6648.0,
          "x": 211.42,
          "y": 232.23
        },
        {
          "kind": "tap",
          "t": 6862.0,
          "x": 157.13,
          "y": 174.94
        },
        {
          "kind": "tap",
          "t": 7035.0,
          "x": 140.41,
          "y": 76.32
        },
        {
          "kind": "tap",
          "t": 7220.0,
          "x": 38.71,
          "y": 124.5
        },
        {
          "kind": "tap",
          "t": 7453.0,
          "x": 200.64,
          "y": 117.5
        },
        {
          "kind": "tap",
          "t": 7617.0,
          "x": 196.81,
          "y": 234.23
        },
        {
          "kind": "tap",
          "t": 7779.0,
          "x": 48.07,
          "y": 119.61
        },
        {
          "kind": "tap",
          "t": 7978.0,
          "x": 283.48,
          "y": 175.36
        },
        {
          "kind": "tap",
          "t": 8131.0,
          "x": 123.44,
          "y": 118.5
        },
        {
          "kind": "tap",
          "t": 8347.0,
          "x": 201.23,
          "y": 232.53
        },
        {
          "kind": "tap",
          "t": 8551.0,
          "x": 61.38,
          "y": 76.17
        },
        {
          "kind": "tap",
          "t": 8771.0,
          "x": 110.15,
          "y": 64.09
        },
        {
          "kind": "tap",
          "t": 9003.0,
          "x": 262.32,
          "y": 181.0
        },
        {
          "kind": "tap",
          "t": 9202.0,
          "x": 181.03,
          "y": 76.94
        },
        {
          "kind": "tap",
          "t": 9388.0,
          "x": 192.14,
          "y": 230.49
        },
        {
          "kind": "tap",
          "t": 9558.0,
          "x": 25.12,
          "y": 71.53
        },
        {
          "kind": "tap",
          "t": 9733.0,
          "x": 261.78,
          "y": 63.52
        },
        {
          "kind": "tap",
          "t": 9908.0,
          "x": 298.96,
          "y": 64.22
        },
        {
          "kind": "tap",
          "t": 10120.0,
          "x": 103.45,
          "y": 77.21
        },
        {
          "kind": "tap",
          "t": 10328.0,
          "x": 179.57,
          "y": 76.78
        },
        {
          "kind": "tap",
          "t": 10509.0,
          "x": 194.81,
          "y": 222.2
        },
        {
          "kind": "tap",
          "t": 10676.0,
          "x": 203.77,
          "y": 236.95
        }
      ],
      "moments": [
        {
          "t": 151.0,
          "intended": "A",
          "samsung": {
            "committed": "A",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "A",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "A",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 1296.0,
          "intended": "pair",
          "samsung": {
            "committed": "paiir",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "pair",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "pair",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 1922.0,
          "intended": "of",
          "samsung": {
            "committed": "of",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "of",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "of",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3386.0,
          "intended": "ravens",
          "samsung": {
            "committed": "ravens",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "ravens",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "ravens",
              "bar": null,
              "decision": "silent"
            }
          },
          "apple": null
        },
        {
          "t": 4709.0,
          "intended": "turned",
          "samsung": {
            "committed": "turned",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "turned",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "turned",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5890.0,
          "intended": "above",
          "samsung": {
            "committed": "above",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "above",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "above",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6648.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7617.0,
          "intended": "crag",
          "samsung": {
            "committed": "crag",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "crag",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "crag",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8347.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9388.0,
          "intended": "went",
          "samsung": {
            "committed": "went",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "went",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "went",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10509.0,
          "intended": "quiet.",
          "samsung": {
            "committed": "quiet.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "quiet.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "quiet.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "A paiir of ravens turned above the crag and went quiet.",
        "ours": {
          "control": "A pair of ravens turned above the crag and went quiet.",
          "treatment-ceiling10k": "A pair of ravens turned above the crag and went quiet."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-04",
      "kind": "tap",
      "frame": "ours",
      "intended": "The path bends east where the old fence gives out",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 182.24,
          "y": 82.66
        },
        {
          "kind": "tap",
          "t": 216.0,
          "x": 238.84,
          "y": 121.51
        },
        {
          "kind": "tap",
          "t": 444.0,
          "x": 116.51,
          "y": 71.65
        },
        {
          "kind": "tap",
          "t": 604.0,
          "x": 202.54,
          "y": 230.76
        },
        {
          "kind": "tap",
          "t": 766.0,
          "x": 376.51,
          "y": 74.48
        },
        {
          "kind": "tap",
          "t": 961.0,
          "x": 43.72,
          "y": 135.57
        },
        {
          "kind": "tap",
          "t": 1197.0,
          "x": 178.18,
          "y": 77.93
        },
        {
          "kind": "tap",
          "t": 1372.0,
          "x": 231.96,
          "y": 129.79
        },
        {
          "kind": "tap",
          "t": 1542.0,
          "x": 201.64,
          "y": 238.57
        },
        {
          "kind": "tap",
          "t": 1714.0,
          "x": 236.15,
          "y": 175.7
        },
        {
          "kind": "tap",
          "t": 1918.0,
          "x": 105.97,
          "y": 71.22
        },
        {
          "kind": "tap",
          "t": 2167.0,
          "x": 272.44,
          "y": 178.41
        },
        {
          "kind": "tap",
          "t": 2378.0,
          "x": 121.68,
          "y": 117.19
        },
        {
          "kind": "tap",
          "t": 2534.0,
          "x": 80.35,
          "y": 120.92
        },
        {
          "kind": "tap",
          "t": 2719.0,
          "x": 189.97,
          "y": 237.27
        },
        {
          "kind": "tap",
          "t": 2882.0,
          "x": 112.31,
          "y": 80.15
        },
        {
          "kind": "tap",
          "t": 3037.0,
          "x": 50.22,
          "y": 122.01
        },
        {
          "kind": "tap",
          "t": 3250.0,
          "x": 100.91,
          "y": 126.65
        },
        {
          "kind": "tap",
          "t": 3440.0,
          "x": 180.74,
          "y": 63.82
        },
        {
          "kind": "tap",
          "t": 3627.0,
          "x": 200.56,
          "y": 229.25
        },
        {
          "kind": "tap",
          "t": 3844.0,
          "x": 62.06,
          "y": 75.99
        },
        {
          "kind": "tap",
          "t": 4037.0,
          "x": 228.71,
          "y": 125.72
        },
        {
          "kind": "tap",
          "t": 4206.0,
          "x": 100.72,
          "y": 62.55
        },
        {
          "kind": "tap",
          "t": 4430.0,
          "x": 145.12,
          "y": 66.63
        },
        {
          "kind": "tap",
          "t": 4593.0,
          "x": 111.42,
          "y": 67.1
        },
        {
          "kind": "tap",
          "t": 4770.0,
          "x": 194.87,
          "y": 236.06
        },
        {
          "kind": "tap",
          "t": 4970.0,
          "x": 173.42,
          "y": 69.93
        },
        {
          "kind": "tap",
          "t": 5120.0,
          "x": 239.4,
          "y": 126.27
        },
        {
          "kind": "tap",
          "t": 5348.0,
          "x": 106.21,
          "y": 72.57
        },
        {
          "kind": "tap",
          "t": 5538.0,
          "x": 201.83,
          "y": 236.94
        },
        {
          "kind": "tap",
          "t": 5767.0,
          "x": 340.82,
          "y": 70.66
        },
        {
          "kind": "tap",
          "t": 5965.0,
          "x": 361.77,
          "y": 118.7
        },
        {
          "kind": "tap",
          "t": 6174.0,
          "x": 107.86,
          "y": 119.37
        },
        {
          "kind": "tap",
          "t": 6361.0,
          "x": 201.53,
          "y": 231.85
        },
        {
          "kind": "tap",
          "t": 6550.0,
          "x": 157.63,
          "y": 125.41
        },
        {
          "kind": "tap",
          "t": 6736.0,
          "x": 114.23,
          "y": 64.94
        },
        {
          "kind": "tap",
          "t": 6963.0,
          "x": 277.36,
          "y": 194.22
        },
        {
          "kind": "tap",
          "t": 7186.0,
          "x": 156.1,
          "y": 186.41
        },
        {
          "kind": "tap",
          "t": 7407.0,
          "x": 118.56,
          "y": 77.07
        },
        {
          "kind": "tap",
          "t": 7610.0,
          "x": 203.71,
          "y": 233.12
        },
        {
          "kind": "tap",
          "t": 7858.0,
          "x": 207.16,
          "y": 112.71
        },
        {
          "kind": "tap",
          "t": 8076.0,
          "x": 305.62,
          "y": 75.58
        },
        {
          "kind": "tap",
          "t": 8227.0,
          "x": 203.71,
          "y": 174.36
        },
        {
          "kind": "tap",
          "t": 8406.0,
          "x": 106.21,
          "y": 76.76
        },
        {
          "kind": "tap",
          "t": 8648.0,
          "x": 86.31,
          "y": 123.56
        },
        {
          "kind": "tap",
          "t": 8857.0,
          "x": 201.79,
          "y": 214.69
        },
        {
          "kind": "tap",
          "t": 9032.0,
          "x": 327.07,
          "y": 77.83
        },
        {
          "kind": "tap",
          "t": 9182.0,
          "x": 251.67,
          "y": 62.07
        },
        {
          "kind": "tap",
          "t": 9411.0,
          "x": 178.68,
          "y": 78.38
        },
        {
          "kind": "tap",
          "t": 9618.0,
          "x": 205.32,
          "y": 235.2
        },
        {
          "kind": "tap",
          "t": 9862.0,
          "x": 202.48,
          "y": 239.22
        }
      ],
      "moments": [
        {
          "t": 604.0,
          "intended": "The",
          "samsung": {
            "committed": "The",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1542.0,
          "intended": "path",
          "samsung": {
            "committed": "path",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "path",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "path",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2719.0,
          "intended": "bends",
          "samsung": {
            "committed": "bends",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "bends",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "bends",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3627.0,
          "intended": "east",
          "samsung": {
            "committed": "east",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "eadt",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "eadt",
              "bar": null,
              "decision": "silent"
            }
          },
          "apple": null
        },
        {
          "t": 4770.0,
          "intended": "where",
          "samsung": {
            "committed": "where",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "where",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "where",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5538.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6361.0,
          "intended": "old",
          "samsung": {
            "committed": "old",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "old",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "old",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7610.0,
          "intended": "fence",
          "samsung": {
            "committed": "fence",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "fence",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "fence",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8857.0,
          "intended": "gives",
          "samsung": {
            "committed": "gives",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "gives",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "gives",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9618.0,
          "intended": "out.",
          "samsung": {
            "committed": "out.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "out.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "out.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "The path bends east where the old fence gives out.",
        "ours": {
          "control": "The path bends eadt where the old fence gives out.",
          "treatment-ceiling10k": "The path bends eadt where the old fence gives out."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-05",
      "kind": "tap",
      "frame": "ours",
      "intended": "I stopped at the burn and filled the bottle from a clean fall",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 304.7,
          "y": 74.46
        },
        {
          "kind": "tap",
          "t": 227.0,
          "x": 195.2,
          "y": 225.59
        },
        {
          "kind": "tap",
          "t": 459.0,
          "x": 89.82,
          "y": 131.24
        },
        {
          "kind": "tap",
          "t": 638.0,
          "x": 179.53,
          "y": 72.19
        },
        {
          "kind": "tap",
          "t": 832.0,
          "x": 334.99,
          "y": 72.96
        },
        {
          "kind": "tap",
          "t": 1023.0,
          "x": 374.14,
          "y": 70.42
        },
        {
          "kind": "tap",
          "t": 1176.0,
          "x": 371.55,
          "y": 63.58
        },
        {
          "kind": "tap",
          "t": 1386.0,
          "x": 102.24,
          "y": 80.56
        },
        {
          "kind": "tap",
          "t": 1584.0,
          "x": 127.96,
          "y": 120.73
        },
        {
          "kind": "tap",
          "t": 1821.0,
          "x": 207.09,
          "y": 230.65
        },
        {
          "kind": "tap",
          "t": 2067.0,
          "x": 40.07,
          "y": 118.21
        },
        {
          "kind": "tap",
          "t": 2254.0,
          "x": 180.11,
          "y": 63.99
        },
        {
          "kind": "tap",
          "t": 2483.0,
          "x": 193.13,
          "y": 235.3
        },
        {
          "kind": "tap",
          "t": 2642.0,
          "x": 184.11,
          "y": 74.26
        },
        {
          "kind": "tap",
          "t": 2803.0,
          "x": 238.07,
          "y": 122.85
        },
        {
          "kind": "tap",
          "t": 2961.0,
          "x": 107.75,
          "y": 70.09
        },
        {
          "kind": "tap",
          "t": 3157.0,
          "x": 201.23,
          "y": 234.13
        },
        {
          "kind": "tap",
          "t": 3351.0,
          "x": 256.25,
          "y": 182.45
        },
        {
          "kind": "tap",
          "t": 3564.0,
          "x": 253.99,
          "y": 70.63
        },
        {
          "kind": "tap",
          "t": 3804.0,
          "x": 138.38,
          "y": 69.14
        },
        {
          "kind": "tap",
          "t": 3988.0,
          "x": 273.28,
          "y": 181.33
        },
        {
          "kind": "tap",
          "t": 4216.0,
          "x": 201.68,
          "y": 238.61
        },
        {
          "kind": "tap",
          "t": 4389.0,
          "x": 44.2,
          "y": 118.2
        },
        {
          "kind": "tap",
          "t": 4629.0,
          "x": 271.11,
          "y": 170.1
        },
        {
          "kind": "tap",
          "t": 4849.0,
          "x": 129.61,
          "y": 138.19
        },
        {
          "kind": "tap",
          "t": 5069.0,
          "x": 190.21,
          "y": 240.17
        },
        {
          "kind": "tap",
          "t": 5303.0,
          "x": 164.6,
          "y": 126.12
        },
        {
          "kind": "tap",
          "t": 5494.0,
          "x": 311.09,
          "y": 63.76
        },
        {
          "kind": "tap",
          "t": 5660.0,
          "x": 359.38,
          "y": 122.24
        },
        {
          "kind": "tap",
          "t": 5852.0,
          "x": 365.12,
          "y": 113.34
        },
        {
          "kind": "tap",
          "t": 6059.0,
          "x": 104.78,
          "y": 64.19
        },
        {
          "kind": "tap",
          "t": 6261.0,
          "x": 127.63,
          "y": 121.82
        },
        {
          "kind": "tap",
          "t": 6426.0,
          "x": 199.37,
          "y": 225.22
        },
        {
          "kind": "tap",
          "t": 6595.0,
          "x": 182.14,
          "y": 66.27
        },
        {
          "kind": "tap",
          "t": 6792.0,
          "x": 247.94,
          "y": 122.84
        },
        {
          "kind": "tap",
          "t": 7006.0,
          "x": 105.21,
          "y": 61.83
        },
        {
          "kind": "tap",
          "t": 7197.0,
          "x": 200.9,
          "y": 230.72
        },
        {
          "kind": "tap",
          "t": 7353.0,
          "x": 241.15,
          "y": 168.77
        },
        {
          "kind": "tap",
          "t": 7592.0,
          "x": 336.87,
          "y": 69.06
        },
        {
          "kind": "tap",
          "t": 7806.0,
          "x": 190.9,
          "y": 69.38
        },
        {
          "kind": "tap",
          "t": 8014.0,
          "x": 182.62,
          "y": 61.95
        },
        {
          "kind": "tap",
          "t": 8186.0,
          "x": 352.67,
          "y": 124.62
        },
        {
          "kind": "tap",
          "t": 8418.0,
          "x": 100.26,
          "y": 77.78
        },
        {
          "kind": "tap",
          "t": 8568.0,
          "x": 201.73,
          "y": 237.36
        },
        {
          "kind": "tap",
          "t": 8811.0,
          "x": 159.1,
          "y": 120.09
        },
        {
          "kind": "tap",
          "t": 9059.0,
          "x": 135.9,
          "y": 64.08
        },
        {
          "kind": "tap",
          "t": 9257.0,
          "x": 334.2,
          "y": 68.39
        },
        {
          "kind": "tap",
          "t": 9466.0,
          "x": 316.81,
          "y": 171.96
        },
        {
          "kind": "tap",
          "t": 9625.0,
          "x": 210.28,
          "y": 249.33
        },
        {
          "kind": "tap",
          "t": 9780.0,
          "x": 46.09,
          "y": 121.58
        },
        {
          "kind": "tap",
          "t": 10026.0,
          "x": 201.1,
          "y": 235.56
        },
        {
          "kind": "tap",
          "t": 10266.0,
          "x": 172.33,
          "y": 177.85
        },
        {
          "kind": "tap",
          "t": 10509.0,
          "x": 353.36,
          "y": 128.86
        },
        {
          "kind": "tap",
          "t": 10724.0,
          "x": 102.72,
          "y": 72.1
        },
        {
          "kind": "tap",
          "t": 10918.0,
          "x": 48.59,
          "y": 126.67
        },
        {
          "kind": "tap",
          "t": 11116.0,
          "x": 277.53,
          "y": 186.5
        },
        {
          "kind": "tap",
          "t": 11328.0,
          "x": 192.83,
          "y": 231.9
        },
        {
          "kind": "tap",
          "t": 11541.0,
          "x": 169.52,
          "y": 119.83
        },
        {
          "kind": "tap",
          "t": 11764.0,
          "x": 53.14,
          "y": 129.74
        },
        {
          "kind": "tap",
          "t": 11984.0,
          "x": 350.96,
          "y": 135.49
        },
        {
          "kind": "tap",
          "t": 12232.0,
          "x": 365.71,
          "y": 125.03
        },
        {
          "kind": "tap",
          "t": 12476.0,
          "x": 191.07,
          "y": 228.06
        },
        {
          "kind": "tap",
          "t": 12710.0,
          "x": 195.73,
          "y": 228.44
        }
      ],
      "moments": [
        {
          "t": 227.0,
          "intended": "I",
          "samsung": {
            "committed": "I",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "I",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "I",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 1821.0,
          "intended": "stopped",
          "samsung": {
            "committed": "stopped",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "stopped",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "stopped",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2483.0,
          "intended": "at",
          "samsung": {
            "committed": "at",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "at",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "at",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3157.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4216.0,
          "intended": "burn",
          "samsung": {
            "committed": "nurn",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "nurn",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "nurn",
              "bar": null,
              "decision": "silent"
            }
          },
          "apple": null
        },
        {
          "t": 5069.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6426.0,
          "intended": "filled",
          "samsung": {
            "committed": "folled",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "filled",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "filled",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7197.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8568.0,
          "intended": "bottle",
          "samsung": {
            "committed": "bottle",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "bottle",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "bottle",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9625.0,
          "intended": "from",
          "samsung": {
            "committed": "from",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "from",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "from",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10026.0,
          "intended": "a",
          "samsung": {
            "committed": "a",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "a",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "a",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 11328.0,
          "intended": "clean",
          "samsung": {
            "committed": "clean",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "clean",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "clean",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 12476.0,
          "intended": "fall.",
          "samsung": {
            "committed": "fall.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "fall.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "fall.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "I stopped at the nurn and folled the bottle from a clean fall.",
        "ours": {
          "control": "I stopped at the nurn and filled the bottle from a clean fall.",
          "treatment-ceiling10k": "I stopped at the nurn and filled the bottle from a clean fall."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-06",
      "kind": "tap",
      "frame": "ours",
      "intended": "Moss covered the stones in a thick and even green",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 316.13,
          "y": 186.38
        },
        {
          "kind": "tap",
          "t": 159.0,
          "x": 328.92,
          "y": 66.27
        },
        {
          "kind": "tap",
          "t": 334.0,
          "x": 87.76,
          "y": 122.11
        },
        {
          "kind": "tap",
          "t": 501.0,
          "x": 84.83,
          "y": 123.86
        },
        {
          "kind": "tap",
          "t": 737.0,
          "x": 214.41,
          "y": 235.41
        },
        {
          "kind": "tap",
          "t": 957.0,
          "x": 166.11,
          "y": 175.41
        },
        {
          "kind": "tap",
          "t": 1132.0,
          "x": 340.55,
          "y": 65.35
        },
        {
          "kind": "tap",
          "t": 1343.0,
          "x": 204.6,
          "y": 179.93
        },
        {
          "kind": "tap",
          "t": 1566.0,
          "x": 100.86,
          "y": 64.18
        },
        {
          "kind": "tap",
          "t": 1810.0,
          "x": 146.32,
          "y": 79.88
        },
        {
          "kind": "tap",
          "t": 2048.0,
          "x": 109.43,
          "y": 67.0
        },
        {
          "kind": "tap",
          "t": 2289.0,
          "x": 125.53,
          "y": 125.73
        },
        {
          "kind": "tap",
          "t": 2534.0,
          "x": 204.91,
          "y": 235.55
        },
        {
          "kind": "tap",
          "t": 2687.0,
          "x": 169.6,
          "y": 71.27
        },
        {
          "kind": "tap",
          "t": 2885.0,
          "x": 244.87,
          "y": 129.35
        },
        {
          "kind": "tap",
          "t": 3078.0,
          "x": 109.09,
          "y": 71.36
        },
        {
          "kind": "tap",
          "t": 3238.0,
          "x": 197.2,
          "y": 235.05
        },
        {
          "kind": "tap",
          "t": 3462.0,
          "x": 90.91,
          "y": 123.32
        },
        {
          "kind": "tap",
          "t": 3619.0,
          "x": 177.2,
          "y": 67.5
        },
        {
          "kind": "tap",
          "t": 3818.0,
          "x": 344.24,
          "y": 74.67
        },
        {
          "kind": "tap",
          "t": 3990.0,
          "x": 277.42,
          "y": 187.6
        },
        {
          "kind": "tap",
          "t": 4202.0,
          "x": 103.65,
          "y": 65.69
        },
        {
          "kind": "tap",
          "t": 4358.0,
          "x": 72.0,
          "y": 123.44
        },
        {
          "kind": "tap",
          "t": 4583.0,
          "x": 202.43,
          "y": 233.75
        },
        {
          "kind": "tap",
          "t": 4770.0,
          "x": 305.89,
          "y": 73.11
        },
        {
          "kind": "tap",
          "t": 4942.0,
          "x": 273.88,
          "y": 188.73
        },
        {
          "kind": "tap",
          "t": 5183.0,
          "x": 190.17,
          "y": 228.0
        },
        {
          "kind": "tap",
          "t": 5415.0,
          "x": 54.31,
          "y": 121.19
        },
        {
          "kind": "tap",
          "t": 5615.0,
          "x": 214.05,
          "y": 231.28
        },
        {
          "kind": "tap",
          "t": 5825.0,
          "x": 183.41,
          "y": 74.24
        },
        {
          "kind": "tap",
          "t": 6030.0,
          "x": 236.74,
          "y": 124.07
        },
        {
          "kind": "tap",
          "t": 6237.0,
          "x": 299.6,
          "y": 82.18
        },
        {
          "kind": "tap",
          "t": 6433.0,
          "x": 164.08,
          "y": 175.32
        },
        {
          "kind": "tap",
          "t": 6663.0,
          "x": 311.46,
          "y": 122.79
        },
        {
          "kind": "tap",
          "t": 6835.0,
          "x": 200.47,
          "y": 236.83
        },
        {
          "kind": "tap",
          "t": 7082.0,
          "x": 40.73,
          "y": 120.55
        },
        {
          "kind": "tap",
          "t": 7295.0,
          "x": 282.2,
          "y": 184.81
        },
        {
          "kind": "tap",
          "t": 7521.0,
          "x": 124.44,
          "y": 122.37
        },
        {
          "kind": "tap",
          "t": 7705.0,
          "x": 203.63,
          "y": 237.02
        },
        {
          "kind": "tap",
          "t": 7948.0,
          "x": 106.37,
          "y": 78.37
        },
        {
          "kind": "tap",
          "t": 8147.0,
          "x": 191.53,
          "y": 182.06
        },
        {
          "kind": "tap",
          "t": 8322.0,
          "x": 105.52,
          "y": 77.18
        },
        {
          "kind": "tap",
          "t": 8523.0,
          "x": 266.97,
          "y": 179.76
        },
        {
          "kind": "tap",
          "t": 8692.0,
          "x": 191.36,
          "y": 234.87
        },
        {
          "kind": "tap",
          "t": 8933.0,
          "x": 206.15,
          "y": 131.43
        },
        {
          "kind": "tap",
          "t": 9105.0,
          "x": 143.43,
          "y": 66.73
        },
        {
          "kind": "tap",
          "t": 9343.0,
          "x": 104.48,
          "y": 68.16
        },
        {
          "kind": "tap",
          "t": 9583.0,
          "x": 103.68,
          "y": 71.06
        },
        {
          "kind": "tap",
          "t": 9733.0,
          "x": 279.22,
          "y": 175.42
        },
        {
          "kind": "tap",
          "t": 9898.0,
          "x": 202.5,
          "y": 239.33
        },
        {
          "kind": "tap",
          "t": 10085.0,
          "x": 210.81,
          "y": 234.15
        }
      ],
      "moments": [
        {
          "t": 737.0,
          "intended": "Moss",
          "samsung": {
            "committed": "Moss",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "Moss",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "Moss",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2534.0,
          "intended": "covered",
          "samsung": {
            "committed": "covered",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "covered",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "covered",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3238.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4583.0,
          "intended": "stones",
          "samsung": {
            "committed": "stones",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "stones",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "stones",
              "bar": null,
              "decision": "silent"
            }
          },
          "apple": null
        },
        {
          "t": 5183.0,
          "intended": "in",
          "samsung": {
            "committed": "in",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "in",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "in",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5615.0,
          "intended": "a",
          "samsung": {
            "committed": "a",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "a",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "a",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 6835.0,
          "intended": "thick",
          "samsung": {
            "committed": "thick",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "thick",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "thick",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7705.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8692.0,
          "intended": "even",
          "samsung": {
            "committed": "even",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "even",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "even",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9898.0,
          "intended": "green.",
          "samsung": {
            "committed": "green.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "green.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "green.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "Moss covered the stones in a thick and even green.",
        "ours": {
          "control": "Moss covered the stones in a thick and even green.",
          "treatment-ceiling10k": "Moss covered the stones in a thick and even green."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-07",
      "kind": "tap",
      "frame": "ours",
      "intended": "The map said two hours and the ground said rather more",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 177.37,
          "y": 62.89
        },
        {
          "kind": "tap",
          "t": 220.0,
          "x": 231.31,
          "y": 127.62
        },
        {
          "kind": "tap",
          "t": 421.0,
          "x": 103.52,
          "y": 64.68
        },
        {
          "kind": "tap",
          "t": 640.0,
          "x": 204.49,
          "y": 219.54
        },
        {
          "kind": "tap",
          "t": 854.0,
          "x": 323.84,
          "y": 181.45
        },
        {
          "kind": "tap",
          "t": 1094.0,
          "x": 45.57,
          "y": 115.08
        },
        {
          "kind": "tap",
          "t": 1281.0,
          "x": 370.56,
          "y": 67.44
        },
        {
          "kind": "tap",
          "t": 1454.0,
          "x": 198.72,
          "y": 225.59
        },
        {
          "kind": "tap",
          "t": 1632.0,
          "x": 81.43,
          "y": 126.56
        },
        {
          "kind": "tap",
          "t": 1822.0,
          "x": 43.37,
          "y": 136.28
        },
        {
          "kind": "tap",
          "t": 2070.0,
          "x": 292.89,
          "y": 68.81
        },
        {
          "kind": "tap",
          "t": 2311.0,
          "x": 296.55,
          "y": 63.68
        },
        {
          "kind": "tap",
          "t": 2545.0,
          "x": 119.87,
          "y": 119.21
        },
        {
          "kind": "tap",
          "t": 2754.0,
          "x": 199.56,
          "y": 227.74
        },
        {
          "kind": "tap",
          "t": 2961.0,
          "x": 183.37,
          "y": 68.93
        },
        {
          "kind": "tap",
          "t": 3112.0,
          "x": 70.43,
          "y": 68.58
        },
        {
          "kind": "tap",
          "t": 3351.0,
          "x": 330.64,
          "y": 74.2
        },
        {
          "kind": "tap",
          "t": 3564.0,
          "x": 202.97,
          "y": 238.84
        },
        {
          "kind": "tap",
          "t": 3812.0,
          "x": 234.96,
          "y": 133.93
        },
        {
          "kind": "tap",
          "t": 4030.0,
          "x": 338.76,
          "y": 64.4
        },
        {
          "kind": "tap",
          "t": 4194.0,
          "x": 255.02,
          "y": 70.13
        },
        {
          "kind": "tap",
          "t": 4366.0,
          "x": 135.8,
          "y": 67.73
        },
        {
          "kind": "tap",
          "t": 4542.0,
          "x": 82.28,
          "y": 113.24
        },
        {
          "kind": "tap",
          "t": 4778.0,
          "x": 206.86,
          "y": 230.48
        },
        {
          "kind": "tap",
          "t": 5002.0,
          "x": 39.51,
          "y": 130.22
        },
        {
          "kind": "tap",
          "t": 5219.0,
          "x": 286.31,
          "y": 182.3
        },
        {
          "kind": "tap",
          "t": 5404.0,
          "x": 132.27,
          "y": 122.01
        },
        {
          "kind": "tap",
          "t": 5582.0,
          "x": 212.43,
          "y": 228.51
        },
        {
          "kind": "tap",
          "t": 5758.0,
          "x": 179.05,
          "y": 66.85
        },
        {
          "kind": "tap",
          "t": 5991.0,
          "x": 240.87,
          "y": 120.21
        },
        {
          "kind": "tap",
          "t": 6240.0,
          "x": 102.7,
          "y": 74.62
        },
        {
          "kind": "tap",
          "t": 6425.0,
          "x": 198.99,
          "y": 226.07
        },
        {
          "kind": "tap",
          "t": 6637.0,
          "x": 200.36,
          "y": 122.29
        },
        {
          "kind": "tap",
          "t": 6794.0,
          "x": 130.08,
          "y": 71.37
        },
        {
          "kind": "tap",
          "t": 7020.0,
          "x": 332.32,
          "y": 81.98
        },
        {
          "kind": "tap",
          "t": 7265.0,
          "x": 249.48,
          "y": 73.34
        },
        {
          "kind": "tap",
          "t": 7491.0,
          "x": 281.11,
          "y": 179.36
        },
        {
          "kind": "tap",
          "t": 7715.0,
          "x": 119.05,
          "y": 118.81
        },
        {
          "kind": "tap",
          "t": 7957.0,
          "x": 208.12,
          "y": 234.94
        },
        {
          "kind": "tap",
          "t": 8121.0,
          "x": 99.92,
          "y": 134.43
        },
        {
          "kind": "tap",
          "t": 8303.0,
          "x": 53.3,
          "y": 119.32
        },
        {
          "kind": "tap",
          "t": 8477.0,
          "x": 296.62,
          "y": 74.0
        },
        {
          "kind": "tap",
          "t": 8664.0,
          "x": 121.5,
          "y": 124.65
        },
        {
          "kind": "tap",
          "t": 8883.0,
          "x": 195.39,
          "y": 244.22
        },
        {
          "kind": "tap",
          "t": 9096.0,
          "x": 142.03,
          "y": 71.62
        },
        {
          "kind": "tap",
          "t": 9316.0,
          "x": 47.93,
          "y": 119.96
        },
        {
          "kind": "tap",
          "t": 9487.0,
          "x": 178.66,
          "y": 72.22
        },
        {
          "kind": "tap",
          "t": 9704.0,
          "x": 232.17,
          "y": 126.63
        },
        {
          "kind": "tap",
          "t": 9895.0,
          "x": 105.77,
          "y": 58.93
        },
        {
          "kind": "tap",
          "t": 10052.0,
          "x": 148.47,
          "y": 65.41
        },
        {
          "kind": "tap",
          "t": 10267.0,
          "x": 204.25,
          "y": 233.06
        },
        {
          "kind": "tap",
          "t": 10454.0,
          "x": 320.54,
          "y": 177.87
        },
        {
          "kind": "tap",
          "t": 10641.0,
          "x": 339.98,
          "y": 72.72
        },
        {
          "kind": "tap",
          "t": 10809.0,
          "x": 144.2,
          "y": 76.54
        },
        {
          "kind": "tap",
          "t": 10983.0,
          "x": 106.55,
          "y": 76.5
        },
        {
          "kind": "tap",
          "t": 11220.0,
          "x": 194.17,
          "y": 231.78
        },
        {
          "kind": "tap",
          "t": 11455.0,
          "x": 203.46,
          "y": 232.55
        }
      ],
      "moments": [
        {
          "t": 640.0,
          "intended": "The",
          "samsung": {
            "committed": "The",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1454.0,
          "intended": "map",
          "samsung": {
            "committed": "map",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "map",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "map",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2754.0,
          "intended": "said",
          "samsung": {
            "committed": "saiid",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "saiid",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "said",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 3564.0,
          "intended": "two",
          "samsung": {
            "committed": "two",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "two",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "two",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4778.0,
          "intended": "hours",
          "samsung": {
            "committed": "hours",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "hours",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "hours",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5582.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6425.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7957.0,
          "intended": "ground",
          "samsung": {
            "committed": "ground",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "ground",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "ground",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8883.0,
          "intended": "said",
          "samsung": {
            "committed": "daid",
            "bar": null,
            "note": "iOS run 1 (2026-08-21) committed 'daid' here off a 0.076pt hit-boundary tie on the s/d midline; this mirror computes 'said' for the identical aim error. Pinned knife-edge deviation — see tap_mirror.py's LANE VERDICT 2026-08-23 comment for the full diagnosis."
          },
          "ours": {
            "control": {
              "committed": "said",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "said",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10267.0,
          "intended": "rather",
          "samsung": {
            "committed": "rather",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "rather",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "rather",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 11220.0,
          "intended": "more.",
          "samsung": {
            "committed": "more.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "more.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "more.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "The map saiid two hours and the ground daid rather more.",
        "ours": {
          "control": "The map saiid two hours and the ground said rather more.",
          "treatment-ceiling10k": "The map said two hours and the ground said rather more."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-08",
      "kind": "tap",
      "frame": "ours",
      "intended": "Cloud dropped to the col and took the summit with it",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 162.17,
          "y": 178.8
        },
        {
          "kind": "tap",
          "t": 218.0,
          "x": 354.08,
          "y": 126.42
        },
        {
          "kind": "tap",
          "t": 465.0,
          "x": 331.88,
          "y": 69.09
        },
        {
          "kind": "tap",
          "t": 692.0,
          "x": 262.36,
          "y": 73.28
        },
        {
          "kind": "tap",
          "t": 847.0,
          "x": 132.46,
          "y": 119.92
        },
        {
          "kind": "tap",
          "t": 1016.0,
          "x": 202.62,
          "y": 230.86
        },
        {
          "kind": "tap",
          "t": 1225.0,
          "x": 115.11,
          "y": 119.28
        },
        {
          "kind": "tap",
          "t": 1442.0,
          "x": 142.18,
          "y": 72.86
        },
        {
          "kind": "tap",
          "t": 1613.0,
          "x": 342.2,
          "y": 70.99
        },
        {
          "kind": "tap",
          "t": 1782.0,
          "x": 385.39,
          "y": 72.39
        },
        {
          "kind": "tap",
          "t": 1953.0,
          "x": 370.98,
          "y": 81.46
        },
        {
          "kind": "tap",
          "t": 2144.0,
          "x": 100.64,
          "y": 80.77
        },
        {
          "kind": "tap",
          "t": 2374.0,
          "x": 127.39,
          "y": 128.52
        },
        {
          "kind": "tap",
          "t": 2600.0,
          "x": 198.85,
          "y": 224.47
        },
        {
          "kind": "tap",
          "t": 2756.0,
          "x": 175.76,
          "y": 59.9
        },
        {
          "kind": "tap",
          "t": 3002.0,
          "x": 327.27,
          "y": 73.98
        },
        {
          "kind": "tap",
          "t": 3184.0,
          "x": 188.94,
          "y": 236.69
        },
        {
          "kind": "tap",
          "t": 3420.0,
          "x": 175.3,
          "y": 64.58
        },
        {
          "kind": "tap",
          "t": 3645.0,
          "x": 232.07,
          "y": 120.07
        },
        {
          "kind": "tap",
          "t": 3881.0,
          "x": 107.13,
          "y": 71.97
        },
        {
          "kind": "tap",
          "t": 4047.0,
          "x": 193.46,
          "y": 229.55
        },
        {
          "kind": "tap",
          "t": 4213.0,
          "x": 162.48,
          "y": 175.23
        },
        {
          "kind": "tap",
          "t": 4430.0,
          "x": 334.42,
          "y": 69.39
        },
        {
          "kind": "tap",
          "t": 4596.0,
          "x": 355.02,
          "y": 124.55
        },
        {
          "kind": "tap",
          "t": 4793.0,
          "x": 190.07,
          "y": 243.97
        },
        {
          "kind": "tap",
          "t": 5001.0,
          "x": 45.34,
          "y": 131.92
        },
        {
          "kind": "tap",
          "t": 5164.0,
          "x": 287.78,
          "y": 171.29
        },
        {
          "kind": "tap",
          "t": 5376.0,
          "x": 125.23,
          "y": 125.53
        },
        {
          "kind": "tap",
          "t": 5557.0,
          "x": 190.51,
          "y": 233.77
        },
        {
          "kind": "tap",
          "t": 5802.0,
          "x": 335.81,
          "y": 67.22
        },
        {
          "kind": "tap",
          "t": 6028.0,
          "x": 180.51,
          "y": 58.09
        },
        {
          "kind": "tap",
          "t": 6241.0,
          "x": 332.43,
          "y": 61.14
        },
        {
          "kind": "tap",
          "t": 6421.0,
          "x": 315.42,
          "y": 122.13
        },
        {
          "kind": "tap",
          "t": 6597.0,
          "x": 200.28,
          "y": 219.28
        },
        {
          "kind": "tap",
          "t": 6774.0,
          "x": 184.09,
          "y": 69.79
        },
        {
          "kind": "tap",
          "t": 6928.0,
          "x": 240.96,
          "y": 121.78
        },
        {
          "kind": "tap",
          "t": 7151.0,
          "x": 104.9,
          "y": 66.26
        },
        {
          "kind": "tap",
          "t": 7343.0,
          "x": 194.91,
          "y": 230.68
        },
        {
          "kind": "tap",
          "t": 7517.0,
          "x": 90.44,
          "y": 124.42
        },
        {
          "kind": "tap",
          "t": 7762.0,
          "x": 269.37,
          "y": 58.27
        },
        {
          "kind": "tap",
          "t": 7989.0,
          "x": 326.28,
          "y": 181.31
        },
        {
          "kind": "tap",
          "t": 8196.0,
          "x": 312.96,
          "y": 177.12
        },
        {
          "kind": "tap",
          "t": 8375.0,
          "x": 297.15,
          "y": 72.76
        },
        {
          "kind": "tap",
          "t": 8527.0,
          "x": 170.55,
          "y": 73.26
        },
        {
          "kind": "tap",
          "t": 8753.0,
          "x": 198.66,
          "y": 228.14
        },
        {
          "kind": "tap",
          "t": 8984.0,
          "x": 62.85,
          "y": 74.01
        },
        {
          "kind": "tap",
          "t": 9175.0,
          "x": 289.04,
          "y": 64.65
        },
        {
          "kind": "tap",
          "t": 9380.0,
          "x": 176.53,
          "y": 66.84
        },
        {
          "kind": "tap",
          "t": 9530.0,
          "x": 242.34,
          "y": 119.62
        },
        {
          "kind": "tap",
          "t": 9695.0,
          "x": 209.03,
          "y": 237.84
        },
        {
          "kind": "tap",
          "t": 9890.0,
          "x": 296.38,
          "y": 64.04
        },
        {
          "kind": "tap",
          "t": 10139.0,
          "x": 179.91,
          "y": 75.33
        },
        {
          "kind": "tap",
          "t": 10379.0,
          "x": 203.06,
          "y": 234.16
        },
        {
          "kind": "tap",
          "t": 10531.0,
          "x": 188.83,
          "y": 237.85
        }
      ],
      "moments": [
        {
          "t": 1016.0,
          "intended": "Cloud",
          "samsung": {
            "committed": "Cloud",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "Cloud",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "Cloud",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2600.0,
          "intended": "dropped",
          "samsung": {
            "committed": "dropped",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "dropped",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "dropped",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3184.0,
          "intended": "to",
          "samsung": {
            "committed": "to",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "to",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "to",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4047.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4793.0,
          "intended": "col",
          "samsung": {
            "committed": "col",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "col",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "col",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5557.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6597.0,
          "intended": "took",
          "samsung": {
            "committed": "otok",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "took",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "took",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 7343.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8753.0,
          "intended": "summit",
          "samsung": {
            "committed": "summit",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "summit",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "summit",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9695.0,
          "intended": "with",
          "samsung": {
            "committed": "with",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "with",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "with",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10379.0,
          "intended": "it.",
          "samsung": {
            "committed": "it.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "it.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "it.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "Cloud dropped to the col and otok the summit with it.",
        "ours": {
          "control": "Cloud dropped to the col and took the summit with it.",
          "treatment-ceiling10k": "Cloud dropped to the col and took the summit with it."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-09",
      "kind": "tap",
      "frame": "ours",
      "intended": "I could hear water under the peat but never see it",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 306.83,
          "y": 73.92
        },
        {
          "kind": "tap",
          "t": 247.0,
          "x": 203.03,
          "y": 232.97
        },
        {
          "kind": "tap",
          "t": 480.0,
          "x": 167.22,
          "y": 180.41
        },
        {
          "kind": "tap",
          "t": 688.0,
          "x": 336.86,
          "y": 61.4
        },
        {
          "kind": "tap",
          "t": 890.0,
          "x": 249.29,
          "y": 75.82
        },
        {
          "kind": "tap",
          "t": 1121.0,
          "x": 368.24,
          "y": 128.91
        },
        {
          "kind": "tap",
          "t": 1364.0,
          "x": 123.15,
          "y": 130.35
        },
        {
          "kind": "tap",
          "t": 1522.0,
          "x": 206.42,
          "y": 234.73
        },
        {
          "kind": "tap",
          "t": 1679.0,
          "x": 240.13,
          "y": 123.8
        },
        {
          "kind": "tap",
          "t": 1857.0,
          "x": 102.34,
          "y": 76.7
        },
        {
          "kind": "tap",
          "t": 2095.0,
          "x": 39.86,
          "y": 122.17
        },
        {
          "kind": "tap",
          "t": 2316.0,
          "x": 146.82,
          "y": 58.4
        },
        {
          "kind": "tap",
          "t": 2513.0,
          "x": 199.3,
          "y": 229.33
        },
        {
          "kind": "tap",
          "t": 2699.0,
          "x": 78.79,
          "y": 77.19
        },
        {
          "kind": "tap",
          "t": 2904.0,
          "x": 47.59,
          "y": 119.93
        },
        {
          "kind": "tap",
          "t": 3079.0,
          "x": 175.61,
          "y": 73.46
        },
        {
          "kind": "tap",
          "t": 3277.0,
          "x": 97.56,
          "y": 64.94
        },
        {
          "kind": "tap",
          "t": 3505.0,
          "x": 141.35,
          "y": 68.4
        },
        {
          "kind": "tap",
          "t": 3711.0,
          "x": 201.57,
          "y": 231.96
        },
        {
          "kind": "tap",
          "t": 3914.0,
          "x": 250.86,
          "y": 77.5
        },
        {
          "kind": "tap",
          "t": 4155.0,
          "x": 270.11,
          "y": 178.72
        },
        {
          "kind": "tap",
          "t": 4308.0,
          "x": 115.43,
          "y": 123.14
        },
        {
          "kind": "tap",
          "t": 4524.0,
          "x": 97.32,
          "y": 72.14
        },
        {
          "kind": "tap",
          "t": 4691.0,
          "x": 135.39,
          "y": 82.31
        },
        {
          "kind": "tap",
          "t": 4858.0,
          "x": 196.71,
          "y": 222.57
        },
        {
          "kind": "tap",
          "t": 5022.0,
          "x": 174.18,
          "y": 72.62
        },
        {
          "kind": "tap",
          "t": 5256.0,
          "x": 245.88,
          "y": 122.48
        },
        {
          "kind": "tap",
          "t": 5449.0,
          "x": 101.25,
          "y": 63.9
        },
        {
          "kind": "tap",
          "t": 5657.0,
          "x": 189.21,
          "y": 238.23
        },
        {
          "kind": "tap",
          "t": 5869.0,
          "x": 370.28,
          "y": 69.25
        },
        {
          "kind": "tap",
          "t": 6044.0,
          "x": 99.0,
          "y": 70.24
        },
        {
          "kind": "tap",
          "t": 6194.0,
          "x": 44.7,
          "y": 125.36
        },
        {
          "kind": "tap",
          "t": 6425.0,
          "x": 175.0,
          "y": 72.56
        },
        {
          "kind": "tap",
          "t": 6644.0,
          "x": 205.59,
          "y": 251.42
        },
        {
          "kind": "tap",
          "t": 6856.0,
          "x": 232.89,
          "y": 179.73
        },
        {
          "kind": "tap",
          "t": 7084.0,
          "x": 256.79,
          "y": 76.25
        },
        {
          "kind": "tap",
          "t": 7249.0,
          "x": 190.67,
          "y": 68.53
        },
        {
          "kind": "tap",
          "t": 7430.0,
          "x": 192.01,
          "y": 225.42
        },
        {
          "kind": "tap",
          "t": 7679.0,
          "x": 272.29,
          "y": 172.4
        },
        {
          "kind": "tap",
          "t": 7914.0,
          "x": 110.3,
          "y": 82.72
        },
        {
          "kind": "tap",
          "t": 8106.0,
          "x": 208.58,
          "y": 181.08
        },
        {
          "kind": "tap",
          "t": 8310.0,
          "x": 102.27,
          "y": 83.43
        },
        {
          "kind": "tap",
          "t": 8464.0,
          "x": 144.91,
          "y": 59.85
        },
        {
          "kind": "tap",
          "t": 8622.0,
          "x": 198.47,
          "y": 224.49
        },
        {
          "kind": "tap",
          "t": 8833.0,
          "x": 88.84,
          "y": 131.2
        },
        {
          "kind": "tap",
          "t": 9017.0,
          "x": 92.71,
          "y": 73.58
        },
        {
          "kind": "tap",
          "t": 9215.0,
          "x": 106.59,
          "y": 73.62
        },
        {
          "kind": "tap",
          "t": 9432.0,
          "x": 203.08,
          "y": 232.37
        },
        {
          "kind": "tap",
          "t": 9671.0,
          "x": 299.74,
          "y": 64.29
        },
        {
          "kind": "tap",
          "t": 9867.0,
          "x": 179.26,
          "y": 70.91
        },
        {
          "kind": "tap",
          "t": 10033.0,
          "x": 201.53,
          "y": 232.6
        },
        {
          "kind": "tap",
          "t": 10228.0,
          "x": 210.54,
          "y": 231.29
        }
      ],
      "moments": [
        {
          "t": 247.0,
          "intended": "I",
          "samsung": {
            "committed": "I",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "I",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "I",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 1522.0,
          "intended": "could",
          "samsung": {
            "committed": "could",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "could",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "could",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2513.0,
          "intended": "hear",
          "samsung": {
            "committed": "hear",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "hear",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "hear",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3711.0,
          "intended": "water",
          "samsung": {
            "committed": "water",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "water",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "water",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4858.0,
          "intended": "under",
          "samsung": {
            "committed": "under",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "under",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "under",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5657.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6644.0,
          "intended": "peat",
          "samsung": {
            "committed": "peat",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "peat",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "peat",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7430.0,
          "intended": "but",
          "samsung": {
            "committed": "but",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "but",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "but",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8622.0,
          "intended": "never",
          "samsung": {
            "committed": "never",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "never",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "never",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9432.0,
          "intended": "see",
          "samsung": {
            "committed": "see",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "see",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "see",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10033.0,
          "intended": "it.",
          "samsung": {
            "committed": "it.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "it.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "it.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "I could hear water under the peat but never see it.",
        "ours": {
          "control": "I could hear water under the peat but never see it.",
          "treatment-ceiling10k": "I could hear water under the peat but never see it."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-10",
      "kind": "tap",
      "frame": "ours",
      "intended": "A stone shelter stands in the hollow beyond the second rise",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 44.92,
          "y": 122.94
        },
        {
          "kind": "tap",
          "t": 230.0,
          "x": 197.23,
          "y": 237.41
        },
        {
          "kind": "tap",
          "t": 419.0,
          "x": 78.73,
          "y": 128.75
        },
        {
          "kind": "tap",
          "t": 629.0,
          "x": 168.21,
          "y": 71.02
        },
        {
          "kind": "tap",
          "t": 836.0,
          "x": 283.29,
          "y": 175.87
        },
        {
          "kind": "tap",
          "t": 1085.0,
          "x": 341.9,
          "y": 73.05
        },
        {
          "kind": "tap",
          "t": 1295.0,
          "x": 96.6,
          "y": 73.7
        },
        {
          "kind": "tap",
          "t": 1454.0,
          "x": 200.73,
          "y": 242.87
        },
        {
          "kind": "tap",
          "t": 1638.0,
          "x": 85.92,
          "y": 137.81
        },
        {
          "kind": "tap",
          "t": 1821.0,
          "x": 238.29,
          "y": 122.32
        },
        {
          "kind": "tap",
          "t": 1991.0,
          "x": 105.75,
          "y": 73.36
        },
        {
          "kind": "tap",
          "t": 2147.0,
          "x": 353.49,
          "y": 126.65
        },
        {
          "kind": "tap",
          "t": 2382.0,
          "x": 183.79,
          "y": 75.06
        },
        {
          "kind": "tap",
          "t": 2549.0,
          "x": 116.06,
          "y": 73.23
        },
        {
          "kind": "tap",
          "t": 2787.0,
          "x": 142.26,
          "y": 73.12
        },
        {
          "kind": "tap",
          "t": 2996.0,
          "x": 203.61,
          "y": 236.04
        },
        {
          "kind": "tap",
          "t": 3234.0,
          "x": 88.58,
          "y": 119.72
        },
        {
          "kind": "tap",
          "t": 3433.0,
          "x": 180.98,
          "y": 67.83
        },
        {
          "kind": "tap",
          "t": 3655.0,
          "x": 46.94,
          "y": 129.12
        },
        {
          "kind": "tap",
          "t": 3823.0,
          "x": 275.93,
          "y": 171.63
        },
        {
          "kind": "tap",
          "t": 4047.0,
          "x": 126.73,
          "y": 119.98
        },
        {
          "kind": "tap",
          "t": 4251.0,
          "x": 83.88,
          "y": 118.12
        },
        {
          "kind": "tap",
          "t": 4486.0,
          "x": 194.31,
          "y": 239.24
        },
        {
          "kind": "tap",
          "t": 4644.0,
          "x": 314.49,
          "y": 76.68
        },
        {
          "kind": "tap",
          "t": 4873.0,
          "x": 285.74,
          "y": 188.09
        },
        {
          "kind": "tap",
          "t": 5116.0,
          "x": 196.8,
          "y": 239.45
        },
        {
          "kind": "tap",
          "t": 5274.0,
          "x": 184.08,
          "y": 67.34
        },
        {
          "kind": "tap",
          "t": 5499.0,
          "x": 243.54,
          "y": 117.28
        },
        {
          "kind": "tap",
          "t": 5660.0,
          "x": 98.54,
          "y": 80.18
        },
        {
          "kind": "tap",
          "t": 5881.0,
          "x": 214.45,
          "y": 225.23
        },
        {
          "kind": "tap",
          "t": 6090.0,
          "x": 244.64,
          "y": 125.98
        },
        {
          "kind": "tap",
          "t": 6335.0,
          "x": 342.38,
          "y": 56.86
        },
        {
          "kind": "tap",
          "t": 6542.0,
          "x": 342.71,
          "y": 121.44
        },
        {
          "kind": "tap",
          "t": 6738.0,
          "x": 363.62,
          "y": 124.47
        },
        {
          "kind": "tap",
          "t": 6921.0,
          "x": 332.92,
          "y": 71.51
        },
        {
          "kind": "tap",
          "t": 7140.0,
          "x": 65.56,
          "y": 84.97
        },
        {
          "kind": "tap",
          "t": 7366.0,
          "x": 199.49,
          "y": 236.3
        },
        {
          "kind": "tap",
          "t": 7598.0,
          "x": 245.97,
          "y": 173.71
        },
        {
          "kind": "tap",
          "t": 7833.0,
          "x": 97.86,
          "y": 79.33
        },
        {
          "kind": "tap",
          "t": 7983.0,
          "x": 223.33,
          "y": 59.99
        },
        {
          "kind": "tap",
          "t": 8209.0,
          "x": 341.31,
          "y": 77.45
        },
        {
          "kind": "tap",
          "t": 8415.0,
          "x": 276.12,
          "y": 177.91
        },
        {
          "kind": "tap",
          "t": 8641.0,
          "x": 124.15,
          "y": 124.65
        },
        {
          "kind": "tap",
          "t": 8843.0,
          "x": 207.24,
          "y": 233.06
        },
        {
          "kind": "tap",
          "t": 9026.0,
          "x": 176.49,
          "y": 68.61
        },
        {
          "kind": "tap",
          "t": 9265.0,
          "x": 246.32,
          "y": 133.44
        },
        {
          "kind": "tap",
          "t": 9447.0,
          "x": 105.88,
          "y": 68.94
        },
        {
          "kind": "tap",
          "t": 9696.0,
          "x": 195.57,
          "y": 234.87
        },
        {
          "kind": "tap",
          "t": 9858.0,
          "x": 73.23,
          "y": 137.29
        },
        {
          "kind": "tap",
          "t": 10048.0,
          "x": 107.76,
          "y": 67.36
        },
        {
          "kind": "tap",
          "t": 10253.0,
          "x": 161.9,
          "y": 191.74
        },
        {
          "kind": "tap",
          "t": 10441.0,
          "x": 328.04,
          "y": 77.15
        },
        {
          "kind": "tap",
          "t": 10653.0,
          "x": 272.63,
          "y": 173.79
        },
        {
          "kind": "tap",
          "t": 10844.0,
          "x": 120.23,
          "y": 127.97
        },
        {
          "kind": "tap",
          "t": 11001.0,
          "x": 209.49,
          "y": 235.43
        },
        {
          "kind": "tap",
          "t": 11175.0,
          "x": 144.01,
          "y": 68.73
        },
        {
          "kind": "tap",
          "t": 11403.0,
          "x": 298.45,
          "y": 71.21
        },
        {
          "kind": "tap",
          "t": 11589.0,
          "x": 82.14,
          "y": 137.66
        },
        {
          "kind": "tap",
          "t": 11829.0,
          "x": 110.16,
          "y": 67.51
        },
        {
          "kind": "tap",
          "t": 12002.0,
          "x": 197.03,
          "y": 225.46
        },
        {
          "kind": "tap",
          "t": 12243.0,
          "x": 208.35,
          "y": 247.3
        }
      ],
      "moments": [
        {
          "t": 230.0,
          "intended": "A",
          "samsung": {
            "committed": "A",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "A",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "A",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 1454.0,
          "intended": "stone",
          "samsung": {
            "committed": "stnoe",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "stnoe",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "stone",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 2996.0,
          "intended": "shelter",
          "samsung": {
            "committed": "shelter",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "shelter",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "shelter",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4486.0,
          "intended": "stands",
          "samsung": {
            "committed": "stands",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "stands",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "stands",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5116.0,
          "intended": "in",
          "samsung": {
            "committed": "on",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "on",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "on",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5881.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7366.0,
          "intended": "hollow",
          "samsung": {
            "committed": "hollow",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "hollow",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "hollow",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8843.0,
          "intended": "beyond",
          "samsung": {
            "committed": "beyond",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "beyond",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "beyond",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9696.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 11001.0,
          "intended": "second",
          "samsung": {
            "committed": "second",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "second",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "second",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 12002.0,
          "intended": "rise.",
          "samsung": {
            "committed": "rise.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "rise.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "rise.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "A stnoe shelter stands on the hollow beyond the second rise.",
        "ours": {
          "control": "A stnoe shelter stands on the hollow beyond the second rise.",
          "treatment-ceiling10k": "A stone shelter stands on the hollow beyond the second rise."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-11",
      "kind": "tap",
      "frame": "ours",
      "intended": "The door faces away from the weather which is the whole point",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 172.05,
          "y": 75.8
        },
        {
          "kind": "tap",
          "t": 219.0,
          "x": 237.32,
          "y": 124.63
        },
        {
          "kind": "tap",
          "t": 385.0,
          "x": 100.85,
          "y": 76.25
        },
        {
          "kind": "tap",
          "t": 558.0,
          "x": 199.24,
          "y": 226.66
        },
        {
          "kind": "tap",
          "t": 795.0,
          "x": 124.52,
          "y": 128.41
        },
        {
          "kind": "tap",
          "t": 949.0,
          "x": 341.93,
          "y": 67.6
        },
        {
          "kind": "tap",
          "t": 1167.0,
          "x": 333.07,
          "y": 67.93
        },
        {
          "kind": "tap",
          "t": 1369.0,
          "x": 141.54,
          "y": 73.74
        },
        {
          "kind": "tap",
          "t": 1551.0,
          "x": 204.53,
          "y": 233.48
        },
        {
          "kind": "tap",
          "t": 1795.0,
          "x": 163.24,
          "y": 127.05
        },
        {
          "kind": "tap",
          "t": 2024.0,
          "x": 44.64,
          "y": 121.94
        },
        {
          "kind": "tap",
          "t": 2262.0,
          "x": 165.78,
          "y": 178.95
        },
        {
          "kind": "tap",
          "t": 2487.0,
          "x": 105.58,
          "y": 73.13
        },
        {
          "kind": "tap",
          "t": 2649.0,
          "x": 86.11,
          "y": 122.11
        },
        {
          "kind": "tap",
          "t": 2807.0,
          "x": 192.82,
          "y": 230.01
        },
        {
          "kind": "tap",
          "t": 3029.0,
          "x": 49.34,
          "y": 125.43
        },
        {
          "kind": "tap",
          "t": 3273.0,
          "x": 64.75,
          "y": 61.81
        },
        {
          "kind": "tap",
          "t": 3511.0,
          "x": 54.65,
          "y": 127.12
        },
        {
          "kind": "tap",
          "t": 3714.0,
          "x": 216.4,
          "y": 80.44
        },
        {
          "kind": "tap",
          "t": 3888.0,
          "x": 191.74,
          "y": 227.13
        },
        {
          "kind": "tap",
          "t": 4108.0,
          "x": 162.05,
          "y": 117.99
        },
        {
          "kind": "tap",
          "t": 4316.0,
          "x": 141.61,
          "y": 78.34
        },
        {
          "kind": "tap",
          "t": 4481.0,
          "x": 339.2,
          "y": 59.65
        },
        {
          "kind": "tap",
          "t": 4665.0,
          "x": 313.88,
          "y": 177.73
        },
        {
          "kind": "tap",
          "t": 4823.0,
          "x": 192.5,
          "y": 234.73
        },
        {
          "kind": "tap",
          "t": 5071.0,
          "x": 177.02,
          "y": 64.62
        },
        {
          "kind": "tap",
          "t": 5315.0,
          "x": 235.16,
          "y": 109.2
        },
        {
          "kind": "tap",
          "t": 5550.0,
          "x": 97.05,
          "y": 59.47
        },
        {
          "kind": "tap",
          "t": 5792.0,
          "x": 212.17,
          "y": 230.44
        },
        {
          "kind": "tap",
          "t": 5956.0,
          "x": 55.55,
          "y": 76.42
        },
        {
          "kind": "tap",
          "t": 6124.0,
          "x": 96.07,
          "y": 62.4
        },
        {
          "kind": "tap",
          "t": 6338.0,
          "x": 42.16,
          "y": 127.27
        },
        {
          "kind": "tap",
          "t": 6566.0,
          "x": 187.01,
          "y": 67.38
        },
        {
          "kind": "tap",
          "t": 6795.0,
          "x": 243.48,
          "y": 122.12
        },
        {
          "kind": "tap",
          "t": 6991.0,
          "x": 103.88,
          "y": 64.98
        },
        {
          "kind": "tap",
          "t": 7157.0,
          "x": 145.98,
          "y": 83.71
        },
        {
          "kind": "tap",
          "t": 7356.0,
          "x": 194.0,
          "y": 223.62
        },
        {
          "kind": "tap",
          "t": 7535.0,
          "x": 63.37,
          "y": 72.88
        },
        {
          "kind": "tap",
          "t": 7752.0,
          "x": 240.57,
          "y": 127.24
        },
        {
          "kind": "tap",
          "t": 7916.0,
          "x": 295.73,
          "y": 66.59
        },
        {
          "kind": "tap",
          "t": 8151.0,
          "x": 161.44,
          "y": 169.61
        },
        {
          "kind": "tap",
          "t": 8361.0,
          "x": 239.11,
          "y": 122.47
        },
        {
          "kind": "tap",
          "t": 8581.0,
          "x": 196.31,
          "y": 245.59
        },
        {
          "kind": "tap",
          "t": 8733.0,
          "x": 286.22,
          "y": 68.53
        },
        {
          "kind": "tap",
          "t": 8911.0,
          "x": 84.28,
          "y": 129.15
        },
        {
          "kind": "tap",
          "t": 9119.0,
          "x": 193.95,
          "y": 237.91
        },
        {
          "kind": "tap",
          "t": 9280.0,
          "x": 191.74,
          "y": 70.05
        },
        {
          "kind": "tap",
          "t": 9464.0,
          "x": 239.48,
          "y": 128.67
        },
        {
          "kind": "tap",
          "t": 9638.0,
          "x": 102.43,
          "y": 66.86
        },
        {
          "kind": "tap",
          "t": 9836.0,
          "x": 193.87,
          "y": 225.07
        },
        {
          "kind": "tap",
          "t": 10032.0,
          "x": 74.85,
          "y": 56.56
        },
        {
          "kind": "tap",
          "t": 10233.0,
          "x": 240.45,
          "y": 120.43
        },
        {
          "kind": "tap",
          "t": 10406.0,
          "x": 337.0,
          "y": 72.78
        },
        {
          "kind": "tap",
          "t": 10618.0,
          "x": 356.43,
          "y": 129.7
        },
        {
          "kind": "tap",
          "t": 10819.0,
          "x": 95.44,
          "y": 80.53
        },
        {
          "kind": "tap",
          "t": 11014.0,
          "x": 195.9,
          "y": 229.99
        },
        {
          "kind": "tap",
          "t": 11221.0,
          "x": 376.71,
          "y": 73.43
        },
        {
          "kind": "tap",
          "t": 11450.0,
          "x": 337.6,
          "y": 75.13
        },
        {
          "kind": "tap",
          "t": 11622.0,
          "x": 299.05,
          "y": 67.23
        },
        {
          "kind": "tap",
          "t": 11818.0,
          "x": 285.07,
          "y": 178.14
        },
        {
          "kind": "tap",
          "t": 11992.0,
          "x": 183.13,
          "y": 72.47
        },
        {
          "kind": "tap",
          "t": 12199.0,
          "x": 204.48,
          "y": 236.17
        },
        {
          "kind": "tap",
          "t": 12394.0,
          "x": 202.96,
          "y": 224.67
        }
      ],
      "moments": [
        {
          "t": 558.0,
          "intended": "The",
          "samsung": {
            "committed": "The",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1551.0,
          "intended": "door",
          "samsung": {
            "committed": "door",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "door",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "door",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2807.0,
          "intended": "faces",
          "samsung": {
            "committed": "faces",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "faces",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "faces",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3888.0,
          "intended": "away",
          "samsung": {
            "committed": "away",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "away",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "away",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4823.0,
          "intended": "from",
          "samsung": {
            "committed": "from",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "from",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "from",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5792.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7356.0,
          "intended": "weather",
          "samsung": {
            "committed": "weather",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "weather",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "weather",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8581.0,
          "intended": "which",
          "samsung": {
            "committed": "which",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "which",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "which",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9119.0,
          "intended": "is",
          "samsung": {
            "committed": "is",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "is",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "is",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9836.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 11014.0,
          "intended": "whole",
          "samsung": {
            "committed": "whole",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "whole",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "whole",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 12199.0,
          "intended": "point.",
          "samsung": {
            "committed": "point.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "point.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "point.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "The door faces away from the weather which is the whole point.",
        "ours": {
          "control": "The door faces away from the weather which is the whole point.",
          "treatment-ceiling10k": "The door faces away from the weather which is the whole point."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-12",
      "kind": "tap",
      "frame": "ours",
      "intended": "Inside there is a bench a hearth and a window with no glass",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 300.48,
          "y": 77.14
        },
        {
          "kind": "tap",
          "t": 174.0,
          "x": 266.77,
          "y": 168.18
        },
        {
          "kind": "tap",
          "t": 357.0,
          "x": 92.62,
          "y": 118.61
        },
        {
          "kind": "tap",
          "t": 523.0,
          "x": 294.08,
          "y": 72.83
        },
        {
          "kind": "tap",
          "t": 721.0,
          "x": 118.11,
          "y": 116.59
        },
        {
          "kind": "tap",
          "t": 954.0,
          "x": 98.15,
          "y": 65.5
        },
        {
          "kind": "tap",
          "t": 1121.0,
          "x": 200.29,
          "y": 227.69
        },
        {
          "kind": "tap",
          "t": 1341.0,
          "x": 191.51,
          "y": 74.19
        },
        {
          "kind": "tap",
          "t": 1518.0,
          "x": 225.87,
          "y": 125.93
        },
        {
          "kind": "tap",
          "t": 1754.0,
          "x": 101.81,
          "y": 64.25
        },
        {
          "kind": "tap",
          "t": 1906.0,
          "x": 145.32,
          "y": 60.8
        },
        {
          "kind": "tap",
          "t": 2074.0,
          "x": 109.63,
          "y": 73.27
        },
        {
          "kind": "tap",
          "t": 2249.0,
          "x": 198.43,
          "y": 223.47
        },
        {
          "kind": "tap",
          "t": 2427.0,
          "x": 297.47,
          "y": 74.98
        },
        {
          "kind": "tap",
          "t": 2612.0,
          "x": 90.37,
          "y": 114.96
        },
        {
          "kind": "tap",
          "t": 2847.0,
          "x": 195.01,
          "y": 229.18
        },
        {
          "kind": "tap",
          "t": 3090.0,
          "x": 54.14,
          "y": 131.56
        },
        {
          "kind": "tap",
          "t": 3313.0,
          "x": 201.26,
          "y": 232.56
        },
        {
          "kind": "tap",
          "t": 3504.0,
          "x": 230.09,
          "y": 172.47
        },
        {
          "kind": "tap",
          "t": 3703.0,
          "x": 110.31,
          "y": 65.23
        },
        {
          "kind": "tap",
          "t": 3942.0,
          "x": 277.28,
          "y": 178.88
        },
        {
          "kind": "tap",
          "t": 4101.0,
          "x": 153.99,
          "y": 175.45
        },
        {
          "kind": "tap",
          "t": 4267.0,
          "x": 228.76,
          "y": 113.82
        },
        {
          "kind": "tap",
          "t": 4477.0,
          "x": 198.0,
          "y": 234.2
        },
        {
          "kind": "tap",
          "t": 4650.0,
          "x": 48.91,
          "y": 122.5
        },
        {
          "kind": "tap",
          "t": 4840.0,
          "x": 191.85,
          "y": 231.19
        },
        {
          "kind": "tap",
          "t": 5032.0,
          "x": 234.77,
          "y": 119.93
        },
        {
          "kind": "tap",
          "t": 5185.0,
          "x": 105.44,
          "y": 74.46
        },
        {
          "kind": "tap",
          "t": 5395.0,
          "x": 41.07,
          "y": 118.85
        },
        {
          "kind": "tap",
          "t": 5593.0,
          "x": 141.01,
          "y": 66.92
        },
        {
          "kind": "tap",
          "t": 5766.0,
          "x": 173.22,
          "y": 73.93
        },
        {
          "kind": "tap",
          "t": 6012.0,
          "x": 247.89,
          "y": 125.86
        },
        {
          "kind": "tap",
          "t": 6165.0,
          "x": 215.19,
          "y": 232.3
        },
        {
          "kind": "tap",
          "t": 6403.0,
          "x": 41.2,
          "y": 136.17
        },
        {
          "kind": "tap",
          "t": 6557.0,
          "x": 284.77,
          "y": 174.29
        },
        {
          "kind": "tap",
          "t": 6735.0,
          "x": 125.82,
          "y": 121.62
        },
        {
          "kind": "tap",
          "t": 6906.0,
          "x": 200.82,
          "y": 228.24
        },
        {
          "kind": "tap",
          "t": 7146.0,
          "x": 45.43,
          "y": 127.07
        },
        {
          "kind": "tap",
          "t": 7376.0,
          "x": 203.95,
          "y": 230.94
        },
        {
          "kind": "tap",
          "t": 7609.0,
          "x": 72.71,
          "y": 67.56
        },
        {
          "kind": "tap",
          "t": 7814.0,
          "x": 289.71,
          "y": 74.58
        },
        {
          "kind": "tap",
          "t": 7992.0,
          "x": 283.56,
          "y": 180.43
        },
        {
          "kind": "tap",
          "t": 8226.0,
          "x": 123.86,
          "y": 129.87
        },
        {
          "kind": "tap",
          "t": 8414.0,
          "x": 338.85,
          "y": 69.86
        },
        {
          "kind": "tap",
          "t": 8641.0,
          "x": 67.77,
          "y": 69.82
        },
        {
          "kind": "tap",
          "t": 8865.0,
          "x": 198.41,
          "y": 229.78
        },
        {
          "kind": "tap",
          "t": 9028.0,
          "x": 65.59,
          "y": 72.32
        },
        {
          "kind": "tap",
          "t": 9186.0,
          "x": 291.92,
          "y": 74.14
        },
        {
          "kind": "tap",
          "t": 9417.0,
          "x": 174.72,
          "y": 70.71
        },
        {
          "kind": "tap",
          "t": 9571.0,
          "x": 247.69,
          "y": 122.86
        },
        {
          "kind": "tap",
          "t": 9740.0,
          "x": 202.62,
          "y": 234.92
        },
        {
          "kind": "tap",
          "t": 9896.0,
          "x": 276.51,
          "y": 179.99
        },
        {
          "kind": "tap",
          "t": 10071.0,
          "x": 348.24,
          "y": 76.82
        },
        {
          "kind": "tap",
          "t": 10293.0,
          "x": 200.67,
          "y": 230.54
        },
        {
          "kind": "tap",
          "t": 10472.0,
          "x": 208.22,
          "y": 122.49
        },
        {
          "kind": "tap",
          "t": 10631.0,
          "x": 357.97,
          "y": 122.77
        },
        {
          "kind": "tap",
          "t": 10796.0,
          "x": 41.03,
          "y": 135.95
        },
        {
          "kind": "tap",
          "t": 11005.0,
          "x": 80.44,
          "y": 113.76
        },
        {
          "kind": "tap",
          "t": 11169.0,
          "x": 87.99,
          "y": 128.89
        },
        {
          "kind": "tap",
          "t": 11394.0,
          "x": 204.56,
          "y": 228.61
        },
        {
          "kind": "tap",
          "t": 11636.0,
          "x": 209.81,
          "y": 234.28
        }
      ],
      "moments": [
        {
          "t": 1121.0,
          "intended": "Inside",
          "samsung": {
            "committed": "Inside",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "Inside",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "Inside",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2249.0,
          "intended": "there",
          "samsung": {
            "committed": "there",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "there",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "there",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2847.0,
          "intended": "is",
          "samsung": {
            "committed": "is",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "is",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "is",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3313.0,
          "intended": "a",
          "samsung": {
            "committed": "a",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "a",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "a",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 4477.0,
          "intended": "bench",
          "samsung": {
            "committed": "bench",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "bench",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "bench",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4840.0,
          "intended": "a",
          "samsung": {
            "committed": "a",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "a",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "a",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 6165.0,
          "intended": "hearth",
          "samsung": {
            "committed": "hearth",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "hearth",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "hearth",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6906.0,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7376.0,
          "intended": "a",
          "samsung": {
            "committed": "a",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "a",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "a",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 8865.0,
          "intended": "window",
          "samsung": {
            "committed": "window",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "window",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "window",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9740.0,
          "intended": "with",
          "samsung": {
            "committed": "with",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "with",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "with",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10293.0,
          "intended": "no",
          "samsung": {
            "committed": "no",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "no",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "no",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 11394.0,
          "intended": "glass.",
          "samsung": {
            "committed": "glass.",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "glass.",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "glass.",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "Inside there is a bench a hearth and a window with no glass.",
        "ours": {
          "control": "Inside there is a bench a hearth and a window with no glass.",
          "treatment-ceiling10k": "Inside there is a bench a hearth and a window with no glass."
        },
        "apple": null
      }
    },
    {
      "id": "ghost-essay-13",
      "kind": "tap",
      "frame": "ours",
      "intended": "Someone had left dry wood stacked against the far wall",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 92.15,
          "y": 120.02
        },
        {
          "kind": "tap",
          "t": 202.0,
          "x": 330.68,
          "y": 73.52
        },
        {
          "kind": "tap",
          "t": 448.0,
          "x": 310.22,
          "y": 178.92
        },
        {
          "kind": "tap",
          "t": 656.0,
          "x": 100.77,
          "y": 71.48
        },
        {
          "kind": "tap",
          "t": 869.0,
          "x": 337.84,
          "y": 66.62
        },
        {
          "kind": "tap",
          "t": 1084.0,
          "x": 331.0,
          "y": 71.94
        },
        {
          "kind": "tap",
          "t": 1316.0,
          "x": 274.16,
          "y": 184.44
        },
        {
          "kind": "tap",
          "t": 1532.0,
          "x": 104.35,
          "y": 78.72
        },
        {
          "kind": "tap",
          "t": 1684.0,
          "x": 202.65,
          "y": 230.24
        },
        {
          "kind": "tap",
          "t": 1865.0,
          "x": 251.74,
          "y": 115.98
        },
        {
          "kind": "tap",
          "t": 2097.0,
          "x": 45.74,
          "y": 126.27
        },
        {
          "kind": "tap",
          "t": 2309.0,
          "x": 132.44,
          "y": 130.66
        },
        {
          "kind": "tap",
          "t": 2537.0,
          "x": 205.55,
          "y": 230.17
        },
        {
          "kind": "tap",
          "t": 2784.0,
          "x": 358.87,
          "y": 135.94
        },
        {
          "kind": "tap",
          "t": 2968.0,
          "x": 108.66,
          "y": 74.72
        },
        {
          "kind": "tap",
          "t": 3132.0,
          "x": 178.26,
          "y": 83.82
        },
        {
          "kind": "tap",
          "t": 3355.0,
          "x": 210.04,
          "y": 226.96
        },
        {
          "kind": "tap",
          "t": 3568.0,
          "x": 123.01,
          "y": 126.28
        },
        {
          "kind": "tap",
          "t": 3779.0,
          "x": 136.56,
          "y": 69.91
        },
        {
          "kind": "tap",
          "t": 3932.0,
          "x": 217.33,
          "y": 62.8
        },
        {
          "kind": "tap",
          "t": 4143.0,
          "x": 202.86,
          "y": 235.72
        },
        {
          "kind": "tap",
          "t": 4334.0,
          "x": 58.77,
          "y": 66.24
        },
        {
          "kind": "tap",
          "t": 4550.0,
          "x": 324.66,
          "y": 71.34
        },
        {
          "kind": "tap",
          "t": 4736.0,
          "x": 335.49,
          "y": 73.6
        },
        {
          "kind": "tap",
          "t": 4935.0,
          "x": 130.12,
          "y": 133.65
        },
        {
          "kind": "tap",
          "t": 5086.0,
          "x": 196.03,
          "y": 234.31
        },
        {
          "kind": "tap",
          "t": 5327.0,
          "x": 89.56,
          "y": 127.55
        },
        {
          "kind": "tap",
          "t": 5569.0,
          "x": 177.63,
          "y": 64.14
        },
        {
          "kind": "tap",
          "t": 5784.0,
          "x": 45.26,
          "y": 121.78
        },
        {
          "kind": "tap",
          "t": 5969.0,
          "x": 157.09,
          "y": 180.47
        },
        {
          "kind": "tap",
          "t": 6216.0,
          "x": 320.43,
          "y": 121.31
        },
        {
          "kind": "tap",
          "t": 6396.0,
          "x": 102.75,
          "y": 70.19
        },
        {
          "kind": "tap",
          "t": 6574.0,
          "x": 134.33,
          "y": 113.34
        },
        {
          "kind": "tap",
          "t": 6741.0,
          "x": 206.94,
          "y": 237.95
        },
        {
          "kind": "tap",
          "t": 6899.0,
          "x": 36.79,
          "y": 115.9
        },
        {
          "kind": "tap",
          "t": 7094.0,
          "x": 210.22,
          "y": 123.6
        },
        {
          "kind": "tap",
          "t": 7281.0,
          "x": 49.93,
          "y": 127.74
        },
        {
          "kind": "tap",
          "t": 7529.0,
          "x": 283.28,
          "y": 65.02
        },
        {
          "kind": "tap",
          "t": 7775.0,
          "x": 274.42,
          "y": 178.37
        },
        {
          "kind": "tap",
          "t": 7927.0,
          "x": 92.48,
          "y": 110.66
        },
        {
          "kind": "tap",
          "t": 8128.0,
          "x": 174.22,
          "y": 63.38
        },
        {
          "kind": "tap",
          "t": 8374.0,
          "x": 192.54,
          "y": 229.43
        },
        {
          "kind": "tap",
          "t": 8571.0,
          "x": 174.7,
          "y": 66.82
        },
        {
          "kind": "tap",
          "t": 8740.0,
          "x": 232.37,
          "y": 116.46
        },
        {
          "kind": "tap",
          "t": 8958.0,
          "x": 101.28,
          "y": 70.75
        },
        {
          "kind": "tap",
          "t": 9122.0,
          "x": 207.51,
          "y": 236.96
        },
        {
          "kind": "tap",
          "t": 9293.0,
          "x": 158.59,
          "y": 122.23
        },
        {
          "kind": "tap",
          "t": 9486.0,
          "x": 41.86,
          "y": 125.7
        },
        {
          "kind": "tap",
          "t": 9663.0,
          "x": 149.87,
          "y": 73.88
        },
        {
          "kind": "tap",
          "t": 9909.0,
          "x": 208.02,
          "y": 238.21
        },
        {
          "kind": "tap",
          "t": 10109.0,
          "x": 65.93,
          "y": 67.29
        },
        {
          "kind": "tap",
          "t": 10337.0,
          "x": 41.25,
          "y": 123.49
        },
        {
          "kind": "tap",
          "t": 10565.0,
          "x": 349.91,
          "y": 117.18
        },
        {
          "kind": "tap",
          "t": 10756.0,
          "x": 357.67,
          "y": 128.04
        }
      ],
      "moments": [
        {
          "t": 1684.0,
          "intended": "Someone",
          "samsung": {
            "committed": "Someoone",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "Someone",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "Someone",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 2537.0,
          "intended": "had",
          "samsung": {
            "committed": "had",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "had",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "had",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3355.0,
          "intended": "left",
          "samsung": {
            "committed": "let",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "let",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "let",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4143.0,
          "intended": "dry",
          "samsung": {
            "committed": "dry",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "dry",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "dry",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5086.0,
          "intended": "wood",
          "samsung": {
            "committed": "wood",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "wood",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "wood",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6741.0,
          "intended": "stacked",
          "samsung": {
            "committed": "stacked",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "stacked",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "stacked",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8374.0,
          "intended": "against",
          "samsung": {
            "committed": "against",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "against",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "against",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9122.0,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9909.0,
          "intended": "far",
          "samsung": {
            "committed": "far",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "far",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "far",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10756.0,
          "intended": "wall",
          "samsung": {
            "committed": "wall",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "wall",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "wall",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "Someoone had let dry wood stacked against the far wall",
        "ours": {
          "control": "Someone had let dry wood stacked against the far wall",
          "treatment-ceiling10k": "Someone had let dry wood stacked against the far wall"
        },
        "apple": null
      }
    },
    {
      "id": "phone-v1-sent-11",
      "kind": "tap",
      "frame": "samsung",
      "intended": "The walk out took less time than the walk in",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 193.56,
          "y": 553.09
        },
        {
          "kind": "tap",
          "t": 367.6,
          "x": 238.26,
          "y": 616.21
        },
        {
          "kind": "tap",
          "t": 467.5,
          "x": 105.77,
          "y": 550.05
        },
        {
          "kind": "tap",
          "t": 609.6,
          "x": 230.42,
          "y": 732.86
        },
        {
          "kind": "tap",
          "t": 751.2,
          "x": 72.12,
          "y": 545.69
        },
        {
          "kind": "tap",
          "t": 951.1,
          "x": 31.03,
          "y": 592.05
        },
        {
          "kind": "tap",
          "t": 1026.4,
          "x": 367.33,
          "y": 601.19
        },
        {
          "kind": "tap",
          "t": 1201.9,
          "x": 334.79,
          "y": 612.51
        },
        {
          "kind": "tap",
          "t": 1443.3,
          "x": 249.91,
          "y": 719.58
        },
        {
          "kind": "tap",
          "t": 2103.5,
          "x": 350.66,
          "y": 531.11
        },
        {
          "kind": "tap",
          "t": 2344.7,
          "x": 260.76,
          "y": 565.93
        },
        {
          "kind": "tap",
          "t": 2461.8,
          "x": 191.75,
          "y": 539.17
        },
        {
          "kind": "tap",
          "t": 2703.7,
          "x": 254.63,
          "y": 733.3
        },
        {
          "kind": "tap",
          "t": 2912.3,
          "x": 174.07,
          "y": 528.28
        },
        {
          "kind": "tap",
          "t": 3004.3,
          "x": 334.79,
          "y": 574.2
        },
        {
          "kind": "tap",
          "t": 3162.6,
          "x": 330.57,
          "y": 587.05
        },
        {
          "kind": "tap",
          "t": 3362.7,
          "x": 306.16,
          "y": 660.39
        },
        {
          "kind": "tap",
          "t": 3554.4,
          "x": 257.74,
          "y": 748.97
        },
        {
          "kind": "tap",
          "t": 3888.4,
          "x": 374.36,
          "y": 655.38
        },
        {
          "kind": "tap",
          "t": 4038.4,
          "x": 377.07,
          "y": 658.43
        },
        {
          "kind": "tap",
          "t": 4172.0,
          "x": 377.17,
          "y": 659.52
        },
        {
          "kind": "tap",
          "t": 4707.5,
          "x": 342.02,
          "y": 550.92
        },
        {
          "kind": "tap",
          "t": 4939.5,
          "x": 324.04,
          "y": 623.17
        },
        {
          "kind": "tap",
          "t": 5173.5,
          "x": 275.32,
          "y": 727.85
        },
        {
          "kind": "tap",
          "t": 5381.8,
          "x": 352.67,
          "y": 631.22
        },
        {
          "kind": "tap",
          "t": 5423.3,
          "x": 97.83,
          "y": 546.57
        },
        {
          "kind": "tap",
          "t": 5632.5,
          "x": 84.37,
          "y": 599.89
        },
        {
          "kind": "tap",
          "t": 5782.1,
          "x": 80.15,
          "y": 600.32
        },
        {
          "kind": "tap",
          "t": 5907.7,
          "x": 257.54,
          "y": 725.46
        },
        {
          "kind": "tap",
          "t": 6492.4,
          "x": 186.73,
          "y": 548.09
        },
        {
          "kind": "tap",
          "t": 6575.1,
          "x": 300.13,
          "y": 549.61
        },
        {
          "kind": "tap",
          "t": 6775.5,
          "x": 321.13,
          "y": 659.52
        },
        {
          "kind": "tap",
          "t": 6883.5,
          "x": 102.55,
          "y": 553.09
        },
        {
          "kind": "tap",
          "t": 7025.4,
          "x": 259.35,
          "y": 730.03
        },
        {
          "kind": "tap",
          "t": 7234.8,
          "x": 186.93,
          "y": 535.9
        },
        {
          "kind": "tap",
          "t": 7334.7,
          "x": 251.62,
          "y": 615.56
        },
        {
          "kind": "tap",
          "t": 7442.9,
          "x": 55.14,
          "y": 588.79
        },
        {
          "kind": "tap",
          "t": 7568.1,
          "x": 276.33,
          "y": 665.61
        },
        {
          "kind": "tap",
          "t": 7784.6,
          "x": 247.3,
          "y": 739.82
        },
        {
          "kind": "tap",
          "t": 7968.5,
          "x": 182.61,
          "y": 534.81
        },
        {
          "kind": "tap",
          "t": 8060.5,
          "x": 251.42,
          "y": 618.17
        },
        {
          "kind": "tap",
          "t": 8193.8,
          "x": 109.48,
          "y": 535.9
        },
        {
          "kind": "tap",
          "t": 8302.4,
          "x": 246.19,
          "y": 726.77
        },
        {
          "kind": "tap",
          "t": 8627.2,
          "x": 67.8,
          "y": 547.22
        },
        {
          "kind": "tap",
          "t": 8828.1,
          "x": 43.39,
          "y": 593.79
        },
        {
          "kind": "tap",
          "t": 8919.3,
          "x": 362.81,
          "y": 606.2
        },
        {
          "kind": "tap",
          "t": 9103.1,
          "x": 333.98,
          "y": 632.53
        },
        {
          "kind": "tap",
          "t": 9353.3,
          "x": 271.4,
          "y": 729.81
        },
        {
          "kind": "tap",
          "t": 9804.3,
          "x": 298.83,
          "y": 548.31
        },
        {
          "kind": "tap",
          "t": 9987.9,
          "x": 281.05,
          "y": 663.87
        },
        {
          "kind": "tap",
          "t": 10581.6,
          "x": 357.49,
          "y": 270.17
        }
      ],
      "moments": [
        {
          "t": 609.6,
          "intended": "The",
          "samsung": {
            "committed": "The",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1443.3,
          "intended": "walk",
          "samsung": {
            "committed": "walk",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "walk",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "walk",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2703.7,
          "intended": "out",
          "samsung": {
            "committed": "out",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "ut",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "ut",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3554.4,
          "intended": "took",
          "samsung": {
            "committed": "took",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "ok",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "ok",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 5173.5,
          "intended": "less",
          "samsung": {
            "committed": "less",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "less",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "less",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5907.7,
          "intended": "time",
          "samsung": {
            "committed": "time",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "time",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "time",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7025.4,
          "intended": "than",
          "samsung": {
            "committed": "than",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "than",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "than",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7784.6,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8302.4,
          "intended": "walk",
          "samsung": {
            "committed": "walk",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "walk",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "walk",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 9353.3,
          "intended": "in",
          "samsung": {
            "committed": "in",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "in",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "in",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "The walk out took less time than the walk in",
        "ours": {
          "control": "The walk ut ok less time than the walk in",
          "treatment-ceiling10k": "The walk ut ok less time than the walk in"
        },
        "apple": null
      }
    },
    {
      "id": "phone-v1-sent-10",
      "kind": "tap",
      "frame": "samsung",
      "intended": "The river ran brown and full after a week of rain",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 184.22,
          "y": 551.57
        },
        {
          "kind": "tap",
          "t": 99.7,
          "x": 250.81,
          "y": 616.43
        },
        {
          "kind": "tap",
          "t": 208.4,
          "x": 105.47,
          "y": 537.64
        },
        {
          "kind": "tap",
          "t": 358.3,
          "x": 238.56,
          "y": 726.11
        },
        {
          "kind": "tap",
          "t": 475.4,
          "x": 144.64,
          "y": 534.16
        },
        {
          "kind": "tap",
          "t": 600.5,
          "x": 304.25,
          "y": 556.36
        },
        {
          "kind": "tap",
          "t": 808.9,
          "x": 221.18,
          "y": 662.56
        },
        {
          "kind": "tap",
          "t": 909.0,
          "x": 98.13,
          "y": 544.82
        },
        {
          "kind": "tap",
          "t": 1084.3,
          "x": 136.3,
          "y": 542.21
        },
        {
          "kind": "tap",
          "t": 1184.1,
          "x": 237.55,
          "y": 719.8
        },
        {
          "kind": "tap",
          "t": 1467.9,
          "x": 155.29,
          "y": 548.52
        },
        {
          "kind": "tap",
          "t": 2260.7,
          "x": 36.06,
          "y": 612.07
        },
        {
          "kind": "tap",
          "t": 2353.2,
          "x": 281.75,
          "y": 660.82
        },
        {
          "kind": "tap",
          "t": 2544.6,
          "x": 251.82,
          "y": 718.06
        },
        {
          "kind": "tap",
          "t": 2753.2,
          "x": 237.25,
          "y": 668.44
        },
        {
          "kind": "tap",
          "t": 2836.6,
          "x": 132.18,
          "y": 565.06
        },
        {
          "kind": "tap",
          "t": 2978.2,
          "x": 338.4,
          "y": 582.91
        },
        {
          "kind": "tap",
          "t": 3111.9,
          "x": 70.11,
          "y": 563.11
        },
        {
          "kind": "tap",
          "t": 3228.6,
          "x": 286.47,
          "y": 673.23
        },
        {
          "kind": "tap",
          "t": 3445.4,
          "x": 255.33,
          "y": 730.25
        },
        {
          "kind": "tap",
          "t": 4038.7,
          "x": 49.32,
          "y": 615.77
        },
        {
          "kind": "tap",
          "t": 4146.6,
          "x": 277.13,
          "y": 677.8
        },
        {
          "kind": "tap",
          "t": 4246.5,
          "x": 122.04,
          "y": 600.76
        },
        {
          "kind": "tap",
          "t": 4355.1,
          "x": 262.56,
          "y": 737.0
        },
        {
          "kind": "tap",
          "t": 4547.6,
          "x": 155.99,
          "y": 616.64
        },
        {
          "kind": "tap",
          "t": 4663.8,
          "x": 276.63,
          "y": 576.16
        },
        {
          "kind": "tap",
          "t": 4880.9,
          "x": 364.72,
          "y": 637.1
        },
        {
          "kind": "tap",
          "t": 5039.3,
          "x": 366.02,
          "y": 639.93
        },
        {
          "kind": "tap",
          "t": 5364.6,
          "x": 242.37,
          "y": 741.57
        },
        {
          "kind": "tap",
          "t": 5748.6,
          "x": 51.73,
          "y": 618.38
        },
        {
          "kind": "tap",
          "t": 5890.3,
          "x": 163.72,
          "y": 608.81
        },
        {
          "kind": "tap",
          "t": 6065.8,
          "x": 191.85,
          "y": 564.85
        },
        {
          "kind": "tap",
          "t": 6182.5,
          "x": 105.06,
          "y": 543.08
        },
        {
          "kind": "tap",
          "t": 6358.0,
          "x": 136.7,
          "y": 549.61
        },
        {
          "kind": "tap",
          "t": 6441.0,
          "x": 238.96,
          "y": 728.94
        },
        {
          "kind": "tap",
          "t": 6583.1,
          "x": 42.18,
          "y": 617.08
        },
        {
          "kind": "tap",
          "t": 6683.4,
          "x": 259.35,
          "y": 730.03
        },
        {
          "kind": "tap",
          "t": 7058.5,
          "x": 382.5,
          "y": 667.06
        },
        {
          "kind": "tap",
          "t": 8352.6,
          "x": 369.24,
          "y": 607.72
        },
        {
          "kind": "tap",
          "t": 8476.9,
          "x": 366.73,
          "y": 615.77
        },
        {
          "kind": "tap",
          "t": 8743.9,
          "x": 240.27,
          "y": 725.46
        },
        {
          "kind": "tap",
          "t": 9078.0,
          "x": 38.37,
          "y": 614.68
        },
        {
          "kind": "tap",
          "t": 9203.1,
          "x": 171.06,
          "y": 608.16
        },
        {
          "kind": "tap",
          "t": 9378.2,
          "x": 188.74,
          "y": 562.89
        },
        {
          "kind": "tap",
          "t": 9494.9,
          "x": 97.43,
          "y": 545.69
        },
        {
          "kind": "tap",
          "t": 9720.7,
          "x": 139.72,
          "y": 541.78
        },
        {
          "kind": "tap",
          "t": 9845.1,
          "x": 239.46,
          "y": 726.77
        },
        {
          "kind": "tap",
          "t": 10372.0,
          "x": 42.89,
          "y": 610.77
        },
        {
          "kind": "tap",
          "t": 10512.7,
          "x": 251.62,
          "y": 735.04
        },
        {
          "kind": "tap",
          "t": 10638.2,
          "x": 78.14,
          "y": 545.69
        },
        {
          "kind": "tap",
          "t": 10830.3,
          "x": 112.4,
          "y": 553.09
        },
        {
          "kind": "tap",
          "t": 11038.5,
          "x": 94.72,
          "y": 548.52
        },
        {
          "kind": "tap",
          "t": 12073.3,
          "x": 329.06,
          "y": 614.9
        },
        {
          "kind": "tap",
          "t": 12298.9,
          "x": 252.92,
          "y": 734.17
        },
        {
          "kind": "tap",
          "t": 12524.0,
          "x": 343.83,
          "y": 564.85
        },
        {
          "kind": "tap",
          "t": 12598.9,
          "x": 163.72,
          "y": 598.8
        },
        {
          "kind": "tap",
          "t": 12799.2,
          "x": 259.35,
          "y": 723.94
        },
        {
          "kind": "tap",
          "t": 13091.1,
          "x": 137.61,
          "y": 548.52
        },
        {
          "kind": "tap",
          "t": 13400.2,
          "x": 297.32,
          "y": 569.42
        },
        {
          "kind": "tap",
          "t": 13827.2,
          "x": 355.48,
          "y": 646.24
        },
        {
          "kind": "tap",
          "t": 13975.6,
          "x": 42.89,
          "y": 608.59
        },
        {
          "kind": "tap",
          "t": 14184.1,
          "x": 318.31,
          "y": 568.33
        },
        {
          "kind": "tap",
          "t": 14393.6,
          "x": 305.66,
          "y": 669.31
        },
        {
          "kind": "tap",
          "t": 15285.2,
          "x": 344.63,
          "y": 295.85
        }
      ],
      "moments": [
        {
          "t": 358.3,
          "intended": "The",
          "samsung": {
            "committed": "The",
            "bar": null,
            "note": "Samsung recorded 18 in-flight backspace corrections while typing this sentence (session-keystrokes.json events); the final commit matched the prompt."
          },
          "ours": {
            "control": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "The",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1184.1,
          "intended": "river",
          "samsung": {
            "committed": "river",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "river",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "river",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2544.6,
          "intended": "ran",
          "samsung": {
            "committed": "ran",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "ran",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "ran",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3445.4,
          "intended": "brown",
          "samsung": {
            "committed": "brown",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "brown",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "brown",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 4355.1,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5364.6,
          "intended": "full",
          "samsung": {
            "committed": "full",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "full",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "full",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6441.0,
          "intended": "after",
          "samsung": {
            "committed": "after",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "after",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "after",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 6683.4,
          "intended": "a",
          "samsung": {
            "committed": "a",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "all",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "all",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        },
        {
          "t": 8743.9,
          "intended": "week",
          "samsung": {
            "committed": "week",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "after",
              "bar": null,
              "decision": "silent"
            },
            "treatment-ceiling10k": {
              "committed": "after",
              "bar": null,
              "decision": "silent"
            }
          },
          "apple": null
        },
        {
          "t": 9845.1,
          "intended": "of",
          "samsung": {
            "committed": "of",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "a",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "a",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10512.7,
          "intended": "rain",
          "samsung": {
            "committed": "rain",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "week",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "week",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "The river ran brown and full after a week of rain",
        "ours": {
          "control": "The river ran brown and full after all after a week",
          "treatment-ceiling10k": "The river ran brown and full after all after a week"
        },
        "apple": null
      }
    },
    {
      "id": "phone-v1-sent-07",
      "kind": "tap",
      "frame": "samsung",
      "intended": "Cloud dropped to the col and took the summit with it",
      "touches": [
        {
          "kind": "tap",
          "t": 0.0,
          "x": 171.96,
          "y": 671.27
        },
        {
          "kind": "tap",
          "t": 116.6,
          "x": 359.4,
          "y": 596.84
        },
        {
          "kind": "tap",
          "t": 291.4,
          "x": 336.39,
          "y": 552.22
        },
        {
          "kind": "tap",
          "t": 484.3,
          "x": 254.93,
          "y": 561.58
        },
        {
          "kind": "tap",
          "t": 575.4,
          "x": 115.81,
          "y": 612.73
        },
        {
          "kind": "tap",
          "t": 725.4,
          "x": 266.38,
          "y": 717.84
        },
        {
          "kind": "tap",
          "t": 825.4,
          "x": 118.52,
          "y": 604.67
        },
        {
          "kind": "tap",
          "t": 1000.9,
          "x": 147.45,
          "y": 546.57
        },
        {
          "kind": "tap",
          "t": 1117.9,
          "x": 328.16,
          "y": 556.58
        },
        {
          "kind": "tap",
          "t": 1342.9,
          "x": 374.06,
          "y": 561.15
        },
        {
          "kind": "tap",
          "t": 1484.6,
          "x": 369.34,
          "y": 568.98
        },
        {
          "kind": "tap",
          "t": 1601.5,
          "x": 103.36,
          "y": 553.31
        },
        {
          "kind": "tap",
          "t": 1777.2,
          "x": 125.56,
          "y": 602.06
        },
        {
          "kind": "tap",
          "t": 1868.4,
          "x": 263.57,
          "y": 707.61
        },
        {
          "kind": "tap",
          "t": 2127.0,
          "x": 178.49,
          "y": 545.26
        },
        {
          "kind": "tap",
          "t": 2193.8,
          "x": 338.5,
          "y": 575.08
        },
        {
          "kind": "tap",
          "t": 2394.4,
          "x": 264.47,
          "y": 704.13
        },
        {
          "kind": "tap",
          "t": 2519.8,
          "x": 187.73,
          "y": 546.13
        },
        {
          "kind": "tap",
          "t": 2653.1,
          "x": 249.61,
          "y": 632.31
        },
        {
          "kind": "tap",
          "t": 2719.8,
          "x": 111.79,
          "y": 532.42
        },
        {
          "kind": "tap",
          "t": 2870.1,
          "x": 251.52,
          "y": 729.16
        },
        {
          "kind": "tap",
          "t": 3054.0,
          "x": 163.72,
          "y": 649.07
        },
        {
          "kind": "tap",
          "t": 3179.2,
          "x": 348.45,
          "y": 562.45
        },
        {
          "kind": "tap",
          "t": 3337.6,
          "x": 347.84,
          "y": 567.46
        },
        {
          "kind": "tap",
          "t": 3537.8,
          "x": 352.87,
          "y": 623.83
        },
        {
          "kind": "tap",
          "t": 3804.5,
          "x": 258.25,
          "y": 722.41
        },
        {
          "kind": "tap",
          "t": 4405.9,
          "x": 54.94,
          "y": 597.93
        },
        {
          "kind": "tap",
          "t": 4530.4,
          "x": 277.03,
          "y": 679.76
        },
        {
          "kind": "tap",
          "t": 4622.2,
          "x": 115.01,
          "y": 603.59
        },
        {
          "kind": "tap",
          "t": 4722.4,
          "x": 263.77,
          "y": 734.6
        },
        {
          "kind": "tap",
          "t": 4847.9,
          "x": 169.65,
          "y": 557.01
        },
        {
          "kind": "tap",
          "t": 4989.6,
          "x": 343.83,
          "y": 565.28
        },
        {
          "kind": "tap",
          "t": 5181.9,
          "x": 337.6,
          "y": 581.6
        },
        {
          "kind": "tap",
          "t": 5357.0,
          "x": 330.06,
          "y": 632.97
        },
        {
          "kind": "tap",
          "t": 5590.4,
          "x": 257.24,
          "y": 731.77
        },
        {
          "kind": "tap",
          "t": 5724.1,
          "x": 179.29,
          "y": 549.83
        },
        {
          "kind": "tap",
          "t": 5874.2,
          "x": 239.36,
          "y": 630.14
        },
        {
          "kind": "tap",
          "t": 5957.4,
          "x": 105.87,
          "y": 538.29
        },
        {
          "kind": "tap",
          "t": 6090.9,
          "x": 248.5,
          "y": 728.07
        },
        {
          "kind": "tap",
          "t": 6592.5,
          "x": 74.93,
          "y": 596.4
        },
        {
          "kind": "tap",
          "t": 6716.8,
          "x": 270.0,
          "y": 555.05
        },
        {
          "kind": "tap",
          "t": 6934.1,
          "x": 329.66,
          "y": 661.26
        },
        {
          "kind": "tap",
          "t": 7075.2,
          "x": 330.87,
          "y": 654.08
        },
        {
          "kind": "tap",
          "t": 7250.7,
          "x": 306.16,
          "y": 563.76
        },
        {
          "kind": "tap",
          "t": 7350.7,
          "x": 188.03,
          "y": 543.08
        },
        {
          "kind": "tap",
          "t": 7551.5,
          "x": 260.96,
          "y": 722.2
        },
        {
          "kind": "tap",
          "t": 8152.8,
          "x": 68.8,
          "y": 547.65
        },
        {
          "kind": "tap",
          "t": 8243.3,
          "x": 300.13,
          "y": 561.58
        },
        {
          "kind": "tap",
          "t": 8402.3,
          "x": 176.98,
          "y": 544.17
        },
        {
          "kind": "tap",
          "t": 8477.0,
          "x": 252.62,
          "y": 629.05
        },
        {
          "kind": "tap",
          "t": 8644.2,
          "x": 253.73,
          "y": 721.54
        },
        {
          "kind": "tap",
          "t": 8852.8,
          "x": 296.42,
          "y": 584.0
        },
        {
          "kind": "tap",
          "t": 8886.4,
          "x": 172.26,
          "y": 539.38
        },
        {
          "kind": "tap",
          "t": 10087.5,
          "x": 78.14,
          "y": 486.5
        },
        {
          "kind": "tap",
          "t": 10530.5,
          "x": 341.21,
          "y": 282.36
        }
      ],
      "moments": [
        {
          "t": 725.4,
          "intended": "Cloud",
          "samsung": {
            "committed": "Cloud",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "Cloud",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "Cloud",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 1868.4,
          "intended": "dropped",
          "samsung": {
            "committed": "dropped",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "dropped",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "dropped",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2394.4,
          "intended": "to",
          "samsung": {
            "committed": "to",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "to",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "to",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 2870.1,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 3804.5,
          "intended": "col",
          "samsung": {
            "committed": "cool",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "cool",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "cool",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 4722.4,
          "intended": "and",
          "samsung": {
            "committed": "and",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "and",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 5590.4,
          "intended": "took",
          "samsung": {
            "committed": "took",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "took",
              "bar": null,
              "decision": "corrected"
            },
            "treatment-ceiling10k": {
              "committed": "took",
              "bar": null,
              "decision": "corrected"
            }
          },
          "apple": null
        },
        {
          "t": 6090.9,
          "intended": "the",
          "samsung": {
            "committed": "the",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "the",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 7551.5,
          "intended": "summit",
          "samsung": {
            "committed": "summit",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "summit",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "summit",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 8644.2,
          "intended": "with",
          "samsung": {
            "committed": "with",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "with",
              "bar": null,
              "decision": "refused-real-word"
            },
            "treatment-ceiling10k": {
              "committed": "with",
              "bar": null,
              "decision": "refused-real-word"
            }
          },
          "apple": null
        },
        {
          "t": 10530.5,
          "intended": "it",
          "samsung": {
            "committed": "it",
            "bar": null,
            "note": null
          },
          "ours": {
            "control": {
              "committed": "jt",
              "bar": null,
              "decision": null
            },
            "treatment-ceiling10k": {
              "committed": "jt",
              "bar": null,
              "decision": null
            }
          },
          "apple": null
        }
      ],
      "committed": {
        "samsung": "Cloud dropped to the cool and took the summit with it",
        "ours": {
          "control": "Cloud dropped to the cool and took the summit with jt",
          "treatment-ceiling10k": "Cloud dropped to the cool and took the summit with jt"
        },
        "apple": null
      }
    }
  ]
};
