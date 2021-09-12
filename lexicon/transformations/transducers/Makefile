all:
	##########
	# Nahuat #
	##########
	hfst-lexc nahuat/lexc/variant.lexc -o nahuat/fst/input.fst

	hfst-lexc nahuat/lexc/dico.lexc -o nahuat/fst/to_dico.fst

	hfst-lexc nahuat/lexc/flex_orth.lexc -o nahuat/fst/flex.fst
	hfst-twolc nahuat/lexc/flex_orth.twol -o nahuat/fst/flex_orth.twol.fst
	hfst-compose-intersect -1 nahuat/fst/flex.fst -2 nahuat/fst/flex_orth.twol.fst -o nahuat/fst/flex_w_rules.fst

	hfst-lexc nahuat/lexc/vln.lexc -o nahuat/fst/vln.fst

	hfst-lexc nahuat/lexc/isoglosses.lexc -o nahuat/fst/isoglosses.fst

	#####################
	# Intermediary FSTs #
	#####################

	# in2flex = input.fst .o. flex.fst
	hfst-compose -1 nahuat/fst/input.fst -2 nahuat/fst/flex_w_rules.fst -o nahuat/fst/in2flex.fst

	# in2vln = input.fst .o. vln.fst
	hfst-compose -1 nahuat/fst/input.fst -2 nahuat/fst/vln.fst -o nahuat/fst/in2vln.fst

	# in2iso = input.fst .o. isoglosses.fst
	hfst-compose -1 nahuat/fst/input.fst -2 nahuat/fst/isoglosses.fst -o nahuat/fst/in2iso.fst

	# in2flex_iso = in2flex.fst .o. isoglosses.fst
	hfst-compose -1 nahuat/fst/in2iso.fst -2 nahuat/fst/flex_w_rules.fst -o nahuat/fst/in2flex_iso.fst

	# in2flex_vln = vln.fst .o. in2flex.fst
	hfst-compose -1 nahuat/fst/in2vln.fst -2 nahuat/fst/flex_w_rules.fst -o nahuat/fst/in2flex_vln.fst

	# in2vln_iso = in2vln.fst .o. isoglosses.fst
	hfst-compose -1 nahuat/fst/in2vln.fst -2 nahuat/fst/isoglosses.fst -o nahuat/fst/in2vln_iso.fst

	# in2flex_vln_iso = in2flex_vln.fst .o. isoglosses.fst
	hfst-compose -1 nahuat/fst/in2flex_iso.fst -2 nahuat/fst/vln.fst -o nahuat/fst/in2flex_vln_iso.fst


	###############
	# Output FSTs #
	###############

	# in2dic_flex = in2flex .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2flex.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_flex.fst

	# in2dic_vln = in2vln .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2vln.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_vln.fst

	# in2dic_iso = in2iso .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2iso.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_iso.fst

	# in2dic_flex_vln = in2flex_vln.fst .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2flex_vln.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_flex_vln.fst

	# in2dic_flex_iso = in2flex_iso.fst .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2flex_iso.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_flex_iso.fst

	# in2dic_vln_iso = in2vln_iso.fst .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2vln_iso.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_vln_iso.fst

	# in2dic_flex_vln_iso = in2flex_vln_iso.fst .o. to_dico.fst
	hfst-compose -1 nahuat/fst/in2flex_vln_iso.fst -2 nahuat/fst/to_dico.fst -o nahuat/fst/in2dic_flex_vln_iso.fst


	####################
	# Output ATT files #
	####################
	hfst-fst2txt nahuat/fst/in2dic_flex.fst > nahuat/att/in2dic_flex.att
	hfst-fst2txt nahuat/fst/in2dic_vln.fst > nahuat/att/in2dic_vln.att
	hfst-fst2txt nahuat/fst/in2dic_iso.fst > nahuat/att/in2dic_iso.att
	hfst-fst2txt nahuat/fst/in2dic_flex_vln.fst > nahuat/att/in2dic_flex_vln.att
	hfst-fst2txt nahuat/fst/in2dic_flex_iso.fst > nahuat/att/in2dic_flex_iso.att
	hfst-fst2txt nahuat/fst/in2dic_vln_iso.fst > nahuat/att/in2dic_vln_iso.att
	hfst-fst2txt nahuat/fst/in2dic_flex_vln_iso.fst > nahuat/att/in2dic_flex_vln_iso.att

	###########################################################################

	######################
	# Mixtec Plant Names #
	######################
	hfst-lexc mixtec_plant_names/lexc/plant_names.lexc -o mixtec_plant_names/fst/mpn-all-names.fst
	hfst-lexc mixtec_plant_names/lexc/plant_names_segmental_alts.lexc -o mixtec_plant_names/fst/mpn-segmental.fst
	hfst-twolc mixtec_plant_names/lexc/mixtec_plant_names.twol -o mixtec_plant_names/fst/mpn-tone-alts.fst

	hfst-compose -1 mixtec_plant_names/fst/mpn-all-names.fst -2 mixtec_plant_names/fst/mpn-tone-alts.fst -o mixtec_plant_names/fst/names-to-tone-variations.fst
	hfst-invert mixtec_plant_names/fst/names-to-tone-variations.fst -o mixtec_plant_names/fst/mpn-tone-neutralization.fst
	hfst-compose -1 mixtec_plant_names/fst/mpn-segmental.fst -2 mixtec_plant_names/fst/mpn-tone-neutralization.fst -o mixtec_plant_names/fst/mpn-all.fst

	hfst-fst2txt mixtec_plant_names/fst/mpn-all.fst > mixtec_plant_names/att/mpn-all.att
	hfst-fst2txt mixtec_plant_names/fst/mpn-segmental.fst > mixtec_plant_names/att/mpn-segmental.att
	hfst-fst2txt mixtec_plant_names/fst/names-to-tone-variations.fst > mixtec_plant_names/att/names-to-tone-variations.att
	hfst-fst2txt mixtec_plant_names/fst/mpn-tone-neutralization.fst > mixtec_plant_names/att/mpn-tone-neutralization.att


clean:
	rm nahuat/fst/*fst &
	rm nahuat/att/*att &
	rm mixtec_plant_names/fst/*fst &
	rm mixtec_plant_names/att/*att
